function tabuada(){
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#seltab')
    if(num.value.length == 0 || num.value == 0){
        window.alert('Você esqueceu de selecionar um número.')
    } else{
        var n = Number(num.value)
        tab.innerHTML = ``
        for(var c=1; c<=10; c++){
            var op = document.createElement('option')
            op.text = `${n} x ${c} = ${n*c}`
            op.value = `Tab${c}`
            tab.appendChild(op)
        }
    }
}