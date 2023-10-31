var hora = new Date()
agora = hora.getHours()
if(agora < 12){
    console.log(`São ${agora} horas. Bom dia!`)
}else if(agora > 18){
    console.log(`São ${agora} horas. Boa noite!`)
}else{
    console.log(`São ${agora} horas. Boa tarde!`)
}
