const body = document.querySelector('body');
const menuToggle = document.querySelector('.menu-short-icon');
const menuToggleItems = document.querySelector('.menu-short-options');
const intro = document.querySelector(".intro");
const content = document.getElementById("books2022");
const backButton = document.querySelector('.back-button');
const moreInfoContent = document.getElementById("more-info");
const library2022 = [
    {
        titulo: 'Estilhaça-me',
        autor: 'Tahereh Mafi',
        genero: 'Ficção',
        paginas: 328,
        paginasLidas: 328,
        status: 'Terminado',
        indice: 1,
        imagem: "../images/2022/Estilhacame.jpg",
        alt: "Capa do livro Estilhaça-me",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-01-01',
        termino: '2022-01-14',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"The moon is a loyal companion. It never leaves. It’s always there, watching, steadfast, knowing us in our light and dark moments, changing forever just as we do. Every day it’s a different version of itself. Sometimes weak and wan, sometimes strong and full of light. The moon understands what it means to be human. Uncertain. Alone. Cratered by imperfections."',
            citacao2: '"They don’t bother to be bothered by the beauty that falls from the sky. They don’t understand the freedom in feeling the universe on their skin. They don’t care."',
            citacao3: '"The collapse of our human society should not come as a surprise. We brought it upon ourselves. The question wasn’t whether things would fall apart. Only when. It was a waiting game. A question of who would try to take power and how they would try to use it. Fear is a great motivator."'
        },
    },
    {
        titulo: 'João Santana - Um marqueteiro no poder',
        autor: 'Luiz Maklouf Carvalho',
        genero: 'Biografia',
        paginas: 252,
        paginasLidas: 252,
        status: 'Terminado',
        indice: 2,
        imagem: "../images/2022/JoaoSantana.jpg",
        alt: "Capa do livro João Santana - Um marqueteiro no poder",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-01-06',
        termino: '2022-01-24',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"A ideologia não tem o poder de refazer fatos vividos e materializados, mas tem o poder de examinar esses fatos por diversas óticas. Como a filosofia e a psicologia também têm. É assim que se constroem visões de mundo. É assim que se constrói o debate democrático. O que não pode é querer, depois, reescrever a história."',
            citacao2: '"Lula é vulcão. Dilma é raio laser."',
            citacao3: '-'
        },
    },
    {
        titulo: 'Liberta-me',
        autor: 'Tahereh Mafi',
        genero: 'Ficção',
        paginas: 389,
        paginasLidas: 389,
        status: 'Terminado',
        indice: 3,
        imagem: "../images/2022/Libertame.jpg",
        alt: "Capa do livro Liberta-me",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-01-25',
        termino: '2022-02-11',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Até o verão terminar',
        autor: 'Coleen Hover',
        genero: 'Romance',
        paginas: 333,
        paginasLidas: 333,
        status: 'Terminado',
        indice: 4,
        imagem: "../images/2022/AteVeraoTerminar.jpg",
        alt: "Capa do livro Até o verão terminar",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-02-11',
        termino: '2022-02-16',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"- Podemos lotar a vida de coisas bacanas, mas coisas bacanas não preenchem o vazio na nossa alma.<br>- E o que preenche o vazio de uma alma?<br>- Pedacinhos da alma de outra pessoa."',
            citacao2: '"Quando se é uma pessoa horrível, imagino que buscar o que há de horrível nos outros seja uma espécie de tática de sobrevivência."',
            citacao3: '"Na maioria das vezes a diversão que conduz à dor vale super a pena."'
        },
    },
    {
        titulo: 'O morro dos ventos uivantes',
        autor: 'Emily Brontë',
        genero: 'Clássico',
        paginas: 368,
        paginasLidas: 368,
        status: 'Terminado',
        indice: 5,
        imagem: "../images/2022/MorroVentos.jpg",
        alt: "Capa do livro O morro dos ventos uivantes",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-02-16',
        termino: '2022-03-20',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"Por que você traiu seu próprio coração, Cathy? Você me amava. E que direito você teve de me deixar? A pobre fantasia que você sentia por Linton? Nada que Deus ou Satanás pudessem infligir teria nos separado. Você o fez de sua própria vontade. Eu não quebrei seu coração, Cathy, você o quebrou. E o quebrando, você quebrou o meu."',
            citacao2: '"Quem é capaz de ser hostil e mal-humorado quando não encontra oposições ou indiferença?"',
            citacao3: '"Foi uma estranha forma de me matar: não aos poucos, mas em frações ínfimas, iludindo-me com o espectro de uma esperança ao longo de dezoito anos."'
        },
    },
    {
        titulo: 'Macbeth',
        autor: 'William Shakespeare',
        genero: 'Clássico',
        paginas: 128,
        paginasLidas: 128,
        status: 'Terminado',
        indice: 6,
        imagem: "../images/2022/Macbeth.jpg",
        alt: "Capa do livro Macbeth",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-02-14',
        termino: '2022-03-21',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"Aconteça o que acontecer, o tempo e as horas sempre chegam ao fim, mesmono dia mais duro dentre todos os dias."',
            citacao2: '"A dor que não fala termina por sussurar a um coração sobrecarregado, pedindo-lhe a explosão."',
            citacao3: '"Quem poderia refrear-se, tendo um coração para amar e, neste coração, coragem para declarar seu amor?"'
        },
    },
    {
        titulo: 'Teto para dois',
        autor: 'Beth O\'Leary',
        genero: 'Romance',
        paginas: 400,
        paginasLidas: 400,
        status: 'Terminado',
        indice: 7,
        imagem: "../images/2022/TetoParaDois.jpg",
        alt: "Capa do livro Teto para dois",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-03-22',
        termino: '2022-04-08',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'Romeu e Julieta',
        autor: 'William Shakesper',
        genero: 'Clássico',
        paginas: 248,
        paginasLidas: 248,
        status: 'Terminado',
        indice: 8,
        imagem: "../images/2022/RomeuJulieta.jpg",
        alt: "Capa do livro Romeu e Julieta",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-04-11',
        termino: '2022-04-25',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"Esses prazeres violentos têm fins violentos e morreu em seu triunfo, como o fogo e a pólvora, que, ao se beijarem, se consomem."',
            citacao2: '"Uma tristeza deseperada cura-se com a languidez de outra tristeza."',
            citacao3: '"Não se encontra a cura de uma desordem na confusão."'
        },
    },
    {
        titulo: 'Cosmos',
        autor: 'Carl Sagan',
        genero: 'Científico',
        paginas: 456,
        paginasLidas: 456,
        status: 'Terminado',
        indice: 9,
        imagem: "../images/2022/Cosmos.jpg",
        alt: "Capa do livro Cosmos",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-04-10',
        termino: '2022-11-22',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"Estamos conectados - não do modo não imaginativo, pessoal em pequena escala pretendido pelos astrólogos, mas de modos mais profundos, que envolvem a origem da matéria, a habitabilidade da Terra a evolução e o destino da espécie humana."',
            citacao2: '"Somos feitos de material de estrelas."',
            citacao3: '"Nosso amor pelas estrelas é grande demais para termos medo da noite."'
        },
    },
    {
        titulo: 'Obrigada, maldito destino',
        autor: 'Pâmela Vital',
        genero: 'Romance',
        paginas: 90,
        paginasLidas: 90,
        status: 'Terminado',
        indice: 10,
        imagem: "../images/2022/MalditoDestino.jpg",
        alt: "Capa do livro Obrigada, maldito destino",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-04-26',
        termino: '2022-05-02',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
        },
    },
    {
        titulo: 'O mercador de Veneza',
        autor: 'William Shakespeare',
        genero: 'Clássico',
        paginas: 136,
        paginasLidas: 136,
        status: 'Terminado',
        indice: 11,
        imagem: "../images/2022/MercadorVeneza.jpg",
        alt: "Capa do livro O mercador de Veneza",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-05-03',
        termino: '2022-05-13',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"O diabo sabe citar as Escrituras para seus próprios fins."',
            citacao2: '"Uma alma perniciosa que apresenta testemunho sagrado é o mesmo que um cafajeste com um sorriso na cara, uma maçã bonita podre por dentro."',
            citacao3: '"Não gosto nem um pouco de palaras justas na mente de um canalha."'
        },
    },
    {
        titulo: 'Mil e uma facetas do amor',
        autor: 'Renata Domingues',
        genero: 'Romance',
        paginas: 394,
        paginasLidas: 394,
        status: 'Terminado',
        indice: 12,
        imagem: "../images/2022/MUFA.jpg",
        alt: "Capa do livro Mil e uma facetas do amor",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-05-15',
        termino: '2022-06-01',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"Sinta o sentir."',
            citacao2: '"As primeiras impressões são mais sobre o seu próprio reflexo e não necessariamente sobre o que o outro aparenta ser."',
            citacao3: '"Somos meras perspectivas."'
        },
    },
    {
        titulo: 'Jogo do amor (ódio)',
        autor: 'Sally Thorne',
        genero: 'Romance',
        paginas: 420,
        paginasLidas: 420,
        status: 'Terminado',
        indice: 13,
        imagem: "../images/2022/JogoAmorOdio.jpg",
        alt: "Capa do livro Jogo do amor (ódio)",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-06-06',
        termino: '2022-06-17',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"Eu tenho tantas coisas dentro de mim que também desconheço. É como se fosse prefeita de uma cidade que nunca vi na vida."',
            citacao2: '"Desde o primeiro momento que a vi. Desde o momento que você sorriu pra mim. Senti que estava caindo em um penhasco. E essa sensação nunca foi embora. Tenho tentado arrastá-la comigo, mas fiz isso fiz isso da maneira mais terrível e idiota possível."',
            citacao3: '-'
        },
    },
    {
        titulo: 'O alienista',
        autor: 'Machado de Assis',
        genero: 'Clássico',
        paginas: 104,
        paginasLidas: 104,
        status: 'Terminado',
        indice: 14,
        imagem: "../images/2022/Alienista.jpg",
        alt: "Capa do livro O alienista",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-06-17',
        termino: '2022-06-27',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"A razão é o perfeito equilibrio de todas as faculdades."',
            citacao2: '"O terror também é o pai da loucura."',
            citacao3: '"A prudência é a primeira das virtudes em tempos de revolução."'
        },
    },
    {
        titulo: 'Otelo',
        autor: 'William Shakespeare',
        genero: 'Clássico',
        paginas: 145,
        paginasLidas: 145,
        status: 'Terminado',
        indice: 15,
        imagem: "../images/2022/Otelo.jpg",
        alt: "Capa do livro Otelo",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-06-27',
        termino: '2022-07-15',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"Está em nós ser isso ou aquilo outro."',
            citacao2: '"Lamentar um infortúnio que está morto e enterrado é dar o passo certo na direção de atrair para si novo infortúnio."',
            citacao3: '"Até o dia de hoje jamais ouvi dizer que um coração machucado se consertasse pelo ouvido."'
        },
    },
    {
        titulo: 'A princesa salva a si mesma nesse livro',
        autor: 'Amanda Lovelace',
        genero: 'Poesia',
        paginas: 201,
        paginasLidas: 201,
        status: 'Terminado',
        indice: 16,
        imagem: "../images/2022/PrincesaSalva.jpg",
        alt: "Capa do livro A princesa salva a si mesma nesse livro",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-07-15',
        termino: '2022-07-20',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"Eu tinha um sorriso largo no meu rosto quando queimei as pontes para todas as coisas que eu não podia restaurar."',
            citacao2: '"De algum modo, minha alma conhecia a sua alma antes que tivéssemos tido a chance de nos encontrar."',
            citacao3: '"Desconfie dos garotos que só dizem meias verdades porque eles apenas vão amar você pela metade."'
        },
    },
    {
        titulo: 'É assim que acaba',
        autor: 'Colleen Hover',
        genero: 'Romance',
        paginas: 368,
        paginasLidas: 368,
        status: 'Terminado',
        indice: 17,
        imagem: "../images/2022/AssimAcaba.jpg",
        alt: "Capa do livro É assim que acaba",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-07-16',
        termino: '2022-07-31',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"Éramos só duas pessoas que se ajudavam quando era preciso e que fundiram seus corações um ao outro no meio do caminho."',
            citacao2: '"Só porque não terminamos juntos na mesma onda não significa que não somos parte do mesmo oceano."',
            citacao3: '"No futuro... Se por algum milagre você achar que é capaz de se apaixonar de novo... Se apaixone por mim. Você ainda é a minha pessoa preferida, Lily. E sempre será."'
        },
    },
    {
        titulo: 'Incendeia-me',
        autor: 'Tahereh Mafi',
        genero: 'Ficção',
        paginas: 441,
        paginasLidas: 441,
        status: 'Terminado',
        indice: 18,
        imagem: "../images/2022/Incendeiame.jpg",
        alt: "Capa do livro Incendeia-me",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-07-31',
        termino: '2022-08-18',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"- Então por que está rindo de mim?<br>- Não estou. Só estou me perguntando se você gostaria de contar com a minha ajuda."',
            citacao2: '"Em um mundo onde há tanta dor e tão pouco bem a receber? Eu não sofro por nada. Eu recebo tudo."',
            citacao3: '"Eu já estive aqui antesm digo a mim mesma. Já me senti mais solitária do que agora, mais desesperada do que agora. Eu já estive aqui e sobrevivi. Vou passar por essa."'
        },
    },
    {
        titulo: 'Restaura-me',
        autor: 'Tahereh Mafi',
        genero: 'Ficção',
        paginas: 275,
        paginasLidas: 275,
        status: 'Terminado',
        indice: 19,
        imagem: "../images/2022/Restaurame.jpg",
        alt: "Capa do livro Restaura-me",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-08-18',
        termino: '2022-09-02',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"Sinto um enorme medo de me afogar no oceano do meu próprio silêncio. No tamborilar contínuo que acompanha a quietude, minha mente é cruel comigo. Penso demais. E sinto, talvez muito mais do que deveria. Seria apenas um leve exagero dizer que meu objetivo na vida é vencer a minha mente, as minhas lembranças."',
            citacao2: '"Aqui nos cantos escuros e empoeirados da minha mente sinto um alívio estranho aqui sempre sou bem-vinda em minha solidão, em minha tristeza neste abismo existe um ritmo do qual me lembro."',
            citacao3: '"Mas o fogo do verdadeiro ódio, percebo, não pode existir sem o oxigênio da afeição. Eu não sentiria tanta dor ou tanto ódio se não me importasse."'
        },
    },
    {
        titulo: 'As aventuras de Sherlock Holmes',
        autor: 'Arthur Conan Doyle',
        genero: 'Clássico',
        paginas: 208,
        paginasLidas: 208,
        status: 'Terminado',
        indice: 20,
        imagem: "../images/2022/AventurasSherlock.jpg",
        alt: "Capa do livro As aventuras de Sherlock Holmes",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-09-03',
        termino: '2022-09-23',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"É uma velha máxima minha que, quando se exclui o impossível, o que resta, não importa o quão improvável seja, deve ser verdade."',
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

// ---------- Adicionar ao HTML os objetos da constante library2022 ---------- //
function loadLibrary2022() {

    for (let i in library2022) {
        content.innerHTML += 
        `<div class="library">

            <div class="book">
                <p class="book-index">#${library2022[i].indice}</p>
                <img class="book-cover" src="${library2022[i].imagem}" alt="${library2022[i].alt}"> 
            </div>

            <div class="book-info">

                <ul class="book-info-list">
                    <li class="book-title-author"><span class="info-title">Título:</span> ${library2022[i].titulo}</li>
                    <li class="book-title-author"><span class="info-title">Autor:</span> ${library2022[i].autor}</li>
                </ul>

            </div>

            <button class="button-more-info ${i}">Saiba mais!</button>

        </div>`
    }

}

loadLibrary2022();

// ---------- Adicionar um índice de controle em cada botão de "Saiba mais!" ---------- //
const buttonMoreInfo = Array.from(document.querySelectorAll('.button-more-info'));


buttonMoreInfo.forEach (e => e.onclick = loadMoreInfo2022);


// ---------- Substituir as informações da library2022 pelas informações do "Saiba mais!" do livro selecionado ---------- //
function loadMoreInfo2022 () {

    content.style.display = 'none';
    intro.style.display = 'none';
    backButton.style.display = 'block';
    moreInfoContent.style.display = 'flex'

    // ----- Cada botão tem duas classes: o .more-info e o índice. Aqui estão sendo retiradas as letras e deixando só o número (índice) -----/
    let bookClass = this.className; 
    let bookIndex = bookClass.replace(/\D/g, ''); 

    // ----- Cálculo do progresso de leitura ----- //
    let progress = ((library2022[bookIndex].paginasLidas/library2022[bookIndex].paginas) * 100).toFixed(0);

    // ----- Cálculo do tempo total de leitura ----- //
    let time = 0;
    
    if (library2022[bookIndex].paginasLidas < library2022[bookIndex].paginas) {
        time = '-'
    } else {
        time = `${((new Date(library2022[bookIndex].termino) - new Date(library2022[bookIndex].inicio)) / (1000 * 60 * 60 * 24) + 1)} dias`;
    }


    // ----- Adicionar informações ao HTML ----- //
    moreInfoContent.innerHTML =
    `<img class="more-info-cover" src="${library2022[bookIndex].imagem}" alt="${library2022[bookIndex].alt}"> 

    <div class="more-info-book">

        <ul class="more-info-list">
            <li class="more-info-item"><span class="info-title">Título:</span> ${library2022[bookIndex].titulo}</li>
            <li class="more-info-item"><span class="info-title">Autor:</span> ${library2022[bookIndex].autor}</li>
            <li class="more-info-item"><span class="info-title">Gênero:</span> ${library2022[bookIndex].genero}</li>
            <li class="more-info-item"><span class="info-title">Páginas:</span> ${library2022[bookIndex].paginas}</li>
            <li class="more-info-item"><span class="info-title">Ano de Publicação:</span> ${library2022[bookIndex].ano}</li>
            <li class="more-info-item"><span class="info-title">Modelo:</span> ${library2022[bookIndex].modelo}</li>
            <li class="more-info-item"><span class="info-title">Início da leitura:</span> ${library2022[bookIndex].inicio.split('-').reverse().join('/')}</li>
            <li class="more-info-item"><span class="info-title">Término da leitura:</span> ${library2022[bookIndex].termino.split('-').reverse().join('/')}</li>
        </ul>

    </div>

    <div class="extra-info"> 

        <div class="progress">
            <p class="extra-info-item"><span class="info-title">Progresso:</span></p>

            <div class="progress-bar-background"> 

                <div class="progress-bar-status"><p class="progress-percentage">${progress}%</p></div> 

            </div>

        </div>

        <p class="extra-info-item"><span class="info-title">Tempo de leitura:</span> ${time}</p>
        <p class="extra-info-item"><span class="info-title">Citações preferidas:</span></p> 
        <blockquote class="cite1">${library2022[bookIndex].citacoes.citacao1}</blockquote>

        <details class="extra-citation"> 

                <summary class="see-more-citation">Veja mais...</summary>
                <blockquote class="cite2">${library2022[bookIndex].citacoes.citacao2}</blockquote>
                <blockquote class="cite3">${library2022[bookIndex].citacoes.citacao3}</blockquote>

        </details>

    </div>`

    // ----- Condicional da quantidade de citações (máx. 3) ----- //
    const extraCitation = document.querySelector('.extra-citation');
    const cite2 = document.querySelector('.cite2')
    const cite3 = document.querySelector('.cite3')

    if (library2022[bookIndex].citacoes.citacao1 == '-') {
        extraCitation.style.display = 'none';
    }

    if (library2022[bookIndex].citacoes.citacao2 == '-') {
        cite2.style.display = 'none';
    }

    if (library2022[bookIndex].citacoes.citacao3 == '-') {
        cite3.style.display = 'none';
    }

    // ----- Style da barra de progresso ----- //
    let sizeProgressBar = progress * 2;
    const progressBar = document.querySelector('.progress-bar-status');
    progressBar.style.width = `${sizeProgressBar}px`;
    
    backButton.onclick = reloadLibrary2022;
}

// ---------- Readicionar as informações de library2022 no HTML e substituir as informações do "Saiba mais!" ---------- //
function reloadLibrary2022 () {
    intro.style.display = 'block';
    content.style.display = 'flex';
    moreInfoContent.style.display = 'none';
    backButton.style.display = 'none';
}
