function contar(){
    var ini = document.querySelector('input#txti')
    var fim = document.querySelector('input#txtf')
    var pas = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = `Acho que você esqueceu de algo...`
        window.alert('[ERRO] Verifique os dados e tente novamente.')  
    } else{
        res.innerHTML = `Contando: <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if(p <= 0){
            window.alert(`[ATENÇÂO] O valor informado em passo foi ${p} , nesse caso vamos considerar 1.`)
            var p = 1
        }
        if(i < f){
            //Contagem crescente
            for(var c=i; c<=f; c+=p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else if(i > f){
            //Contagem regressiva
            for(var c=i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.style.textAlign = `justify`
        res.innerHTML += ` \u{1F3CB}`
    }
}