async function login() {
    const email = email.value;
    const password = password.value;

    const res = await api("/auth/login", "POST", { email, password });

    if (res.token) {
        localStorage.setItem("token", res.token);
        window.location.href = "dashboard.html";
    } else alert(res.error || "Erro ao logar");
}

async function register() {
    const name = name.value;
    const email = email.value;
    const password = password.value;

    const res = await api("/auth/register", "POST", { name, email, password });

    if (res.id) window.location.href = "login.html";
    else alert("Erro: " + res.error);
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}
