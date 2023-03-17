
//Elementos
const botoes = document.querySelectorAll('.btn-carrossel');
const imagens = document.querySelectorAll('.imagem')

//Funções
function ativarNovoImagem(indice) {
    imagens[indice].classList.add('ativa');
}

function desmarcaImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function marcarBotao(botao) {
    botao.classList.add('selecionado');
}

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

//Eventos
botoes.forEach((botao, indice)=>{
    botao.addEventListener('click',()=>{
        desmarcarBotaoSelecionado();

        marcarBotao(botao);

        desmarcaImagemAtiva();

        ativarNovoImagem(indice);
    })
})


