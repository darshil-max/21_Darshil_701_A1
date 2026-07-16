// Task 1
function task1() {
    return new Promise((resolve) => {
        console.log("Task 1: Fetching data...");
        resolve("Data");
    });
}

// Task 2
function task2(data) {
    return new Promise((resolve) => {
        console.log("Task 2: Processing " + data);
        resolve(data + " Processed");
    });
}

// Task 3
function task3(result) {
    return new Promise((resolve) => {
        console.log("Task 3: Saving " + result);
        resolve("Completed Successfully");
    });
}

// Chained Promises
task1()
    .then(task2)
    .then(task3)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });