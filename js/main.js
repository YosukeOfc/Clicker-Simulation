const ClickerViewer = document.getElementById("ClickerViewer")
const UpgradesDiv = document.getElementById("Upgrades")
const TooltipDiv = document.getElementById("Upgrade-ToolTip")
const TooltipTitle = document.getElementById("ToolTip-Title")
const TooltipDescription = document.getElementById("ToolTip-Description")
const TooltipCost = document.getElementById("ToolTip-Cost")
let ClickerTotal = 0
let GanhoPorClick = 1

let UpsMostrados = 0
let MaxUpsVisiveis = 5 

// Função que atualiza o localStorage e o display dos clicks
function AtualizarLocalStorage() {
    ClickerViewer.innerText = `Clicks: ${ClickerTotal}`
    localStorage.setItem("ClickerSave", ClickerTotal)
    localStorage.setItem("UpgradesOwned", JSON.stringify(UpgradesList.filter(Ups => Ups.Owned == true).map(Ups => Ups.id))) 
}


// Ganha clicks ao clicar no botão
function EarnClicker() {
    ClickerTotal += GanhoPorClick
    ClickerViewer.innerText = `Clicks: ${ClickerTotal}`
    AtualizarLocalStorage()
}


// Função para detectar se as teclas "K" e "Space" foram pressionadas, e dar um evento a elas
document.addEventListener("keyup", (e)=>{
    if(e.key === "K" || e.key === "k"){
        ResetarTudo();
    }

    if(e.code === "Space") {
        EarnClicker();
    }
})

setInterval(() => {
    if(ClickerTotal < 0) {
        alert("Tinha que ser o Dias")
        ResetarTudo();
    }
}, 5000)



// Função para mudar modo claro e escuro
function mudarModo() {
    //console.log("1")

    let body = document.querySelector("body")
    let modo = document.body.className

    //console.log("2")

    if(modo == "modoEscuro") {
        body.classList.replace("modoEscuro", "modoClaro")
    } else{
        body.classList.replace("modoClaro", "modoEscuro")
    }

    //console.log("3")
}