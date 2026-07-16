const fs = require("fs");
const zlib = require("zlib");

// Read the compressed file
const input = fs.createReadStream("../Question4/file.txt.gz");

// Create the output file
const output = fs.createWriteStream("sample.txt");

// Unzip (decompress)
input.pipe(zlib.createGunzip()).pipe(output);

output.on("finish", () => {
    console.log("File extracted successfully!");
});