async function loadPets() {
    const pets = await api("/pets");
    const list = document.getElementById("pet-list");

    list.innerHTML = pets.map(p => `
        <div class="pet-card">
            <h3>${p.name}</h3>
            <p>Tipo: ${p.type}</p>
            <p>Idade: ${p.age}</p>
            <a href="detalhes.html?id=${p.id}">Ver detalhes</a>
        </div>
    `).join("");
}

async function loadPetDetails() {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    const pet = await api(`/pets/${id}`);

    petName.innerText = pet.name;
    petType.innerText = pet.type;
    petAge.innerText = pet.age;
}
