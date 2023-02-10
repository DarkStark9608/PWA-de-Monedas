const container = document.querySelector(".container")
const monedas = [{
        name: "Belisario Dominguez",
        image: "images/Belisario.png"
    },
    {
        name: "5 de febrero de 1917",
        image: "images/Const1917.png"
    },
    {
        name: "Ejército Mexicano",
        image: "images/Ejercito.png"
    },
    {
        name: "Fuerza Aérea",
        image: "images/Fuerza_Aerea.png"
    },
    {
        name: "Jose Maria Morelos",
        image: "images/Morelos.png"
    },
    {
        name: "Plan DN-III-E",
        image: "images/PlanDNIIIE.png"
    },
    {
        name: "Plan Marina",
        image: "images/PlanMarina.png"
    },
    {
        name: "Heroica de Veracruz",
        image: "images/Veracruz.png"
    },
    {
        name: "Toma de Zacatecas",
        image: "images/Zacatecas.png"
    },
]

const showMonedas = () => {
    let output = ""
    monedas.forEach(
        ({
            name,
            image
        }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Comprar</a>
                </div>
                `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showMonedas)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}