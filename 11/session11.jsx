// ===================================================================
// REACT-CODE für Session 11 – „Frameworks"
//
// Diese Datei wird in session11-start.html eingebunden über:
//   <script type="text/babel" src="session11.jsx"></script>
// Babel übersetzt das JSX hier im Browser zu normalem JavaScript.
//
// Hinweis: Weil Babel diese Datei per fetch lädt, muss die Seite über
// einen lokalen Server laufen (z. B. „Live Server"), nicht per
// Doppelklick als file://.
//
//   Aufgabe 1 (Use)    – Diesen Code analysieren, nichts schreiben.
//   Aufgabe 2 (Modify) – Die Komponente LikeButton erweitern.
//   Aufgabe 3 (Create) – Eine neue Komponente PricingCalculator bauen
//                        und in #pricing-root rendern.
// ===================================================================

const { useState } = React;

// -----------------------------------------------------------------
// KOMPONENTE: LikeButton
//
// Eine Komponente ist eine Funktion, die JSX (HTML-ähnliche Syntax)
// zurückgibt. React ruft diese Funktion bei jeder Zustandsänderung
// erneut auf und aktualisiert nur das, was sich geändert hat –
// ohne dass ihr selbst getElementById, createElement o.ä. braucht.
// -----------------------------------------------------------------
function LikeButton() {
  // ── ZUSTAND (State) ──────────────────────────────────────────
  // useState(0) legt einen Zustand mit Startwert 0 an.
  // - likes      = der aktuelle Wert
  // - setLikes() = die einzige erlaubte Art, ihn zu ändern.
  //   Ein Aufruf von setLikes löst ein erneutes Rendern aus.
  const [likes, setLikes] = useState(0);

  // ── DARSTELLUNG (deklarativ) ─────────────────────────────────
  // Wir beschreiben NUR, wie es aussieht – nicht, wie das DOM
  // Schritt für Schritt verändert wird.
  return (
    <div className="like-widget">
      <div className="like-count">{likes} 👍</div>
      <div className="btn-row">
        <button className="btn btn-like" onClick={() => setLikes(likes + 1)}>
          Like 👍
        </button>

        {/* AUFGABE 2 – hier kommt euer zweiter Button für Dislikes hin. */}

      </div>

      {/* AUFGABE 2 – hier könnt ihr Gesamtzahl & Warnhinweis anzeigen. */}

    </div>
  );
}

// -----------------------------------------------------------------
// AUFGABE 3: KOMPONENTE PricingCalculator
//
// Erstellt hier eine neue Funktion PricingCalculator() {...},
// die einen Slider (<input type="range">), den abgeleiteten Preis
// und eine Checkbox für jährliche Abrechnung enthält.
// Anschließend unten in #pricing-root rendern (siehe Hinweis dort).
// -----------------------------------------------------------------
function PricingCalculator() {
  return <div>Platzhalter für PricingCalculator</div>
}

// -----------------------------------------------------------------
// DIE BRÜCKE ZUM HTML
// createRoot verbindet eine Komponente mit einem echten <div> aus
// dem HTML. Erst hier wird aus der Funktion sichtbares UI.
// -----------------------------------------------------------------
const likeRoot = ReactDOM.createRoot(document.getElementById('like-root'));
likeRoot.render(<LikeButton />);

// AUFGABE 3: Sobald PricingCalculator existiert, hier einkommentieren:
// const pricingRoot = ReactDOM.createRoot(document.getElementById('pricing-root'));
// pricingRoot.render(<PricingCalculator />);
