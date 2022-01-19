
class ReviewDataJsonGenerator {
  private path = require("path");
  private fs = require("fs");

  private reviews: any[] = [];

  readFile(name: string, filename: string) {
    this.fs.readFile(filename, (error: Error | null, data: Buffer) => {
      if(error) throw error;
  
      const lines = data.toString().replace(/\r\n/g,'\n').split('\n');
  
      let json = `{ "name" : "${name.replaceAll(".markdown", "")}", `;
      let attributesOpen = false;

      for(let line of lines) {
        if(line.startsWith("---") && !attributesOpen) {
          attributesOpen = true;
        } else if(line.startsWith("---") && attributesOpen) {
           json += `"content" : "`;
           attributesOpen = false;
        } else if(attributesOpen) {
          let parts = line.split(":");
          let key = parts[0].trim();
          let value = parts[1].trim();
          
          if(value.startsWith("[")) {
             let arrayValues = value.substring(1, value.length-1).split(",");
             value = `[${arrayValues.map(v => `"${v}"`).join(",")}]`;
          } else {
            value = `"${value}"`;
          }
          json += `"${key}":${value}, `;
        } else {
          json += `\\n${line.replaceAll("\"", "\\\"")}`;
        }
      }
      json += `" }`;

      console.log(" Json -> ");
      console.log(json);
      let objectReview = JSON.parse(json);

      console.log(" Parse -> ");
      console.log(objectReview);

      this.reviews.push(objectReview);

      let converted = this.reviews.map((review) => 
        ( {
            name: review.name,
            title: review.title,
            tags: review.tags, 
            image: `/review-images/${review.img}`,
            date: review.date,
            content: review.content
          }
        )
      );

      this.fs.writeFile(
        "src/infrastructure/data.json",
        JSON.stringify(converted),
        (error: Error) => {
          if (error) throw error;
  
          console.log("Reviews Generated!");
        }
      );
  });
  }

  generate(readFile:(name:string, filename: string) => void) {
    const directoryPath = this.path.join(__dirname, "../reviews");

    this.fs.readdir(directoryPath, function (error: Error, files: string[]) {
      if (error) {
        return console.log("Unable to scan directory: " + error);
      }
      
      files.forEach( file => {
        readFile(file, `${directoryPath}/${file}`);
      })
    });
  }
}

const generator = new ReviewDataJsonGenerator();
generator.generate((file, filename) => {
  generator.readFile(file, filename)
});
