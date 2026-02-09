const Json = [
    {
        NameUp: "Up1",
        Cost: 20,
        Owned: true,
    },
    {
        NameUp: "Up2",
        Cost: 20,
        Owned: false,
    },
    {
        NameUp: "Up3",
        Cost: 20,
        Owned: true,
    },
    {
        NameUp: "Up4",
        Cost: 20,
        Owned: false,
    },
    {
        NameUp: "Up5",
        Cost: 20,
        Owned: true,
    },
    {
        NameUp: "Up6",
        Cost: 20,
        Owned: false,
    },
    
]

// let UpgradesOwned = Json
//     .filter(Ups => Ups.Owned == true)
//     .map(Ups => Ups.NameUp)

localStorage.setItem("Test", JSON.stringify(Json.filter(Ups => Ups.Owned == true).map(Ups => Ups.NameUp)))
