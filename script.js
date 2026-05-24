const nahuales = [
"Imix",
"Ik'",
"Ak'bal",
"K'an",
"Chikchan",
"Kimi",
"Manik'",
"Lamat",
"Muluk",
"Ok",
"Chuwen",
"Eb'",
"B'en",
"Ix",
"Men",
"Kib'",
"Kab'an",
"Etz'nab",
"Kawak",
"Ajaw"
];

const descrizioni = {
"Imix": "Origine della vita, energia primordiale e creatività.",
"Ik'": "Vento, comunicazione e spiritualità.",
"Ak'bal": "Notte, sogni e intuizione.",
"K'an": "Seme, fertilità e abbondanza.",
"Chikchan": "Energia vitale e forza interiore.",
"Kimi": "Trasformazione e rinascita.",
"Manik'": "Guarigione ed equilibrio.",
"Lamat": "Bellezza, arte e amore.",
"Muluk": "Acqua, emozioni e purificazione.",
"Ok": "Fedeltà, amicizia e guida.",
"Chuwen": "Creatività, gioco e arte.",
"Eb'": "Destino e cammino della vita.",
"B'en": "Leadership e crescita.",
"Ix": "Magia, natura e spiritualità.",
"Men": "Visione e saggezza.",
"Kib'": "Perdono e coscienza.",
"Kab'an": "Terra, conoscenza e movimento.",
"Etz'nab": "Verità e riflessione.",
"Kawak": "Tempesta, cambiamento e energia.",
"Ajaw": "Sole, illuminazione e leadership."
};

function calcolaNahual() {

    const input = document.getElementById("birthdate").value;

    if (!input) {
        alert("Inserisci una data");
        return;
    }

    const data = new Date(input);

    // Data base del calendario Maya
    // 21 dicembre 2012 = 4 Ajaw
    const baseDate = new Date("2012-12-21");

    // Differenza giorni
    const diffTime = data - baseDate;

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Calcolo numero sacro (1-13)
    let numero = ((diffDays + 4) % 13 + 13) % 13;
    numero = numero === 0 ? 13 : numero;

    // Calcolo nahual (0-19)
    let indiceNahual = ((diffDays + 19) % 20 + 20) % 20;

    const nahual = nahuales[indiceNahual];

    document.getElementById("nahualName").innerText =
        numero + " " + nahual;

    document.getElementById("nahualDescription").innerText =
        descrizioni[nahual];

    document.getElementById("nahualImage").src =
        "images/" + nahual.replace(/[^a-zA-Z]/g, "").toLowerCase() + ".jpg";

    document.getElementById("result").classList.remove("hidden");
};