let amigo = {nome:'Marco', sexo:'M', peso:90.2, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(8)
console.log(`O indivíduo ${amigo.nome} de sexo:"${amigo.sexo}", nesse momento e está pesando ${amigo.peso}.`)