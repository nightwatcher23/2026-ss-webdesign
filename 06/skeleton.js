// ============================================================
// EUER CODE HIER:
//
// 1. Referenzen auf die DOM-Elemente holen:
//    - const card     = document.getElementById('profileCard')
//    - const avatar   = document.getElementById('avatar')
//    - const nameEl   = document.getElementById('name')
//    - const locationEl = document.getElementById('location')

const card = document.getElementById('profileCard')
const avatar = document.getElementById('avatar')
const nameEl = document.getElementById('name')
const locationEl = document.getElementById('location')

async function loadUser() {
    card.classList.add('loading')
    avatar.src = ''
    await new Promise(r => setTimeout(r, 2000))

    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    const user = data.results[0]

    avatar.src = user.picture.large
    nameEl.textContent = user.name.first + ' ' + user.name.last
    locationEl.textContent = user.location.city + ', ' + user.name.country

    card.classList.remove('loading')
}

const btn = document.getElementById('reloadBtn')
btn.addEventListener('click', loadUser)

loadUser()
//
// 2. Async-Funktion loadUser() schreiben:
//
//    a) Skeleton-Klasse aktivieren und Bild zurücksetzen:
//       card.classList.add('loading')
//       avatar.src = ''
//
//    b) Künstliche Verzögerung (damit der Skeleton sichtbar bleibt):
//       await new Promise(r => setTimeout(r, 2000))
//
//    c) Daten per Fetch abrufen:
//       const response = await fetch('https://randomuser.me/api/')
//       const data = await response.json()
//       const user = data.results[0]
//
//    d) DOM mit echten Daten befüllen:
//       avatar.src = user.picture.large
//       nameEl.textContent = user.name.first + ' ' + user.name.last
//       locationEl.textContent = user.location.city + ', ' + user.location.country
//
//    e) Skeleton-Klasse entfernen:
//       card.classList.remove('loading')
//
// 3. Event-Listener auf den "Neu laden"-Button:
//    document.getElementById('reloadBtn').addEventListener('click', loadUser)
//
// 4. Funktion direkt beim Laden der Seite aufrufen:
//    loadUser()
//
// ============================================================
