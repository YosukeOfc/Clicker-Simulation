// Função para ver os upgrades adiquiridos.
function ViewOwnedUpgrades() {
    const RenderOwned = document.getElementById("RenderOwned")

    RenderOwned.classList.toggle("RenderOwned")

    // Realiza a verificação para saber se tem um conteúdo existente. E caso tenha, é apagado.
    if (RenderOwned.children.length > 0) {
        RenderOwned.innerHTML = '';
        return;
    }

    // Pega e filtra os itens existentes do JSON.
    const saved = localStorage.getItem("UpgradesOwned");
    const ownedIds = saved ? JSON.parse(saved) : [];
    const ownedUpgrades = UpgradesList.filter(upgrade => ownedIds.includes(upgrade.id));

    // console.log(ownedUpgrades); // Exibe no console para fins de depuração.

    const ownedDiv = document.createElement("div");
    ownedDiv.classList.add("OwnedUpgradesDiv");

    // Gera o texto de cada upgrade adiquirido
    ownedUpgrades.forEach(upgrade => {
        const p = document.createElement("p");
        p.textContent = upgrade.NameUp;
        ownedDiv.appendChild(p);
    });

    // Renderiza os textos de cada upgrade
    RenderOwned.appendChild(ownedDiv);
}
