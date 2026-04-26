let position = 0;
const asciiArt1 = `(\\/)   \n(..)   \nC(")(")`;
const asciiArt2 = `/)(\\   \n(--)   \nc(")(")`;

setInterval(() => {
    // 1. Konsole aufräumen
    console.clear();

    // 2. Zustand verändern
    position = position + 1;
    let leerzeichen = " ".repeat(position);

    // 3. Neues Bild zeichnen
    if (position % 2 === 0){
        console.log(asciiArt1);
    } else{
        console.log(`%c${asciiArt2}`, "color: red;");
    }

    // Zurücksetzen, wenn zu weit rechts
    if (position > 30) position = 0;

}, 500); // Alle 200ms ausführen