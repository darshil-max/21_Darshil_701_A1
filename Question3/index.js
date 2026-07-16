// index.js - The Command Line Interface Application
const readline = require('readline');
const TechSupportBot = require('./chatbot');

// Initialize the chatbot module
const bot = new TechSupportBot();

// Set up the command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`${bot.botName}: Hello! Type 'help' to see what I can do. Type 'exit' to quit.\n`);

// Create a prompt loop
const askQuestion = () => {
  rl.question('You: ', (userInput) => {
    // Check for exit condition
    if (userInput.toLowerCase().trim() === 'exit') {
      console.log(`${bot.botName}: Goodbye!`);
      rl.close();
      return;
    }

    // Get response from the chatbot module
    const response = bot.respond(userInput);
    console.log(`${bot.botName}: ${response}\n`);

    // Continue the conversation loop
    askQuestion();
  });
};

// Start the application
askQuestion();
