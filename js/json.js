
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
        NameUp: "Sacred Heart",
        Cost: 1,
        Desc: `+1 de Dano,
               2X de multiplicador de Dano,
               Lágrimas Teleguiadas,
               -0,4 de Lágrimas;`,
        EarnCookieClicker: 1,

        // https://printfoursouls.com/
        onBuy: () => {
            GanhoPorClick = GanhoPorClick * 2

            const jaTocou = localStorage.getItem("IsaacSoundPlayed");

            if (!jaTocou) {
                const audio = new Audio('./src/audios/rebirth_item_pickup_1.mp3');
                
                const h1 = document.createElement('h1')
                h1.className = "IsaacFont TextHealthUp2"
                h1.innerHTML = "DAMAGE UP !" // Ou textContent
                
                const imga = document.createElement("img")
                imga.className = "imga"
                imga.src = "./src/image/sacred-heart.png"
                imga.alt = "sacred heart"
                imga.width = 75
                imga.height = 75
                
                const body = document.body
                
                audio.play();
                setTimeout(() => {
                    body.appendChild(h1)
                    body.appendChild(imga)
                }, 1200)

                setTimeout(() => {
                    h1.remove()
                    imga.remove()
                }, 1900)
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
            const ViewOwnedUps = document.getElementById("ViewOwnedUps")
            const ResetBTN = document.getElementById("Reset")

            ClickHere.classList.add("ClickHere2")
            ViewOwnedUps.classList.add("ViewOwnedUps2")
            ResetBTN.classList.add("Reset2")
        }
    }),

    new Upgrades({
        NameUp: "Johnny Gay",
        Cost: 1,
        Desc: "Aumenta +1000 por clique.",
        EarnCookieClicker: 1000
    }),

    new Upgrades({
        NameUp: "Ana",
        Cost: 1,
        Desc: "Aumenta +99999 por clique.",
        EarnCookieClicker: 99999,
        onBuy: () => {
            alert("Ana atingiu o nível máximo!");

            const body = document.body;
            body.style.backgroundImage = "url('./src/image/bandeira-Johnny2.png')"
        }
    })
];


