const ClickerViewer = document.getElementById("ClickerViewer")
const UpgradesDiv = document.getElementById("Upgrades")
let ClickerTotal = 0
let GanhoPorClick = 1

function AtualizarLocalStorage() {
    ClickerViewer.innerText = `Clicks: ${ClickerTotal}`
    localStorage.setItem("ClickerSave", ClickerTotal)
    localStorage.setItem("UpgradesOwned", JSON.stringify(UpgradesList.filter(Ups => Ups.Owned == true).map(Ups => Ups.NameUp)))
}

if (localStorage.getItem("ClickerSave")) {
    ClickerViewer.innerText = `Clicks: ${localStorage.getItem("ClickerSave")}`
    ClickerTotal = parseInt(localStorage.getItem("ClickerSave"))
} else {
    localStorage.setItem("ClickerSave", 0)
    ClickerViewer.innerText = `Clicks: ${parseInt(localStorage.getItem("ClickerSave"))}`
}

setInterval(() => {
    localStorage.setItem("ClickerSave", ClickerTotal)
}, 1000);

function EarnClicker() { 
    ClickerTotal += GanhoPorClick

    ClickerViewer.innerText = `Clicks: ${ClickerTotal}`
}


// Render

UpgradesList.forEach(el =>{
    const Card = document.createElement("div")
    Card.classList.add("CardUp")

    const pUp = document.createElement("p")
    pUp.innerText = `${el.NameUp}`

    UpgradesDiv.appendChild(Card)
    Card.appendChild(pUp)

    Card.addEventListener("click", () => {
        if (el.Buy()) {
            AtualizarLocalStorage()
            console.log(`Item comprado: ${el.NameUp}`)
        } else {
            console.log(`Não foi possivel comprar o seguinte item: ${el.NameUp}`)
        }
    })
})