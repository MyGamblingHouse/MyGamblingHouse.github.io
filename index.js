// This file can be used for future interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Lucky Streak Casino!');
    
    // Add some simple animations to the dice
    const diceElements = document.querySelectorAll('.dice');
    diceElements.forEach(dice => {
        setInterval(() => {
            dice.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, 3000);
    });

    // Add event listeners for the new buttons
    document.getElementById('start-playing').addEventListener('click', () => {
        window.location.href = 'play_page/play_page.html';
    });

    document.getElementById('recharge').addEventListener('click', () => {
        console.log('Recharge clicked');
        // Add your recharge logic here
    });

    document.getElementById('controls').addEventListener('click', () => {
        console.log('Controls clicked');
        // Add your controls logic here
    });

    document.getElementById('sign-in').addEventListener('click', () => {
        console.log('Sign In clicked');
        // Add your sign in logic here
    });
});
