let Contador = 0;
function ViewOwnedUpgrades() {
    const saved = localStorage.getItem("UpgradesOwned");
    const ownedIds = saved ? JSON.parse(saved) : [];
    const ownedUpgrades = UpgradesList.filter(upgrade => ownedIds.includes(upgrade.id));
    const RenderOwned = document.getElementById("RenderOwned")
    console.log(ownedUpgrades);

    if()

    const ownedDiv = document.createElement("div");
    ownedDiv.classList.add("OwnedUpgradesDiv");

    ownedUpgrades.forEach(upgrade => {
        const p = document.createElement("p");
        p.className = "Testando"
        p.innerHTML = upgrade.NameUp;
        ownedDiv.appendChild(p);    
        console.log("Adicionado")
    });

    RenderOwned.classList.toggle("RenderOwned")
    RenderOwned.appendChild(ownedDiv);
}
