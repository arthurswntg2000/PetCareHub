import { apiPost, apiPut } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("token")) {
    window.location = "login.html";
    return;
  }

  const form = document.getElementById("addPetForm");
  const params = new URLSearchParams(location.search);
  const petId = params.get("id");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const body = {
        name: form.name.value,
        species: form.species.value,
        breed: form.breed.value,
        age: parseInt(form.birthDate.value || 0),
      };
      if (petId) {
        await apiPut(`/pets/${petId}`, body);
        alert("Pet atualizado!");
      } else {
        await apiPost("/pets", body);
        alert("Pet criado!");
      }
      window.location = "pets.html";
    });
  }
});
