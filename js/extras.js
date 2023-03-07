const body = document.querySelector('body');
const menuToggle = document.querySelector('.menu-short-icon');
const menuToggleItems = document.querySelector('.menu-short-options');
const intro = document.querySelector(".intro");
const content = document.getElementById("books-extra");
const backButton = document.querySelector('.back-button');
const moreInfoContent = document.getElementById("more-info");
const libraryExtra = [
    {
        titulo: 'Finding Cinderella',
        autor: 'Colleen Hover',
        genero: 'Romance',
        paginas: 172,
        paginasLidas: 172,
        status: 'Terminado',
        indice: 1,
        imagem: "../images/extras/findingCinderella.jpg",
        alt: "Capa do livro Finding Cinderella",
        ano: 2013,
        modelo: "E-book",
        inicio: '2022-09-26',
        termino: '2022-10-12',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"- If you want to call yourself my girlfriend half as much as I wish you would, then it would save me a whole lot of begging. Because I was literally about to drop to my knees and beg you.<br>- No begging. It screams desperation.<br>- You make me desperate."',
            citacao2: '"It feels sort of euphoric, like we’re in some sort of fairytale. Like she’s Tinkerbell and I’m Peter Pan. No, wait. I don’t want to be Peter Pan. Maybe she can be like Cinderella and I’ll be her Prince Charming”',
            citacao3: '-'
        },
    },
    {
        titulo: 'O cão dos Baskerville',
        autor: 'Arthur Conan Doyle',
        genero: 'Clássico',
        paginas: 224,
        paginasLidas: 224,
        status: 'Terminado',
        indice: 2,
        imagem: "../images/extras/baskerville.jpg",
        alt: "Capa do livro O cão dos Baskerville",
        ano: 1902,
        modelo: "E-book",
        inicio: '2022-11-22',
        termino: '2022-12-02',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Um estudo em vermelho',
        autor: 'Arhtur Conan Doyle',
        genero: 'Romance policial',
        paginas: 169,
        paginasLidas: 169,
        status: 'Terminado',
        indice: 3,
        imagem: "../images/vemAi/estudoEmVermelho.jpg",
        alt: "Capa do livro Um estudo de vermelho",
        ano: 1887,
        modelo: 'E-book',
        inicio: '2022-12-04',
        termino: '2022-12-12',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"Quando um fato parece se opor a uma longa série de deduções, é prova invariável de que pode sustentar alguma outra interpretação."',
            citacao2: '"O que fazemos nesse mundo é irrelevante. A questão é o que fazemos as pessoas acreditar que fizemos."',
            citacao3: '-'
        },
    },
    {
        titulo: 'Sonho de uma noite de verão',
        autor: 'William Shakespeare',
        genero: 'Clássico',
        paginas: 90,
        paginasLidas: 35,
        status: 'Em andamento',
        indice: 4,
        imagem: "../images/vemAi/sonhoNoiteVerao.jpg",
        alt: "Capa do livro Sonho de uma noite de verão",
        ano: 1605,
        modelo: 'E-book',
        inicio: '2022-12-13',
        termino: '...',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
]

// ---------- Show/hide das opções do menu de atalho ao click ---------- //
menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    menuToggleItems.classList.toggle('menu-short-show');
})

body.addEventListener('click', function() {
    menuToggleItems.classList.add('menu-short-show');
})

// ---------- Adicionar ao HTML os objetos da constante libraryExtra ---------- //
function loadLibraryExtra () {

    for (let i in libraryExtra) {
        content.innerHTML += 
        `<div class="library">

            <img class="book-cover" src="${libraryExtra[i].imagem}" alt="${libraryExtra[i].alt}"> 
        
            <div class="book-info">
            
                <ul class="book-info-list">
                    <li class="book-title-author"><span class="info-title">Título:</span> ${libraryExtra[i].titulo}</li>
                    <li class="book-title-author"><span class="info-title">Autor:</span> ${libraryExtra[i].autor}</li>
                </ul>

            </div>

        <button class="button-more-info ${i}">Saiba mais!</button>

        </div>`
    }

}

loadLibraryExtra ();

// ---------- Adicionar um índice de controle em cada botão de "Saiba mais!" ---------- //
const buttonMoreInfo = Array.from(document.querySelectorAll('.button-more-info'));

buttonMoreInfo.forEach (e => e.onclick = loadMoreInfoExtra);

// ---------- Substituir as informações da library2022 pelas informações do "Saiba mais!" do livro selecionado ---------- //
function loadMoreInfoExtra () {

    content.style.display = 'none';
    intro.style.display = 'none';
    backButton.style.display = 'block';
    moreInfoContent.style.display = 'flex'

    // ----- Cada botão tem duas classes: o .more-info e o índice. Aqui estão sendo retiradas as letras e deixando só o número (índice) -----/
    let bookClass = this.className;
    let bookIndex = bookClass.replace(/\D/g, '');

    // ----- Cálculo do progresso de leitura ----- //
    let progress = ((libraryExtra[bookIndex].paginasLidas/libraryExtra[bookIndex].paginas) * 100).toFixed(0);

    // ----- Cálculo do tempo total de leitura ----- //
    let time = 0;

    if (libraryExtra[bookIndex].paginasLidas < libraryExtra[bookIndex].paginas) {
        time = '-'
    } else {
        time = `${((new Date(libraryExtra[bookIndex].termino) - new Date(libraryExtra[bookIndex].inicio)) / (1000 * 60 * 60 * 24) + 1)} dias`;
    }


    // ----- Adicionar informações ao HTML ----- //
    moreInfoContent.innerHTML =
    `<img class="more-info-cover" src="${libraryExtra[bookIndex].imagem}" alt="${libraryExtra[bookIndex].alt}"> 

    <div class="more-info-book">
        
        <ul class="more-info-list">
            <li class="more-info-item"><span class="info-title">Título:</span> ${libraryExtra[bookIndex].titulo}</li>
            <li class="more-info-item"><span class="info-title">Autor:</span> ${libraryExtra[bookIndex].autor}</li>
            <li class="more-info-item"><span class="info-title">Gênero:</span> ${libraryExtra[bookIndex].genero}</li>
            <li class="more-info-item"><span class="info-title">Páginas:</span> ${libraryExtra[bookIndex].paginas}</li>
            <li class="more-info-item"><span class="info-title">Ano de Publicação:</span> ${libraryExtra[bookIndex].ano}</li>
            <li class="more-info-item"><span class="info-title">Modelo:</span> ${libraryExtra[bookIndex].modelo}</li>
            <li class="more-info-item"><span class="info-title">Início da leitura:</span> ${libraryExtra[bookIndex].inicio.split('-').reverse().join('/')}</li>
            <li class="more-info-item"><span class="info-title">Término da leitura:</span> ${libraryExtra[bookIndex].termino.split('-').reverse().join('/')}</li>
        </ul>

    </div>

    <div class="extras-info"> 

        <div class="progress">
            <p class="extra-info-item"><span class="info-title">Progresso:</span></p>

            <div class="progress-bar-background">

                <div class="progress-bar-status"><p class="progress-bar-percentage">${progress}%</p></div>

            </div>

        </div> 

        <p class="extra-info-item"><span class="info-title">Tempo de leitura:</span> ${time}</p>
        <p class="extra-info-item"><span class="info-title">Citações preferidas:</span></p> 
        <blockquote class="cite1">${libraryExtra[bookIndex].citacoes.citacao1}</blockquote>
        
        <details class="extra-citation"> 
            <summary class="see-more-citation">Veja mais...</summary>
            <blockquote class="cite2">${libraryExtra[bookIndex].citacoes.citacao2}</blockquote>
            <blockquote class="cite3">${libraryExtra[bookIndex].citacoes.citacao3}</blockquote>
        </details>

    </div>`


    // ----- Condicional da quantidade de citações (máx. 3) ----- //
    const extraCitation = document.querySelector('.extra-citation');
    const cite2 = document.querySelector('.cite2')
    const cite3 = document.querySelector('.cite3')

    if (libraryExtra[bookIndex].citacoes.citacao1 == '-') {
        extraCitation.style.display = 'none';
    }

    if (libraryExtra[bookIndex].citacoes.citacao2 == '-') {
        cite2.style.display = 'none';
    }

    if (libraryExtra[bookIndex].citacoes.citacao3 == '-') {
        cite3.style.display = 'none';
    }

    // ----- Style da barra de progresso ----- //
    let sizeProgressBar = progress * 2;
    const progressBar = document.querySelector('.progress-bar-status');
    progressBar.style.width = `${sizeProgressBar}px`;

    backButton.onclick = reloadLibraryExtra;
}

// ---------- Readicionar as informações de libraryExtra no HTML e substituir as informações do "Saiba mais!" ---------- //
function reloadLibraryExtra () {
    intro.style.display = 'block';
    content.style.display = 'flex';
    moreInfoContent.style.display = 'none';
    backButton.style.display = 'none';
}