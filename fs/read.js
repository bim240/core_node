var fs = require("fs");

// Use fs module for all operatins below.

// 1. Write script to read file theory.md and console the output buffer.
fs.readFile("./theory.md", (err, data) => {
  if (err) return err;
  return console.log(data);
});

// 2. Write script to read file theory.md and convert resulted buffer using toString
// method and console the result.
fs.readFile("./theory.md", (err, data) => {
  if (err) return err;
  return console.log(data.toString());
});

// 3. Write script to read file Synchronously and console the output.
var data = fs.readFileSync("./theory.md");
console.log(data);

// 4. Write script to create a file 'write.js' and write content of read.js in there.
fs.open("/write.js", "wx", (err, fd) => {
  if (err) return err;
  fs.write(fd, data, err => {
    if (err) return err;
    fs.close(fd, () => console.log("data has been created"));
  });
});

// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close

fs.open("/write.js", "r+", (err, fd) => {
  fs.ftruncate(fd, err => {
    if (err) return err;
  });
  if (err) return err;
  fs.write(fd, data, err => {
    if (err) return err;
    fs.close(fd, () => console.log("data has been created"));
  });
});

// 6. Delete the content of write.js using fs.unlink or unlinkSync method
fs.unlink("/write.js", err => {
  if (err) return err;
});
