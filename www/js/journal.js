const messages = [
    {
        content: 'Hoje eu comi',
        date: new Date(),
    },
]

function formatDate(date) {
    return `dia ${date.getDay()} do ${date.getMonth()} de ${date.getFullYear()}`
}

function updateMessages() {
    if (messages.length > 0) {
        setMessages(messages);
    } else {
        const doNotMessage = document.createElement('div');
        doNotMessage.classList.add('not-message');
        doNotMessage.innerHTML = "<h3>Nenhum item nessa lista</h3>";
        list.appendChild(doNotMessage);
    }
}

function setMessages(list) {
    const journal = document.getElementById('journal');
    journal.innerHTML = "";
    list.forEach((e) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>
            ${formatDate(e.date)}:
            </span>
            <p>
            ${e.content}
            </p>
        `;
        journal.appendChild(li)
    })
}

function addToJournal() {
    const paper = document.getElementById('paper');
    const message = { content: paper.value, date: new Date() }
    paper.value = "";
    messages.push(message);
    updateMessages();
}

updateMessages();