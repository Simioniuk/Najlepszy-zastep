const images = [
  "images/harce.jpg",
  "images/portretowe.jpg",
  "images/lew.png",
  "https://cdn.glitch.global/7c050cab-9139-4bbf-912c-70e06a166d5f/nigga.jpg?v=1743278874203"
];

let current = 0;
let showingBg1 = true;

const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

function setBackground(element, image) {
  element.style.backgroundImage = `url(${image})`;
}

function fadeToNextImage() {
  const nextImage = images[current];
  if (showingBg1) {
    setBackground(bg2, nextImage);
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    setBackground(bg1, nextImage);
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }
  showingBg1 = !showingBg1;
  current = (current + 1) % images.length;
}

// Start
setBackground(bg1, images[0]);
bg1.style.opacity = 1;
current = 1;

setInterval(fadeToNextImage, 5000);


// Skrypt do zwijania i rozwijania sekcji zbiórek
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.zbiorki-button');
    const content = document.querySelector('.zbiorki-content');

    toggleButton.addEventListener('click', () => {
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block"; // Rozwiń
            content.style.maxHeight = content.scrollHeight + "px"; // Ustaw maksymalną wysokość
        } else {
            content.style.maxHeight = null; // Zwiń
            setTimeout(() => {
                content.style.display = "none"; // Ukryj po animacji
            }, 1); // Czas animacji
        }
    });

    // Automatyczna zmiana zdjęć w galerii
const images = document.querySelectorAll('.galeria-img');
let currentIndex = 0;

  function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(changeImage, 5000); // Zmiana co 5 sekund
});

function DoStronyGlownej() {
  window.location.replace("https://najlepszy-zastep.netlify.app");
};


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.akcje-button');
    const content = document.querySelector('.akcje-content');

    toggleButton.addEventListener('click', () => {
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block"; // Rozwiń
            content.style.maxHeight = content.scrollHeight + "px"; // Ustaw maksymalną wysokość
        } else {
            content.style.maxHeight = null; // Zwiń
            setTimeout(() => {
                content.style.display = "none"; // Ukryj po animacji
            }, 1); // Czas animacji
        }
    });
});

function Simioniuk() {
   window.location.replace("https://najlepszy-zastep-na-pomorzu.glitch.me/Simioniuk.html");
}

function toggleDetails(button) {
      const details = button.closest('.blockHAR').querySelector('.detailsHAR');
      details.style.display = (details.style.display === 'flex') ? 'none' : 'flex';
    }
