const musics = {
    acoustic: [
        "https://www.youtube.com/embed/QrWkVlHRWmw",
        "https://www.youtube.com/embed/8zeB4L1azWM",
        "https://www.youtube.com/embed/0aAJZenXHHE",
        "https://www.youtube.com/embed/PNpd_TMbb94",
    ],
    reagge: [
        // "https://www.youtube.com/embed/Cfj4fd53--s",
        "https://www.youtube.com/embed/qNHMw6oWXAw",
        "https://www.youtube.com/embed/nAen3fq20vs",
        "https://www.youtube.com/embed/GqD2MzBEW8s",
        "https://www.youtube.com/embed/mdrfLHc8fIo"
    ],
    rap: [
        "https://www.youtube.com/embed/dBHj3m96LpI",
        "https://www.youtube.com/embed/e_vCJfI4bIs",
        "https://www.youtube.com/embed/0SS7OH7LWb4",
    ],
}
const selector = document.getElementById('gender');
changeMusicList(selector);


function changeMusicList(option) {
    const list = document.getElementById('musics');
    list.innerHTML = "";
    if (musics[option.value].length > 0) {
        musics[option.value].forEach((e) => {
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
}