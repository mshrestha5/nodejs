// const hello = "Hello World";
// console.log(hello);//Sync, block
const fs = require("fs");

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

//Non-Blocking, Asynchronous
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR!");

  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("your file has been written ");
      });
    });
  });
});
console.log("Will read file!");

/**This code snippet reads the content of three files using the fs.readFile() method in Node.js, concatenates them and writes them to a new file using fs.writeFile() method.

The code starts by reading the content of a file named start.txt located in the ./txt/ directory. If the file is read successfully, its content is used to construct the name of the second file to be read.
 If there is an error reading the file, the message "ERROR!" is printed to the console.

The content of the second file, which is named after the content of the first file, is then read. If this operation is successful, its content is logged to the console.

The content of the third file, named append.txt located in the ./txt/ directory, is then read. If this operation is successful, its content is also logged to the console.

Finally, the contents of the second and third files are concatenated and written to a new file named final.txt located in the ./txt/ directory. If this operation is successful, a message "your file has been written" is printed to the console.

Note that the fs.readFile() and fs.writeFile() methods are asynchronous, which means that the console.log("Will read file!") statement at the end of the code will be executed before the file reading and writing operations are completed. */
