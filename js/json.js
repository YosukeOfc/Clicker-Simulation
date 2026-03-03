class Upgrades {
    static ProxId = 0

    constructor(NameUp, Cost, Desc, EarnCookieClicker) {    
        this.NameUp = NameUp;
        this.Cost = Cost;
        this.Desc = Desc;
        this.EarnCookieClicker = EarnCookieClicker;
        this.Owned = false
        this.id = Upgrades.ProxId
        Upgrades.ProxId++
    }

    Buy() {
        if (ClickerTotal >= this.Cost && !this.Owned) {
            ClickerTotal -= this.Cost;
            GanhoPorClick += this.EarnCookieClicker;
            this.Owned = true;

            AtualizarLocalStorage()
            return true;
        }
        return false;
    }
}

const UpgradesList = [
    new Upgrades("Lápis", 1, "Um lápis bem apontado. Aumenta +1 por clique.", 1),
    new Upgrades("The Binding of Isaac", 1, "Lágrimas que valem ouro. Aumenta +10 por clique.", 10),
    new Upgrades("Botão Bonito", 1, "Um botão bonito. Atualiza o botão.", 5),
    new Upgrades("Johnny Gay", 1, "Johnny é muito gay. Aumenta +99999 por clique.", 1000),
    new Upgrades("Johnny Muito Gay", 1, "Johnny é muito muito gay mesmo. Aumenta +9999999 por clique.", 99999),
]




