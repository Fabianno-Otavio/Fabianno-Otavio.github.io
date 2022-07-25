const card = document.querySelector('.wrapper-cards');
const btnRight=document.querySelector('.button-arrow.-right');
let article = document.querySelector('.main-action.-atc');
let n = 1;

document.querySelector(`.logo-abt.-n1`).style.border='10px solid white';
document.querySelector(`.logo-abt.-n1`).style.transform='scale(1.08)';
 
document.querySelector(`.logo-abt.-n2`).style.filter='blur(2px) grayscale(50%)';
document.querySelector(`.logo-abt.-n3`).style.filter='blur(2px) grayscale(50%)';

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
    document.querySelector(`.logo-abt.-n${n}`).style.filter='blur(2px) grayscale(50%)';
     
    n += Number(i);
    
    switch(n){
        case 1:
        case 2:
        case 3:
            document.querySelector(`.logo-abt.-n${n}`).style.border='10px solid white';       
            document.querySelector(`.logo-abt.-n${n}`).style.transform='scale(1.08)';   
            document.querySelector(`.logo-abt.-n${n}`).style.filter='';
            break;
        case 0:
            n=3;
            document.querySelector(`.logo-abt.-n${n}`).style.border='10px solid white';     
            document.querySelector(`.logo-abt.-n${n}`).style.transform='scale(1.08)';
            document.querySelector(`.logo-abt.-n${n}`).style.filter='';
            break;
        case 4:
            n=1;
            document.querySelector(`.logo-abt.-n${n}`).style.border='10px solid white'; 
            document.querySelector(`.logo-abt.-n${n}`).style.transform='scale(1.08)'; 
            document.querySelector(`.logo-abt.-n${n}`).style.filter=''; 
        
    }
    text(n);
}

function text(t){
    switch (t){
        case 1:
            article.innerHTML='Iniciou seus estudos em engenharia civil.';
            break;
        case 2:
            article.innerHTML='Se formou em engenharia civil.';
            break;
        case 3:
            article.innerHTML='Começou a transição de carreira.';
    }
}