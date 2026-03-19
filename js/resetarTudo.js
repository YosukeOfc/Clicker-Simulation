// Função que reseta o jogo, apagando o progresso
function ResetarTudo() {
    localStorage.setItem("ClickerSave", 0)
    localStorage.setItem("UpgradesOwned", JSON.stringify([]))
    localStorage.removeItem("IsaacSoundPlayed")

    window.location.reload()
}