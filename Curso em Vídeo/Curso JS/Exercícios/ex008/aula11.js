var vel = 74
var max = 80
var min = 60
console.log(`A sua velocidade foi de ${vel}km/h`)
console.log(`A velocidade máxima permitida na via é de ${max}km/h e a mínima é de ${min}km/h`)

if(vel > max){
    console.log(`Você foi multado por ultrapassar a velocidade máxima permitida na via`)
} else{
    console.log(`Você estava de acordo com os padrões de velocidade da via`)
}
