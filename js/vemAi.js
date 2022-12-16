const body = document.querySelector('body');
const menuToggle = document.querySelector('.menu-short-icon');
const menuToggleItems = document.querySelector('.menu-short-options');
const intro = document.querySelector(".intro");
const content = document.getElementById("books-vem-ai");
const backButton = document.querySelector('.back-button');
const moreInfoContent = document.getElementById("more-info");
const libraryVemAi = [
    {
        titulo: 'A tempestade',
        autor: 'William Shakespeare',
        genero: 'Clássico',
        paginas: 312,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 1,
        imagem: "../images/vemAi/tempestade.jpg",
        alt: "Capa do livro A tempestade",
        ano: 1611,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'O signo dos quatro',
        autor: 'Arthur Conan Doyle',
        genero: 'Romance policial',
        paginas: 184,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 2,
        imagem: "../images/vemAi/signoDosQuatro.jpg",
        alt: "Capa do livro O signo dos quatro",
        ano: 1890,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'O homem do castelo alto',
        autor: 'Philip K. Dick',
        genero: 'Distopia',
        paginas: 324,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 4,
        imagem: "../images/vemAi/homemCasteloAlto.jpg",
        alt: "Capa do livro O homem do castelo alto",
        ano: 1962,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
        
    },
    {
        titulo: 'A vítima perfeita',
        autor: 'Charlie Zailer & Simon Waterhouse',
        genero: 'Romance policial',
        paginas: 422,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 5,
        imagem: "../images/vemAi/vitimaPerfeita.jpg",
        alt: "Capa do livro A vítima perfeita",
        ano: 2015,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Os meninos que enganavam nazistas',
        autor: 'Joseph Joffo & Fernando Scheibe',
        genero: 'Biografia',
        paginas: 320,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 6,
        imagem: "../images/vemAi/meninosEnganavamNazistas.jpg",
        alt: "Capa do livro Os meninos que enganavam nazistas",
        ano: 2017,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Racismo estrutural',
        autor: 'Silvio Almeida',
        genero: 'Ciências sociais',
        paginas: 232,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 7,
        imagem: "../images/vemAi/racismoEstrutural.jpg",
        alt: "Capa do livro Racismo estrutural",
        ano: 2018,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Memórias póstumas de Brás Cubas',
        autor: 'Machado de Assis',
        genero: 'Clássico',
        paginas: 388,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 8,
        imagem: "../images/vemAi/memoriasPostumas.jpg",
        alt: "Capa do livro Memórias póstumas de Brás Cubas",
        ano: 1881,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Quincas Borba',
        autor: 'Machado de Assis',
        genero: 'Clássico',
        paginas: 372,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 9,
        imagem: "../images/vemAi/quincasBorba.jpg",
        alt: "Capa do livro Quincas Borba",
        ano: 1891,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'A hipótese do amor',
        autor: 'Ali Hazelwood',
        genero: 'Romance',
        paginas: 453,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 10,
        imagem: "../images/vemAi/hipoteseAmor.jpg",
        alt: "Capa do livro A hipótese do amor",
        ano: 2022,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'O ovo da serpente',
        autor: 'Consuelo Dieguez',
        genero: 'Ciências sociais',
        paginas: 443,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 11,
        imagem: "../images/vemAi/ovoSerpente.jpg",
        alt: "Capa do livro O ovo da serpente",
        ano: 2022,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Desafiame',
        autor: 'Tahereh Mafi',
        genero: 'Ficção',
        paginas: 303,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 12,
        imagem: "../images/vemAi/desafiame.jpg",
        alt: "Capa do livro Desafiame",
        ano: 2019,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Imaginame',
        autor: 'Tahereh Mafi',
        genero: 'Ficção',
        paginas: 333,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 13,
        imagem: "../images/vemAi/imaginame.jpg",
        alt: "Capa do livro Imaginame",
        ano: 2020,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'A cantiga dos pássaros e serpentes',
        autor: 'Suzanne Collins',
        genero: 'Ficção',
        paginas: 572,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 14,
        imagem: "../images/vemAi/cantigaPassarosSerpentes.jpg",
        alt: "Capa do livro A cantiga dos pássaros e serpentes",
        ano: 2020,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Trono de vidro',
        autor: 'Sarah J. Maas',
        genero: 'Ficção',
        paginas: 495,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 15,
        imagem: "../images/vemAi/tronoVidro.jpg",
        alt: "Capa do livro Trono de vidro",
        ano: 2014,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Fangirl',
        autor: 'Rainbow Rowell',
        genero: 'Romance',
        paginas: 533,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 16,
        imagem: "../images/vemAi/fangirl.jpg",
        alt: "Capa do livro Fangirl",
        ano: 2013,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'O conto da Aia',
        autor: 'Margaret Atwood',
        genero: 'Distopia',
        paginas: 402,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 17,
        imagem: "../images/vemAi/contoAia.jpg",
        alt: "Capa do livro O conto da Aia",
        ano: 1985,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'A troca',
        autor: 'Beth O\'Leary',
        genero: 'Romance',
        paginas: 352,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 19,
        imagem: "../images/vemAi/troca.jpg",
        alt: "Capa do livro A troca",
        ano: 2020,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'When it\'s real',
        autor: 'Erin Watt',
        genero: 'Romance',
        paginas: 391,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 20,
        imagem: "../images/vemAi/whenItsReal.jpg",
        alt: "Capa do livro When it\'s real",
        ano: 2017,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Quando a noite cai',
        autor: 'Carina Rissi',
        genero: 'Ficção/Romance',
        paginas: 623,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 21,
        imagem: "../images/vemAi/quandoNoiteCai.jpg",
        alt: "Capa do livro Quando a noite cai",
        ano: 2017,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Mulherzinhas',
        autor: 'Louisa May Alcott',
        genero: 'Romance',
        paginas: 676,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 22,
        imagem: "../images/vemAi/mulherzinhas.jpg",
        alt: "Capa do livro Mulherzinhas",
        ano: 1868,
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'O mito da caverna',
        autor: 'Platão',
        genero: 'Filosofia',
        paginas: 82,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 23,
        imagem: "../images/vemAi/mitoCaverna.jpg",
        alt: "Capa do livro O mito da caverna",
        ano: '-',
        modelo: '-',
        inicio: '-',
        termino: '-',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'As aventuras de Robin Hood',
        autor: 'Howard Pyle',
        genero: 'Clássico',
        paginas: 300,
        paginasLidas: 0,
        status: 'Na fila',
        indice: 24,
        imagem: "../images/vemAi/robinHood.jpg",
        alt: "Capa do livro As aventuras de Robin Hood",
        ano: 1883,
        modelo: '-',
        inicio: '-',
        termino: '-',
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
    console.log('Funciona!')
    menuToggleItems.classList.toggle('menu-short-show');
})

body.addEventListener('click', function() {
    menuToggleItems.classList.add('menu-short-show');
})

// ---------- Adicionar ao HTML os objetos da constante libraryVemAi ---------- //
function loadLibraryVemAi() {

    for (let i in libraryVemAi) {
        content.innerHTML += '<div class="library">' +
        '<img class="book-cover" src="' + libraryVemAi[i].imagem + '" alt="' + libraryVemAi[i].alt + '">' +
        '<div class="book-info">' +
        '<ul class="book-info-list">' +
        '<li class="book-title-author">' + '<span class="info-title">Título:</span> ' + libraryVemAi[i].titulo + '</li>' +
        '<li class="book-title-author">' + '<span class="info-title">Autor:</span> ' + libraryVemAi[i].autor + '</li>' +
        '</ul>' +
        '<button class="button-more-info">' + 'Saiba mais!' + '</button>' +
        '</div>'
    }

}

loadLibraryVemAi();

// ---------- Adicionar um índice de controle em cada botão de "Saiba mais!" ---------- //
const buttonMoreInfo = Array.from(document.querySelectorAll('.button-more-info'));

function clickMoreInfo () {

    buttonMoreInfo.forEach (e => {

        for (let i = 0; i <buttonMoreInfo.length; i++) {
            buttonMoreInfo[i].classList.add(`${i}`);
        }

        e.onclick = loadMoreInfoVemAi;
        
    })
}

clickMoreInfo();

// ---------- Substituir as informações da libraryVemAi pelas informações do "Saiba mais!" do livro selecionado ---------- //
function loadMoreInfoVemAi () {

    content.style.display = 'none';
    intro.style.display = 'none';
    backButton.style.display = 'block';
    moreInfoContent.style.display = 'flex'

    // ----- Cada botão tem duas classes: o .more-info e o índice. Aqui estão sendo retiradas as letras e deixando só o número (índice) -----/
    let bookClass = this.className;
    let bookIndex = bookClass.replace(/\D/g, '');
    
    // ----- Adicionar informações ao HTML ----- //
    moreInfoContent.innerHTML =
    '<img class="more-info-cover" src="' + libraryVemAi[bookIndex].imagem + '" alt="' + libraryVemAi[bookIndex].alt + '">' + 

    '<div class="more-info-book">' +
        '<ul class="more-info-list">' +
        '<li class="more-info-item">' + '<span class="info-title">Título:</span> ' + libraryVemAi[bookIndex].titulo + '</li>' +
        '<li class="more-info-item">' + '<span class="info-title">Autor:</span> ' + libraryVemAi[bookIndex].autor + '</li>' +
        '<li class="more-info-item">' + '<span class="info-title">Gênero:</span> ' + libraryVemAi[bookIndex].genero + '</li>' +
        '<li class="more-info-item">' + '<span class="info-title">Páginas:</span> ' + libraryVemAi[bookIndex].paginas + '</li>' +
        '<li class="more-info-item">' + '<span class="info-title">Ano de Publicação:</span> ' + libraryVemAi[bookIndex].ano + '</li>' +
        '</ul>' +
    '</div>'

    backButton.onclick = reloadLibraryVemAi;
}

// ---------- Readicionar as informações de libraryVemAi no HTML e substituir as informações do "Saiba mais!" ---------- //
function reloadLibraryVemAi () {
    intro.style.display = 'block';
    content.style.display = 'flex';
    moreInfoContent.style.display = 'none';
    backButton.style.display = 'none';
}
