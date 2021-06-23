const asmr = [
    'https://www.youtube.com/embed/dQ4nMwDPjjA',
    'https://www.youtube.com/embed/LZh4ioW31J8',
    'https://www.youtube.com/embed/CSE-lUUD5fo',
    'https://www.youtube.com/embed/csFQTG5GT10',
    'https://www.youtube.com/embed/EQAx7Iuk7Fo',
];

const list = document.getElementById('asmr');
list.innerHTML = "";
if (asmr.length > 0) {
    asmr.forEach((e) => {
        const frame = document.createElement('iframe');
        frame.src = e;
        frame.width = 300;
        frame.title = "YouTube video player";
        frame.style.border = 'none';
        frame.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frame.allowFullscreen = true;
        const el = document.createElement('li');
        el.appendChild(frame);
        list.appendChild(el);
    })
} else {
    const doNotMessage = document.createElement('div');
    doNotMessage.classList.add('not-message');
    doNotMessage.innerHTML = "<h3>Nenhum item nessa lista</h3>";
    list.appendChild(doNotMessage);
}