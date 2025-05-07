document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll ('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector ('.hero');
    const alturaHero = heroSection.clientHeight;
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;
        if (posicaoAtual < alturaHero){
            ocultaElementosDoHeader ();
        }
        else {
            exibeElementosDoHeader ();
        }
    })
//seção de atração
    for( let i=0 ; i< buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector (`[data-tab-id=${abaAlvo}]`)
            escondeAsAbas();
            aba.classList.add('shows__list--active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--active');
        })
    }
    //seção faq
    for (let i = 0 ; i<questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
    for (let i = 0 ; i<botaoHeader.length; i++) {
        botaoHeader[i].addEventListener('scroll', adionar);
    }
})
function ocultaElementosDoHeader (){
    const header = document.querySelector('header');
    header.classList.add('header--hidden');
}
function exibeElementosDoHeader () {
    const header = document.querySelector('header');
    header.classList.remove('header--hidden');
}
function abreOuFechaResposta (elemento) {
    const classe='faq__questions__item--open';
    const elementoPai =  elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}
function removeBotaoAtivo (){
    const buttons = document.querySelectorAll ('[data-tab-button]');
    for( let i=0 ; i< buttons.length; i++) {
        buttons [i].classList.remove('shows__tabs__button--active');
    }
}
function escondeAsAbas() {
    const tabsContainer = document.querySelectorAll ('[data-tab-id]');

    for (let i = 0; i<  tabsContainer.length; i++) {
        tabsContainer[i].classList.remove ('shows__list--active');
    }
}

