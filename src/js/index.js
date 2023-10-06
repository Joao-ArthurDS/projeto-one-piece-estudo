const botoes = document.querySelectorAll(".botao")
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao,indice) => {
    botao.addEventListener("click", () => {
        
        desselecionabotao()
        desselcionapersonagem()
        
        botao.classList.add("selecionado")      
        personagens[indice].classList.add("selecionado")
    })
})

function desselcionapersonagem() {
    const persel = document.querySelector(".personagem.selecionado")
    persel.classList.remove("selecionado")
}

function desselecionabotao() {
    const botaosel = document.querySelector(".botao.selecionado")
    botaosel.classList.remove("selecionado")
}
