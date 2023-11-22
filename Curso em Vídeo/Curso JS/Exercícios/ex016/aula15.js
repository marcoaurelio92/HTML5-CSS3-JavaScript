/* Criando um array(Variável composta ou vetor):
var num = [5,8,4]
console.log(`Os valores de num são ${num}.`)
*/ 
/*Acrescentando um elemento: 
num[3] = 6
console.log(`Os valores de num são ${num}.`)
num.push(7)
console.log(`Os valores de num são ${num}.`)
*/
//console.log(`Esta variável tem ${num.length} elementos.`) Quantidade de elementos em um array.
/* Organizando um array em ordem crescente:
num.sort()
console.log(`Agora eles estão em ordem crescente: ${num}.`)
*/ 
/*
var num = [4,5,6,7,8]
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
*/
var num = [4,5,6,7,8]
/*
for(var pos=0; pos<num.length; pos++){
    console.log(`O elemento ${num[pos]} está na posição ${pos}`)
}
*/
for(var pos in num){
    console.log(`O elemento ${num[pos]} está na posição ${pos}`)
}
var poss = num.indexOf(6)
if(poss == -1){
    console.log(`[ERRO] Este valor não está cadastrado.`)
} else{
console.log(`O valor está na posição ${poss}`)
}