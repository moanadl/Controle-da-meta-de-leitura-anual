const menuToggle = document.querySelector('.menu-short-icon');
const menuToggleItems = document.querySelector('.menu-short-options');
const totalReadYear = document.querySelector('.total-read-year');
// const totalLidos = document.querySelector('.total-lidos');
const averageTime = document.querySelector('.average-time');
const averagePages = document.querySelector('.average-pages');
const mostReadGenre = document.querySelector('.genre');
const goalTimeLeft = document.querySelector('.goal-time-left');
const goalTime = document.querySelector('.goal-time');
const fasterReading = document.querySelector('.faster-reading');
const slowerReading = document.querySelector('.slower-reading');
const library2022 = [
    {
        titulo: 'Estilhaça-me',
        autor: 'Tahereh Mafi',
        genero: 'Ficção',
        paginas: 328,
        paginasLidas: 328,
        status: 'Terminado',
        indice: 1,
        imagem: "./images/Estilhacame.jpg",
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
        imagem: "./images/JoaoSantana.jpg",
        alt: "Capa do livro João Santana - Um marqueteiro no poder",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-01-06',
        termino: '2022-01-24',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
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
        imagem: "./images/Libertame.jpg",
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
        imagem: "./images/AteVeraoTerminar.jpg",
        alt: "Capa do livro Até o verão terminar",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-02-11',
        termino: '2022-02-16',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
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
        imagem: "./images/MorroVentos.jpg",
        alt: "Capa do livro O morro dos ventos uivantes",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-02-16',
        termino: '2022-03-20',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '-',
            citacao2: '-',
            citacao3: '-'
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
        imagem: "./images/Macbeth.jpg",
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
        imagem: "./images/TetoParaDois.jpg",
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
        imagem: "./images/RomeuJulieta.jpg",
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
        imagem: "./images/Cosmos.jpg",
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
        imagem: "./images/MalditoDestino.jpg",
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
        imagem: "./images/MercadorVeneza.jpg",
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
        imagem: "./images/MUFA.jpg",
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
        imagem: "./images/JogoAmorOdio.jpg",
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
        imagem: "./images/Alienista.jpg",
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
        imagem: "./images/Otelo.jpg",
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
        imagem: "./images/PrincesaSalva.jpg",
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
        imagem: "./images/AssimAcaba.jpg",
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
        imagem: "./images/Incendeiame.jpg",
        alt: "Capa do livro Incendeia-me",
        ano: 2011,
        modelo: "E-book",
        inicio: '2022-07-31',
        termino: '2022-08-18',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"- Então por que está rindo de mim? <br>- Não estou. Só estou me perguntando se você gostaria de contar com a minha ajuda."',
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
        imagem: "./images/Restaurame.jpg",
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
        imagem: "./images/AventurasSherlock.jpg",
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
const libraryExtra = [
    {
        titulo: 'Finding Cinderella',
        autor: 'Colleen Hover',
        genero: 'Romance',
        paginas: 172,
        paginasLidas: 100,
        status: 'Terminado',
        indice: 1,
        imagem: "imagesExtras/findingCinderella.jpg",
        alt: "Capa do livro Finding Cinderella",
        ano: 2013,
        modelo: "E-book",
        inicio: '2022-09-26',
        termino: '2022-10-12',
        progresso: '-',
        tempo: '-',
        citacoes: {
            citacao1: '"- If you want to call yourself my girlfriend half as much as I wish you would, then it would save me a whole lot of begging. Because I was literally about to drop to my knees and beg you. - No begging. It screams desperation. - You make me desperate."',
            citacao2: '"It feels sort of euphoric, like we’re in some sort of fairytale. Like she’s Tinkerbell and I’m Peter Pan. No, wait. I don’t want to be Peter Pan. Maybe she can be like Cinderella and I’ll be her Prince Charming”',
            citacao3: '-'
        },
    },
    {
        titulo: 'O cão dos Baskerville',
        autor: 'Arthur Conan Doyle',
        genero: 'Clássico',
        paginas: 224,
        status: 'Em andamento',
        indice: 2,
        imagem: "imagesExtras/baskerville.jpg",
        alt: "Capa do livro O cão dos Baskerville",
        ano: 1902,
        modelo: "E-book",
        inicio: '2022-11-22',
        termino: '2022-12-02', // Fake
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
menuToggle.addEventListener('click', function() {
    menuToggleItems.classList.toggle('toggle');
})

// ---------- Variáveis para limpar um pouco o código (último livro lido de cada biblioteca) ---------- //
let lastBook2022 = library2022[library2022.length - 1];
let lastBookExtra = libraryExtra[libraryExtra.length - 1];

// ---------- Total de livros lidos em 2022 ---------- //  
totalReadYear.innerHTML = `${(lastBook2022.indice) + (lastBookExtra.indice)} livros`;

// ---------- Tempo médio de leitura/Média de páginas lidas por dia ---------- //
let time2022 = 0;
let pages2022 = 0;
let timeExtra = 0;
let pagesExtra = 0;

// ----- Calcular o total de tempo e de páginas lidos por dia/Atribuir a cada livro (objeto.tempo) o tempo de leitura ----- //
for (let i in library2022) {
    library2022[i].tempo = ((new Date(library2022[i].termino)/(1000 * 60 * 60 * 24)) - (new Date(library2022[i].inicio)/(1000 * 60 * 60 * 24)));
    time2022 += ((new Date(library2022[i].termino)/(1000 * 60 * 60 * 24)) - (new Date(library2022[i].inicio)/(1000 * 60 * 60 * 24)));
    pages2022 += library2022[i].paginas; 
}

for (let i in libraryExtra) {
    libraryExtra[i].tempo = ((new Date(libraryExtra[i].termino)/(1000 * 60 * 60 * 24)) - (new Date(libraryExtra[i].inicio)/(1000 * 60 * 60 * 24)));
    timeExtra += ((new Date(libraryExtra[i].termino)/(1000 * 60 * 60 * 24)) - (new Date(libraryExtra[i].inicio)/(1000 * 60 * 60 * 24)));
    pagesExtra += libraryExtra[i].paginas; 
}

averageTime.innerHTML = `${((time2022 + timeExtra) / (lastBook2022.indice + lastBookExtra.indice)).toFixed(1)} dias`;
averagePages.innerHTML = `${(((pages2022 + pagesExtra) / 365).toFixed(1))} pág./dia`;


// ---------- Gênero mais lido ---------- //

// ----- Objeto que vai armazenar a contagem de cada gênero ----- //
let genres = {
        Romance: 0,
        Classico: 0,
        Ficcao: 0,
        Biografia: 0,
        Cientifico: 0,
        Poesia: 0
    }

// ----- Contagem de cada gênero ----- //
for (let i = 0; i < libraryExtra.length; i++) {
    if (libraryExtra[i].genero == 'Romance') {
        genres.Romance += 1;
    }
    else if (libraryExtra[i].genero == 'Clássico') {
        genres.Classico += 1;
    }    
    else if (libraryExtra[i].genero == 'Ficção') {
        genres.Ficcao += 1;
    }
    else if (libraryExtra[i].genero == 'Biografia') {
        genres.Biografia += 1;
    }
    else if (libraryExtra[i].genero == 'Científico') {
        genres.Cientifico += 1;
    }
    else if (libraryExtra[i].genero == 'Poesia') {
        genres.Poesia += 1;
    }
}

var genresRanking = Object.keys(genres).sort(function (a, b) {
    return genres[b] - genres[a]
    }
);     

mostReadGenre.innerHTML = "<p>" + genresRanking[0] + "</p>";

// ---------- Quantos livros faltam para bater a meta do ano? ---------- //
if (lastBook2022.indice == 20) {
    goalTimeLeft.innerHTML = 'A meta já foi batida! \\o/'
} else {
    goalTimeLeft.innerHTML = `${20 - lastBook2022.indice} livro(s)`;
}


// ---------- Tempo que foi necessário para bater a meta anual ---------- //
if (lastBook2022.indice == 20) {
    goalTime.innerHTML = `${((new Date(lastBook2022.termino) - new Date('2022-01-01')) / (1000 * 60 * 60 *24))} dias`;
} else {
    goalTime.innerHTML = 'A meta ainda não foi batida :('
}


// ---------- Leituras mais rápida/demorada ---------- //

// ----- Calcular a leitura mais rápida de cada bilbioteca ----- //
let fasterReading2022 = library2022.reduce(function(prev, current) {
    return prev.tempo < current.tempo ? prev : current;
}
) 

let fasterReadingExtra = libraryExtra.reduce(function(prev, current) {
    return prev.tempo < current.tempo ? prev : current;
}
) 

// ----- Calcular leitura mais demorada de cada biblioteca ----- //
let slowerReading2022 = library2022.reduce(function(prev, current) {
    return prev.tempo > current.tempo ? prev : current;
}
)

let slowerReadingExtra = libraryExtra.reduce(function(prev, current) {
    return prev.tempo > current.tempo ? prev : current;
}
) 

// ----- Comparar leituras mais rápida/demorada de cada biblioteca e retornar a mais/menos entre as duas ----- //
if (fasterReading2022.tempo < fasterReadingExtra.tempo) {
    fasterReading.innerHTML = '<p>' + fasterReading2022.titulo + ' - ' + fasterReading2022.tempo + ' dias' + '</p>'
} else {
    fasterReading.innerHTML = '<p>' + fasterReadingExtra.titulo + ' - ' + fasterReadingExtra.tempo + ' dias' + '</p>'
}

if (slowerReading2022.tempo > slowerReadingExtra.tempo) {
    slowerReading.innerHTML = '<p>' + slowerReading2022.titulo + ' - ' + slowerReading2022.tempo + ' dias' + '</p>'
} else {
    slowerReading.innerHTML = '<p>' + slowerReadingExtra.titulo + ' - ' + slowerReadingExtra.tempo + ' dias' + '</p>'
}
