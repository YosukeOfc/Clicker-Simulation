class Upgrades {
    static ProxId = 0

    constructor({ NameUp, Cost, Desc, EarnCookieClicker, onBuy = null }) {
        this.NameUp = NameUp;
        this.Cost = Cost;
        this.Desc = Desc;
        this.EarnCookieClicker = EarnCookieClicker;
        this.onBuy = onBuy;
        this.Owned = false
        this.id = Upgrades.ProxId
        Upgrades.ProxId++
    }

    Buy() {
        if (ClickerTotal >= this.Cost && !this.Owned) {
            ClickerTotal -= this.Cost;
            GanhoPorClick += this.EarnCookieClicker;
            this.Owned = true;

            this.onBuy?.();

            AtualizarLocalStorage()
            return true;
        }
        return false;
    }
}

const UpgradesList = [
    new Upgrades({
        NameUp: "Lápis",
        Cost: 1,
        Desc: "Um lápis bem apontado.",
        EarnCookieClicker: 1,
        // Sem onBuy aqui, ele ignora o if -- Exemplo
    }),

    new Upgrades({
        NameUp: "The Binding of Isaac",
        Cost: 1,
        Desc: "Lágrimas que valem ouro.",
        EarnCookieClicker: 10,

        // https://printfoursouls.com/
        onBuy: () => {
            const jaTocou = localStorage.getItem("IsaacSoundPlayed");

            if (!jaTocou) {
                const audio = new Audio('./src/audios/rebirth_item_pickup_1.mp3');
                
                const h1 = document.createElement('h1')
                h1.className = "IsaacFont TextHealthUp2"
                h1.innerHTML = "DAMAGE UP !" // Ou textContent

                const imga = document.createElement("img")
                imga.src = "./src/image/sacred-heart.png"
                imga.alt = "sacred heart"

                const body = document.body
                
                body.appendChild(h1)
                body.appendChild(imga)
                audio.play();

                setTimeout(()=>{
                    h1.remove()
                    imga.remove()
                }, 2000)
                localStorage.setItem("IsaacSoundPlayed", "true");
            }

        }
    }),

    new Upgrades({
        NameUp: "Botão Bonito",
        Cost: 1,
        Desc: "Atualiza o botão.",
        EarnCookieClicker: 5,
        onBuy: () => {
            const ClickHere = document.getElementById("ClickHere")
            const ResetBTN = document.getElementById("Reset")

            ClickHere.classList.add("ClickHere2")
            ResetBTN.classList.add("Reset2")
        }
    }),

    new Upgrades({
        NameUp: "Johnny Gay",
        Cost: 1,
        Desc: "Aumenta +99999 por clique.",
        EarnCookieClicker: 1000
    }),

    new Upgrades({
        NameUp: "Johnny Muito Gay",
        Cost: 1,
        Desc: "Aumenta +9999999 por clique.",
        EarnCookieClicker: 99999,
        onBuy: () => {
            alert("Johnny atingiu o nível máximo!");
        }
    })
];



