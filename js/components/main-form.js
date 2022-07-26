function validateForm(){
    let name = document.forms[0].name;
    let mail = document.forms[0].email;    
    let msg = document.forms[0].message;
    let btn = document.forms[0].send;
    
    name.value == '' ? window.alert('Coloque seu nome.') :
    mail.value == '' ? window.alert('Coloque seu e-mail.') :
    msg.value == '' ? window.alert('Escreva sua mensagem.') : 
    mail.value.indexOf('@') == -1 || mail.value.indexOf('.') == -1 ? window.alert('Insira um email válido') : 
    console.log('OK');
}
        