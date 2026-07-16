// Import the fs module
const fs = require("fs");

// 1. Create a file
fs.writeFileSync("sample.txt", "Hello, Node.js!");

// 2. Read the file
const data = fs.readFileSync("sample.txt", "utf8");
console.log("File Content:", data);

// 3. Append data to the file
fs.appendFileSync("sample.txt", "\nWelcome to FS Module!");

// 4. Read updated file
const updatedData = fs.readFileSync("sample.txt", "utf8");
console.log("Updated Content:\n" + updatedData);

// 5. Check if file exists
if (fs.existsSync("sample.txt")) {
    console.log("File exists.");
}

// 6. Delete the file
fs.unlinkSync("sample.txt");
console.log("File deleted.");