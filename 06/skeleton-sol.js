const card       = document.getElementById('profileCard');
const avatar     = document.getElementById('avatar');
const nameEl     = document.getElementById('name');
const locationEl = document.getElementById('location');

async function loadUser() {
    card.classList.add('loading');
    avatar.src = '';

    // Künstliche Verzögerung, damit der Skeleton-Effekt sichtbar bleibt
    await new Promise(r => setTimeout(r, 2000));

    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    avatar.src = user.picture.large;
    nameEl.textContent = `${user.name.first} ${user.name.last}`;
    locationEl.textContent = `${user.location.city}, ${user.location.country}`;

    card.classList.remove('loading');
}

document.getElementById('reloadBtn').addEventListener('click', loadUser);

loadUser();
