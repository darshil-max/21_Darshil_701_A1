const command = process.argv[2];

switch (command) {
    case "start":
        console.log("Server is running...");
        break;

    case "test":
        console.log("Testing application...");
        break;

    case "hello":
        console.log("Hello User!");
        break;

    case "greet":
        console.log("Good Morning!");
        break;

    case "bye":
        console.log("Goodbye!");
        break;

    default:
        console.log("Invalid command.");
}