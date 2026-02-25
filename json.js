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
    new Upgrades("Lápis", 10, "IDK", 1),
    new Upgrades("The Binding of Isaac", 100, "IDK", 10),
    new Upgrades("Botão Bonito", 1, "IDK", 9999),
    new Upgrades("Johnny Gay", 10000, "IDK", 99999),
    new Upgrades("Johnny Muito Gay", 10000, "IDK", 9999999),
]




