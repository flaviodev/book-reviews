
class ReviewDataJsonGenerator {

    private fs = require("fs");

    private reviews: any[] = [];

    generate() {
        this.reviews.push({
            name: "name 1",
            title: "title 1",
            authors: ["author 1"],
            labels: ["label 1"],
            image: "reviews/image1.png",
            content: "content1",
            date: "2007-11-25T15:30:00.000Z",
          });
          
          this.fs.writeFile("src/infrastructure/data.json", JSON.stringify(this.reviews), (error: Error) => {
            if (error) throw error;
          
            console.log("Reviews Generated!");
          });
    }
}

const generator = new ReviewDataJsonGenerator();
generator.generate();

