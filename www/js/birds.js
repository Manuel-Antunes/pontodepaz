const birds = document.getElementById('birds').children
for (let i = 0; i < birds.length; i++) {
    const bird = birds[i];
    bird.style.padding = (Math.random() * 10)
}