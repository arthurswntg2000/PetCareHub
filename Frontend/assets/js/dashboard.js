async function loadDashboard() {
    const pets = await api("/pets");
    const appointments = await api("/appointments");

    petCount.innerText = pets.length;
    appointmentCount.innerText = appointments.length;
}
