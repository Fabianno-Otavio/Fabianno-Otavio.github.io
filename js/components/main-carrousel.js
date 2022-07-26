const card = document.querySelector('.wrapper-cards');
const btnRight=document.querySelector('.button-arrow.-right');
let article = document.querySelector('.main-action.-atc');
let n = 1;

document.querySelector(`.logo-abt.-n1`).style.border='10px solid gray';
document.querySelector(`.logo-abt.-n1`).style.transform='scale(1.08)';
 
document.querySelector(`.logo-abt.-n2`).style.filter='blur(2px) grayscale(90%)';
document.querySelector(`.logo-abt.-n3`).style.filter='blur(2px) grayscale(90%)';

/*let pos = 0;
function move(pixels){
    pos+=pixels;
    card.style.transform=`translateX(${pos}px)`;
    if(pos>=screen.width*0.96||pos<=-screen.width*2){
        card.style.transform=`translateX(0)`;  
        pos=0;
    }
}*/

function select(i){
 
    document.querySelector(`.logo-abt.-n${n}`).style.border='';
    document.querySelector(`.logo-abt.-n${n}`).style.transform=''; 
    document.querySelector(`.logo-abt.-n${n}`).style.filter='blur(2px) grayscale(90%)';
     
    n += Number(i);

    addEffects(n);

    text(n);
}

function text(t){
    switch (t){
        case 1:
            article.innerHTML='Terminei o ensino médio na escola SESI-Campinas e iniciei meus estudos no Centro Universitário Alves Faria - UNIALFA, no curso de engenharia civil, no qual sempre me identifiquei por gostar de exatas e da ideia de construir lares e empreendimentos, e nele tive meus primeiros contatos com a programação, me identifiquei com aquilo e comecei a programar em C++ por curiosidade, e quase mudei de curso por volta do 5º período, porém decidi continuar, pois já estava na metade do curso e também gostava muito da engenharia civil. ';
            break;
        case 2:
            article.innerHTML='Me formei em engenharia civil, e em fevereiro de 2020 comecei no meu primeiro emprego, na EBR Construtora, em Anicuns, no interior de Goiás, foi uma excelente experiência, fiz muitos amigos e aprendi a me comunicar e a lidar com pessoas. Em Outubro de 2021 voltei para Goiânia a procura de melhores oportunidades.';
            break;
        case 3:
            article.innerHTML='Em abril de 2022, visto a dificuldade de conseguir um emprego na minha área, e vendo a área de tecnologia crescer cada vez mais, me lembrei do quanto gostava da matéria de lógica de programação na faculdade, e decidi pesquisar mais sobre, me identifiquei muito com o FrontEnd, e decidi começar a minha transição de carreira, não só pelas maiores oportunidades, mas por fazer algo que realmente amo. Desde então me dedico em aprender HTML, CSS e JavaScript, e assim busco me tornar um desenvolvedor FrontEnd.';
    }
}

function addEffects(x){
    switch(x){
        case 1:
        case 2:
        case 3:
            document.querySelector(`.logo-abt.-n${x}`).style.border='10px solid gray';       
            document.querySelector(`.logo-abt.-n${x}`).style.transform='scale(1.08)';   
            document.querySelector(`.logo-abt.-n${x}`).style.filter='';
            break;
        case 0:
            n=3;
            document.querySelector(`.logo-abt.-n${n}`).style.border='10px solid gray';     
            document.querySelector(`.logo-abt.-n${n}`).style.transform='scale(1.08)';
            document.querySelector(`.logo-abt.-n${n}`).style.filter='';
            break;
        case 4:
            n=1;
            document.querySelector(`.logo-abt.-n${n}`).style.border='10px solid gray'; 
            document.querySelector(`.logo-abt.-n${n}`).style.transform='scale(1.08)'; 
            document.querySelector(`.logo-abt.-n${n}`).style.filter=''; 
    }
}