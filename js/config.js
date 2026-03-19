

function ConfigGame() {
    const savedUpgrades = localStorage.getItem("UpgradesOwned");

    if (localStorage.getItem("ClickerSave")) {
        ClickerViewer.innerText = `Clicks: ${localStorage.getItem("ClickerSave")}`
        ClickerTotal = parseInt(localStorage.getItem("ClickerSave"))
    } else {
        localStorage.setItem("ClickerSave", 0)
        ClickerViewer.innerText = `Clicks: ${parseInt(localStorage.getItem("ClickerSave"))}`
    }
    
    if (savedUpgrades) {
        const ownedNames = JSON.parse(savedUpgrades);

        UpgradesList.forEach(upgrade => {
            if (ownedNames.includes(upgrade.id)) {
                upgrade.Owned = true;
                // Aplica o benefício do upgrade novamente ao carregar
                GanhoPorClick += upgrade.EarnCookieClicker;

                upgrade.onBuy?.();
            }
        });
    }
}
ConfigGame()