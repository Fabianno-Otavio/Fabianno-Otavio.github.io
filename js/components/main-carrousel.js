const card = document.querySelector('.wrapper-cards')
const btnRight=document.querySelector('.button-arrow.-right')
let n = 1;
let img = document.querySelector(`.logo-abt.-n${n}`);
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
    if(n>0 && n<4){
        document.querySelector(`.logo-abt.-n${n}`).style.border='10px solid white';       
        document.querySelector(`.logo-abt.-n${n}`).style.transform='scale(1.1)';   
        document.querySelector(`.logo-abt.-n${n}`).style.filter='';        
    } else if(n<=0){
        n=3;
        document.querySelector(`.logo-abt.-n${n}`).style.border='10px solid white';     
        document.querySelector(`.logo-abt.-n${n}`).style.transform='scale(1.1)';
        document.querySelector(`.logo-abt.-n${n}`).style.filter=''; 
    } else if (n>3){
        n=1;
        document.querySelector(`.logo-abt.-n${n}`).style.border='10px solid white'; 
        document.querySelector(`.logo-abt.-n${n}`).style.transform='scale(1.1)'; 
        document.querySelector(`.logo-abt.-n${n}`).style.filter=''; 
    }
    
}
  