const path = require("path");
const fs = require("fs");

const reviews:any[] = [];
const directoryPath = path.join(__dirname, "../reviews");

const readReviewFile = (name: string, filename: string) => {
  const data = fs.readFileSync(filename);

  const lines = data.toString().replace(/\r\n/g, "\n").split("\n");

  let json = "{ \"name\" : \"" + name.replaceAll(".markdown", "") + "\", ";
  let attributesOpen = false;

  for (let line of lines) {
    if (line.startsWith("---") && !attributesOpen) {
      attributesOpen = true;
    } else if (line.startsWith("---") && attributesOpen) {
      json += `"content" : "`;
      attributesOpen = false;
    } else if (attributesOpen) {
      let parts = line.split(":");
      let key = parts[0].trim();
      let value = parts[1].trim();

      if (value.startsWith("[")) {
        let arrayValues = value.substring(1, value.length - 1).split(",");
        value = "[" + arrayValues.map((v:string) => `"${v}"`).join(",") + "]";
      } else {
        value = `"${value}"`;
      }
      json += `"${key}":${value}, `;
    } else {
      json += `\\n${line.replaceAll('"', '\\"')}`;
    }
  }
  json += `" }`;

  let objectReview = JSON.parse(json);
  reviews.push(objectReview);
}

let filenames:string[] = fs.readdirSync(directoryPath);

filenames.sort().forEach((filename) => {
  readReviewFile(filename, `${directoryPath}/${filename}`)
});

let converted = reviews.map(review => ({
  name: review.name,
  title: review.title,
  tags: review.tags,
  image: `../review-images/${review.img}`,
  date: review.date,
  content: review.content,
}));

fs.writeFile(
  "src/infrastructure/data.json",
  JSON.stringify(converted),
  (error: Error) => {
    if (error) throw error;

    console.log("Reviews Generated!");
  }
);