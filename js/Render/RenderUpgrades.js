const MAX_VISIBLE = 5;
let currentIndex = 0;

// Filtra só os não comprados
const availableUpgrades = UpgradesList.filter(el => !el.Owned);

function renderNextCard() {
    if (currentIndex >= availableUpgrades.length) return;

    const el = availableUpgrades[currentIndex];
    currentIndex++;

    const Card = document.createElement("div");
    Card.classList.add("CardUp");

    const pUp = document.createElement("p");
    pUp.innerText = el.NameUp;
    pUp.classList.add("btn-Upgrade");

    Card.appendChild(pUp);
    UpgradesDiv.appendChild(Card);

    // Hover
    Card.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "yellow";

        TooltipDiv.style.display = "block";
        TooltipTitle.innerText = el.NameUp;
        TooltipDescription.innerText = el.Desc;
        TooltipCost.innerText = `Custo: ${el.Cost} Clicks`;
    });

    Card.addEventListener("mousemove", (e) => {
        TooltipDiv.style.left = (e.pageX + 15) + "px";
        TooltipDiv.style.top = (e.pageY + 15) + "px";
    });

    Card.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "";
        TooltipDiv.style.display = "none";
    });

    // Click (compra)
    Card.addEventListener("click", () => {
        if (el.Buy()) {
            AtualizarLocalStorage();
            console.log(`Item comprado: ${el.NameUp}`);

            Card.remove();
            TooltipDiv.style.display = "none";

            // 👇 aqui entra o próximo automaticamente
            renderNextCard();

        } else {
            console.log(`Não foi possivel comprar: ${el.NameUp}`);
        }
    });
}

// 🔥 Render inicial (5 cards)
for (let i = 0; i < MAX_VISIBLE; i++) {
    renderNextCard();
}