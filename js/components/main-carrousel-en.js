const card = document.querySelector('.wrapper-cards');
const btnRight=document.querySelector('.button-arrow.-right');
let article = document.querySelector('.main-action.-atc');
let n = 1;

document.querySelector(`.logo-abt.-n1`).style.border='10px solid gray';
document.querySelector(`.logo-abt.-n1`).style.transform='scale(1.08)';
 
document.querySelector(`.logo-abt.-n2`).style.filter='blur(2px) grayscale(90%)';
document.querySelector(`.logo-abt.-n3`).style.filter='blur(2px) grayscale(90%)';
document.querySelector(`.logo-abt.-n4`).style.filter='blur(2px) grayscale(90%)';

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
            article.innerHTML=`I Finished high school at School SESI-Campinas and started my studies at Universitary Center Alves Faria - UNIALFA, in the civil engineering course,
                            in which I have always identified with exactness and the idea of ​​building homes and enterprises, and in it I had my first contacts with programming,
                            I identified with that and started programming in C++ out of curiosity, and I almost changed course 5th period, but I decided to continue,
                            because I was already halfway through the course and I also really liked civil engineering. `;
            break;
        case 2:
            article.innerHTML=`I graduated in civil engineering, and in February 2020 I started my first job, at EBR Construtora, in Anicuns, in the interior of Goiás, it was an 
                            excellent experience, I made many friends and learned to communicate and deal with people. In October 2021 I returned to Goiânia looking for better 
                            opportunities.`;
            break;
        case 3:
            article.innerHTML=`In April 2022, given the difficulty of getting a job in my area, and seeing the technology area grow more and more, I remembered how much I liked 
                            the classes of programming logic in college, and decided to research more about it, I identified a lot with FrontEnd, and I decided to start my career 
                            transition, not only for the better opportunities, but for doing something I really love. Since then I dedicate myself to learning HTML, CSS and JavaScript, 
                            and so I seek to become a FrontEnd developer.`;
            break;
        case 4:
             article.innerHTML=`In September of 2022, I officially started my career as a developer, with my first job in this area in the company H1 Software House where I act as FrontEnd developer.
                            Here I met incredible people with whom I have the opportunity to work and develop exceptional projects. Here we develop web applications using many technologies,
                            among the main: Angular, React, Typescript, Bootstrap, Ionic, NodeJs e PostgreSQL.`;
    }
}

function addEffects(x){
    switch(x){
        case 1:
        case 2:
        case 3:
        case 4:
            document.querySelector(`.logo-abt.-n${x}`).style.border='10px solid gray';       
            document.querySelector(`.logo-abt.-n${x}`).style.transform='scale(1.08)';   
            document.querySelector(`.logo-abt.-n${x}`).style.filter='';
            break;
        case 0:
            n=4;
            document.querySelector(`.logo-abt.-n${n}`).style.border='10px solid gray';     
            document.querySelector(`.logo-abt.-n${n}`).style.transform='scale(1.08)';
            document.querySelector(`.logo-abt.-n${n}`).style.filter='';
            break;
        case 5:
            n=1;
            document.querySelector(`.logo-abt.-n${n}`).style.border='10px solid gray'; 
            document.querySelector(`.logo-abt.-n${n}`).style.transform='scale(1.08)'; 
            document.querySelector(`.logo-abt.-n${n}`).style.filter=''; 
    }
}