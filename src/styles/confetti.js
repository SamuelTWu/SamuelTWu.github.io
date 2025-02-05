// First, let's ensure we have the canvas-confetti library
if (typeof confetti === 'undefined') {
    console.error('Canvas-confetti library not found. Please include the CDN before this script.');
}



// Wrap all our functionality in a namespace to avoid global scope pollution
const celebrationEffects = {

    // More elaborate confetti celebration
    elaborateConfetti: function() {
        var style = window.getComputedStyle(document.body)
        const color2 = style.getPropertyValue('--color-2')
        const color3 = style.getPropertyValue('--color-3')
        const color4 = style.getPropertyValue('--color-4')
        // Left side burst
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: [color2, color3, color4]
        });

        // Right side burst
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: [color2, color3, color4]
        });

        // Middle upward burst
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 100,
                origin: { y: 1 },
                colors: [color2, color3, color4]
            });
        }, 250);
    }
};

// Modify your existing sendInput function to include confetti
const originalSendInput = window.sendInput;
window.sendInput = async function() {
    try {
        await originalSendInput();
        celebrationEffects.elaborateConfetti();
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("outputBox").innerText = "An error occurred. Please try again.";
    }
};

// Add event listener for Enter key
document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("inputBox");
    inputBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            window.sendInput();
        }
    });
});

// Export the celebration effects to make them globally available
window.celebrationEffects = celebrationEffects;