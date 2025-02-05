import { Client, handle_file } from "@gradio/client";
window.sendInput = async function () {
    try {
        // Connect to the Gradio app
        const app = await Client.connect("samwu1/paletteAI");

        // Get the input from the text box
        const input = document.getElementById("inputBox").value.trim();

        // Check if input is empty
        if (!input) {
            document.getElementById("outputBox").innerText = "Please enter a valid input.";
            return;
        }

        // Send the input to the app and get the response
        const transcription = await app.predict("/predict", [input]);

        // Log the result
        const color1 = transcription.data[0].split(":")[1]
        const color2 = transcription.data[0].split(":")[2]
        const color3 = transcription.data[0].split(":")[3]
        const color4 = transcription.data[0].split(":")[4]
        const color5 = transcription.data[0].split(":")[5]

        // Get the root element
        const root = document.documentElement;

        // Update the CSS variables
        root.style.setProperty("--color-1", color1);
        root.style.setProperty("--color-2", color2); 
        root.style.setProperty("--color-3", color3); 
        root.style.setProperty("--color-4", color4);	
        root.style.setProperty("--color-5", color5); 
        //ensure the colors persist
        localStorage.setItem('color-1', color1);
        localStorage.setItem('color-2', color2);
        localStorage.setItem('color-3', color3);
        localStorage.setItem('color-4', color4);
        localStorage.setItem('color-5', color5);

    } catch (error) {
        console.error("Error:", error);
        document.getElementById("outputBox").innerText = "An error occurred. Please try again.";
    }
};
// Add an event listener to the input box for the Enter key
document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("inputBox");
    inputBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            sendInput();
        }
    });
});