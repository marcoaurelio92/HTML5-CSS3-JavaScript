/*
cores:
bomdia - #eee0d7 
boatarde - #4e4132
boanoite - #014b76
*/
function carregar(){
    var hora = new Date()
    var agora = hora.getHours()
    var msg = window.document.querySelector('div#msg')
    var foto = window.document.querySelector('div#foto')
    var img = window.document.querySelector('img#img')

    if(agora < 12){
        msg.innerHTML = `Bom dia! Nesse momento são ${agora} hora(s) da manhã.`
        window.document.body.style.backgroundColor = '#eee0d7'
        img.src = '_imagens/bomdia.png'
    }else if(agora > 18){
        msg.innerHTML = `Boa noite! Nesse momento são ${agora} horas da noite.`
        window.document.body.style.backgroundColor = '#014b76'
        img.src = '_imagens/boanoite.png'
    }else{
        msg.innerHTML = `Boa tarde! Nesse momento são ${agora} horas da tarde.`
        window.document.body.style.backgroundColor = '#4e4132'
        img.src = '_imagens/boatarde.png'
    }
}