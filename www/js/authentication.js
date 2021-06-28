// var user = JSON.parse(localStorage.getItem('user'))
// if (!user) {
//     window.location.href = "/";
// }

function signOut() {
    console.log('aqui');
    window.location.href = "/";
}

async function signIn(email, password) {
    try {
        const response = await fetch({
            url: 'https://www.google.com',
            body: { email, password }
        })
        const { name } = await response.json();
        const user = { email, name };
        localStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
        window.location.href = "/loading.html";
    }
}
async function signUp(email, password, password_confirmation, name) {
    try {
        await fetch({
            url: 'https://www.google.com',
            body: {
                email,
                password,
                name,
                password_confirmation
            }
        })
        window.location.href = "/";
    } catch (error) {
        window.location.href = "/";
    }
}

function testSignUp(name, email) {
    const user = { email, name };
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
}

function testLogin(email, password) {
    var user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    if (!user) {
        window.location.href = "/";
    }
}