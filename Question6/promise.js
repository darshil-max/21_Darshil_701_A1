const fs = require('fs');

// 1. Promisify the fs.unlink function manually
function unlinkPromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                return reject(err); // Rejects the promise if an error occurs
            }
            resolve(); // Resolves the promise upon successful deletion
        });
    });
}

// 2. Call the promisified function using async/await
async function deleteFile() {
    const targetFile = 'test.txt';
    
    try {
        console.log(`Attempting to delete ${targetFile}...`);
        await unlinkPromise(targetFile);
        console.log('File successfully deleted!');
    } catch (error) {
        console.error('Error deleting file:', error.message);
    }
}

deleteFile();
