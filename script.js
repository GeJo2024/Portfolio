// MENU TOGGLE
const menu = document.querySelector("#menu");
const navLinks = document.querySelector("#links");

menu.addEventListener("click", () => {
    menu.classList.toggle('bx-x');
    navLinks.classList.toggle('active');
});

// MUSIC TOGGLE
const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');

let isPlaying = false;

toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
        music.play().catch(err => console.log("Autoplay blocked:", err));
        toggleBtn.textContent = '⏸ Pause Music';
    } else {
        music.pause();
        toggleBtn.textContent = '🎵 Play Music';
    }
    isPlaying = !isPlaying;
});
