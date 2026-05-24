const nahuales = [
    {
        nome: "Balam",
        descrizione: "Il giaguaro rappresenta forza, leadership e protezione.",
        immagine: "images/balam.jpg"
    },
    {
        nome: "Kan",
        descrizione: "Il serpente simboleggia saggezza e trasformazione.",
        immagine: "images/kan.jpg"
    },
    {
        nome: "Ik",
        descrizione: "Il vento rappresenta comunicazione e libertà.",
        immagine: "images/ik.jpg"
    },
    {
        nome: "Akbal",
        descrizione: "La notte è legata all’intuizione e al mistero.",
        immagine: "images/akbal.jpg"
    }
];

function calcolaNahual() {

    const data = document.getElementById("birthdate").value;

    if (!data) {
        alert("Inserisci una data");
        return;
    }

    // Trasforma la data in numero
    const giorno = new Date(data).getDate();

    // Sceglie un nahual in base al giorno
    const indice = giorno % nahuales.length;

    const nahual = nahuales[indice];

    document.getElementById("nahualName").innerText = nahual.nome;

    document.getElementById("nahualDescription").innerText =
        nahual.descrizione;

    document.getElementById("nahualImage").src =
        nahual.immagine;

    document.getElementById("result").classList.remove("hidden");
}