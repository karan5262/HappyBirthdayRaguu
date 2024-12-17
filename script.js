// Flower pop animation
document.addEventListener("DOMContentLoaded", function () {
    // Create and append flower pop element
    const flower = document.createElement("div");
    flower.classList.add("flower-pop");
    flower.innerHTML = "🌸🎉";
    document.body.appendChild(flower);

    // Remove flower after animation completes
    setTimeout(() => {
        flower.remove();
    }, 2000); // Flower stays for 2 seconds
});

// Trigger cake candle light and confetti
function celebrate() {
    // Fire confetti
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.8 } // Start from bottom
    });

    // Light up candles - Add a glowing effect
    const candles = document.querySelectorAll('.candle');
    candles.forEach(candle => {
        candle.classList.add('lit'); // Add glowing class
    });
}
// Confetti creation function
function createConfetti() {
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti");
    document.body.appendChild(confettiContainer);

    // Remove confetti after it has finished falling
    setTimeout(() => {
        confettiContainer.remove();
    }, 2000); // Confetti stays for 2 seconds
}


function createSparkles(event) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;

    document.body.appendChild(sparkle);

    // Remove sparkle after animation ends
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Attach the sparkle effect to all images
document.querySelectorAll('.interactive-img').forEach(image => {
    image.addEventListener('click', createSparkles);
});


// window.onload = function() {
//     var audio = document.getElementById('birthday-audio');
//     audio.play();
// }
window.onload = function() {
    confetti({
        particleCount: 2000,
        spread: 1000,
        origin: { y: 0.8 } // Start from bottom
    });

    // Light up candles - Add a glowing effect
    const candles = document.querySelectorAll('.candle');
    candles.forEach(candle => {
        candle.classList.add('lit'); // Add glowing class
    });
}

// Get the audio element
const music = document.getElementById('background-music');

// Get the toggle button
const toggleButton = document.getElementById('toggle-audio-btn');

// Variable to track music state
let isPlaying = true;

// Function to toggle the audio
function toggleAudio() {
    if (isPlaying) {
        music.pause(); // Pause the music
        toggleButton.textContent = '🔈'; // Update button text
    } else {
        music.play(); // Play the music
        toggleButton.textContent = '🔈'; // Update button text
    }
    isPlaying = !isPlaying; // Toggle the state
}

// Add click event listener to the button
toggleButton.addEventListener('click', toggleAudio);
