const ClickerViewer = document.getElementById("ClickerViewer")
const UpgradesDiv = document.getElementById("Upgrades")
let ClickerTotal = 0
let GanhoPorClick = 1

function AtualizarLocalStorage() {
    ClickerViewer.innerText = `Clicks: ${ClickerTotal}`
    localStorage.setItem("ClickerSave", ClickerTotal)
    localStorage.setItem("UpgradesOwned", JSON.stringify(UpgradesList.filter(Ups => Ups.Owned == true).map(Ups => Ups.NameUp)))
}

function ResetarTudo() {
    localStorage.setItem("ClickerSave", 0)
    localStorage.setItem("UpgradesOwned", [])
    window.location.reload()
}


function ConfigGame() {
    const savedUpgrades = localStorage.getItem("UpgradesOwned");

    if (savedUpgrades) {
        const ownedNames = JSON.parse(savedUpgrades);

        UpgradesList.forEach(upgrade => {
            if (ownedNames.includes(upgrade.NameUp)) {
                const Indice = upgrade.id
                upgrade.Owned = true;
                // Aplica o benefício do upgrade novamente ao carregar
                GanhoPorClick += upgrade.EarnCookieClicker;
            }


        });
    }
}

ConfigGame()


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

UpgradesList.forEach(el => {

    if (el.Owned) return;

    const Card = document.createElement("div")
    Card.classList.add("CardUp")

    Card.addEventListener("mouseover", (e)=>{
        e.target.style.backgroundColor = "yellow";
        console.log(e.target.style.backgroundColor)
        console.log(e)
    })
    
    Card.addEventListener("mouseout", (e)=>{
        e.target.style.backgroundColor = "";
        console.log(e.target.style.backgroundColor)
        console.log(e)
    })

    const pUp = document.createElement("p")
    pUp.innerText = `${el.NameUp}`
    pUp.classList.add("btn-Upgrade")

    Card.appendChild(pUp)
    UpgradesDiv.appendChild(Card)
    


    Card.addEventListener("click", () => {
        if (el.Buy()) {
            AtualizarLocalStorage()
            console.log(`Item comprado: ${el.NameUp}`)
            Card.remove()
        } else {
            console.log(`Não foi possivel comprar o seguinte item: ${el.NameUp}`)
        }
    })
})
