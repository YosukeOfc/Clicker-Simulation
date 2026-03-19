function ViewOwnedUpgrades() {
    const saved = localStorage.getItem("UpgradesOwned");
    const ownedIds = saved ? JSON.parse(saved) : [];
    const ownedUpgrades = UpgradesList.filter(upgrade => ownedIds.includes(upgrade.id));
    console.log(ownedUpgrades);

    const ownedDiv = document.createElement("div");
    ownedDiv.classList.add("OwnedUpgradesDiv");

    ownedUpgrades.forEach(upgrade => {
        const p = document.createElement("p");
        p.className = "Testando"
        p.innerHTML = upgrade.NameUp;
        ownedDiv.appendChild(p);    
        console.log("Adicionado")
    });

    const RenderOwned = document.getElementById("RenderOwned")
    RenderOwned.classList.toggle("RenderOwned")
    RenderOwned.appendChild(ownedDiv);
}