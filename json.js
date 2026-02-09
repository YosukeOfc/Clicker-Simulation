class Upgrades {
    constructor(NameUp, Cost, Desc, EarnCookieClicker) {
        this.NameUp = NameUp;
        this.Cost = Cost;
        this.Desc = Desc;
        this.EarnCookieClicker = EarnCookieClicker;
        this.Owned = false
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
]

