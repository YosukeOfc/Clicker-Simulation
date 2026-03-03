const ClickerViewer = document.getElementById("ClickerViewer")
const UpgradesDiv = document.getElementById("Upgrades")
const TooltipDiv = document.getElementById("Upgrade-ToolTip")
const TooltipTitle = document.getElementById("ToolTip-Title")
const TooltipDescription = document.getElementById("ToolTip-Description")
const TooltipCost = document.getElementById("ToolTip-Cost")

let ClickerTotal = 0
let GanhoPorClick = 1

// Função que atualiza o localStorage e o display dos clicks
function AtualizarLocalStorage() {
    ClickerViewer.innerText = `Clicks: ${ClickerTotal}`
    localStorage.setItem("ClickerSave", ClickerTotal)
    localStorage.setItem("UpgradesOwned", JSON.stringify(UpgradesList.filter(Ups => Ups.Owned == true).map(Ups => Ups.id))) // Mudei o save de nome para Id, para facilitar
}

// Função que reseta o jogo, apagando o progresso
function ResetarTudo() {
    localStorage.setItem("ClickerSave", 0)
    localStorage.setItem("UpgradesOwned", [])
    window.location.reload()
}

// Configura o jogo ao carregar, verificando os upgrades comprados e aplicando seus benefícios
function ConfigGame() {
    const savedUpgrades = localStorage.getItem("UpgradesOwned");

    if (savedUpgrades) {
        const ownedNames = JSON.parse(savedUpgrades);

        UpgradesList.forEach(upgrade => {
            if (ownedNames.includes(upgrade.id)) {
                upgrade.Owned = true;
                // Aplica o benefício do upgrade novamente ao carregar
                GanhoPorClick += upgrade.EarnCookieClicker;
            }
        });
    }
}
ConfigGame()

// Para mudar aspectos do game baseado nos upgrades comprados
function VerificarUpgrades() {
    const saved = localStorage.getItem("UpgradesOwned");
    const UpgradesOwned = saved ? JSON.parse(saved) : [];
    const ClickHere = document.getElementById("ClickHere")
    const ResetBTN = document.getElementById("Reset")

    if(UpgradesOwned.includes(2)) {
        ClickHere.classList.add("ClickHere2")
        ResetBTN.classList.add("Reset2")
    }
}
VerificarUpgrades()

// Verifica se existe um save, se sim, carrega o progresso, se não, cria um novo save
if (localStorage.getItem("ClickerSave")) {
    ClickerViewer.innerText = `Clicks: ${localStorage.getItem("ClickerSave")}`
    ClickerTotal = parseInt(localStorage.getItem("ClickerSave"))
} else {
    localStorage.setItem("ClickerSave", 0)
    ClickerViewer.innerText = `Clicks: ${parseInt(localStorage.getItem("ClickerSave"))}`
}

// Salva o progresso a cada segundo
setInterval(() => {
    localStorage.setItem("ClickerSave", ClickerTotal)
}, 1000);

// Ganha clicks ao clicar no botão
function EarnClicker() {
    ClickerTotal += GanhoPorClick
    ClickerViewer.innerText = `Clicks: ${ClickerTotal}`
}


// Renderização dos upgrades
UpgradesList.forEach(el => {
    if (el.Owned) return;

    const Card = document.createElement("div")
    Card.classList.add("CardUp")

    const pUp = document.createElement("p")
    pUp.innerText = `${el.NameUp}`
    pUp.classList.add("btn-Upgrade")

    Card.appendChild(pUp)
    UpgradesDiv.appendChild(Card)

    // Evento: Mouse entrou no Card
    Card.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "yellow";
        //console.log(e.target.style.backgroundColor)
        //console.log(e)

        TooltipDiv.style.display = "block";
        TooltipTitle.innerText = el.NameUp;
        TooltipDescription.innerText = el.Desc;
        TooltipCost.innerText = `Custo: ${el.Cost} Clicks`;
    });

    // Evento: Mouse se mexe (para o modal seguir o ponteiro)
    Card.addEventListener("mousemove", (e) => {
        TooltipDiv.style.left = (e.pageX + 15) + "px"; // 15px de distância do mouse
        TooltipDiv.style.top = (e.pageY + 15) + "px";
    });

    // Evento: Mouse saiu
    Card.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "";
        //console.log(e.target.style.backgroundColor)
        //console.log(e)
        TooltipDiv.style.display = "none";
    });

    // Ao clicar e comprar, Retira o item do display e o tooltip também
    Card.addEventListener("click", () => {
        if (el.Buy()) {
            AtualizarLocalStorage()
            VerificarUpgrades()
            console.log(`Item comprado: ${el.NameUp}`)
            Card.remove()
            TooltipDiv.style.display = "none";
        } else {
            console.log(`Não foi possivel comprar o seguinte item: ${el.NameUp}`)
        }
    })
})

/*Deixei essa função em comentário, porque não está funcionando ainda*/
// function ViewOwnedUpgrades() {
//     const saved = localStorage.getItem("UpgradesOwned");
//     const ownedIds = saved ? JSON.parse(saved) : [];
//     const ownedUpgrades = UpgradesList.filter(upgrade => ownedIds.includes(upgrade.id));
//     console.log(ownedUpgrades);

//     const ownedDiv = document.createElement("div");
//     ownedDiv.classList.add("OwnedUpgradesDiv");
//     ownedUpgrades.forEach(upgrade => {
//         const p = document.createElement("p");
//         p.innerText = upgrade.NameUp;
//         ownedDiv.appendChild(p);
//     });
//     document.body.appendChild(ownedDiv);
// }
