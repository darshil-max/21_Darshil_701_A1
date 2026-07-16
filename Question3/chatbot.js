// chatbot.js - The Domain-Specific Chatbot Module
class TechSupportBot {
  constructor() {
    this.botName = "TechBot";
    // Define domain-specific knowledge base (Rules/Keywords)
    this.knowledgeBase = {
      wifi: "To fix Wi-Fi issues, restart your router and wait 30 seconds.",
      password: "You can reset your password by clicking 'Forgot Password' on the login screen.",
      slow: "If your computer is slow, try closing background apps or restarting it.",
      hello: "Hello! I am TechBot. How can I help you with your IT issues today?",
      help: "I can help you with: wifi, password, or slow computer issues."
    };
  }

  // Process user input and return domain-specific response
  respond(userInput) {
    const message = userInput.toLowerCase();
    
    // Search for keywords in the user's message
    for (const key in this.knowledgeBase) {
      if (message.includes(key)) {
        return this.knowledgeBase[key];
      }
    }
    
    // Default fallback response
    return "I am sorry, I only understand tech support issues related to Wi-Fi, passwords, or system performance.";
  }
}

module.exports = TechSupportBot;
