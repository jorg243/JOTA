// Crear estrellas aleatorias
const starsContainer = document.querySelector('.stars');
const numberOfStars = 100;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = Math.random() * 3 + 2 + 's';
    starsContainer.appendChild(star);
}

// Cambiar color del corazón al hacer clic
document.querySelector('.heart').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'red' ? 'pink' : 'red';
    this.style.transition = 'background-color 0.5s';
});
