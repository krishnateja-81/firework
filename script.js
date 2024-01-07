
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createDot() {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.top = `${getRandomNumber(0, window.innerHeight)}px`;
    dot.style.left = `${getRandomNumber(0, window.innerWidth)}px`;
    document.body.appendChild(dot);
}

for (let i = 0; i < 30; i++) {
    createDot();
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const circle = document.getElementById('circle');

const numberOfParticles = 60;

for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.setProperty('--random-x', `${getRandomNumber(-500, 500)}px`);
    particle.style.setProperty('--random-y', `${getRandomNumber(-200, 500)}px`);
    particle.style.backgroundColor = getRandomColor();
    circle.appendChild(particle);
}
