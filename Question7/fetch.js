const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function fetchGoogle() {
    try {
        const response = await fetch("https://www.google.com");
        const data = await response.text();

        console.log("Google Page Data:");
        console.log(data.substring(0, 500)); // Display first 500 characters
    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchGoogle();