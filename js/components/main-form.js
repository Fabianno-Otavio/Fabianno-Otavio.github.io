function validateForm(){
    event.preventDefault();
    let name = document.forms[0].name;
    let mail = document.forms[0].email;    
    let msg = document.forms[0].message;
    let btn = document.forms[0].send;
    
    name.value == '' ? window.alert('Coloque seu nome.') :
    mail.value == '' ? window.alert('Coloque seu e-mail.') :
    msg.value == '' ? window.alert('Escreva sua mensagem.') : console.log('OK');
}   
        