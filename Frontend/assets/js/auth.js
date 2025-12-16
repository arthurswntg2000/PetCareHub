import { apiPost } from "./api.js";

/* ======================
          LOGOUT
   ====================== */
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

/* ======================
       LOGIN / REGISTRO
   ====================== */
document.addEventListener("DOMContentLoaded", () => {

  /* ===== LOGIN ===== */
  const loginForm = document.getElementById("formLogin");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Preencha todos os campos.");
        return;
      }

      try {
        const res = await apiPost("/auth/login", { email, password });

        // ✅ LOGIN OK
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));

        window.location.href = "dashboard.html";
      } catch (err) {
        alert(err.message || "Erro ao fazer login");
        console.error(err);
      }
    });
  }

  /* ===== REGISTRO (se existir na página) ===== */
  const formRegister = document.getElementById("formRegister");

  if (formRegister) {
    formRegister.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        await apiPost("/auth/register", { name, email, password });
        alert("Conta criada com sucesso!");
        window.location.href = "login.html";
      } catch (err) {
        alert(err.message);
      }
    });
  }

  /* ===== BOTÃO LOGOUT ===== */
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) logoutBtn.addEventListener("click", logout);
});
