function changeIndexEN(){
    let select = document.querySelector(".language-select");

    let value = select.value;
    console.log(value)
    window.location.href="index-en.html";
    window.removeEventListener('load',setDefaultLanguage);
};

function changeIndexPT(){
    let select = document.querySelector(".language-select");

    let value = select.value;
    console.log(value)
    window.location.href="index.html";
}