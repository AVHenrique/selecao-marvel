

const homemDeFerro = document.getElementById('homem-de-ferro')

homemDeFerro.addEventListener('mouseenter', ()=> {
    homemDeFerro.classList.add('selecionado');
})

const hulk = document.getElementById('hulk')

hulk.addEventListener('mouseenter', ()=> {
    hulk.classList.add('selecionado');
})

const personagens = document.querySelectorAll('.personagem')


personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        const idSelecionado = personagem.attributes.id.value

        const imagemJogador1 = document.getElementById('personagem-jogador1')
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById('nome-jogador1')

        const nomeSelecionado = personagem.getAttribute('data-name')

        nomeJogador1.innerHTML = nomeSelecionado;
    })
})

