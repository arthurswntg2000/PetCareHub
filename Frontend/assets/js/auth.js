import { apiPost } from "./api.js";

export function logout() {
  localStorage.removeItem("token");
  window.location = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {

  const formRegister = document.getElementById("formRegister");
  if (formRegister) {
    formRegister.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = formRegister.querySelector("#name").value;
      const email = formRegister.querySelector("#email").value;
      const password = formRegister.querySelector("#password").value;
      const res = await apiPost("/auth/register", { name, email, password });
      if (res.error) alert(res.error);
      else { alert("Conta criada com sucesso!"); window.location = "login.html"; }
    });
  }

  const loginForm = document.getElementById("formLogin");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = loginForm.querySelector("#email").value;
      const password = loginForm.querySelector("#senha").value;
      const res = await apiPost("/auth/login", { email, password });
      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        window.location = "dashboard.html";
      } else alert(res.error || "Erro ao logar");
    });
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) logoutBtn.addEventListener("click", logout);

});
