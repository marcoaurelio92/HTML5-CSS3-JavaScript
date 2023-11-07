function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nas = window.document.querySelector('input#inasc')
    var res = window.document.querySelector('div#out')

    if(nas.value.length <= 3 || Number(nas.value) > ano){
        window.alert('[ERRO] Confira seus dados e tente novamente.')
    } else{
        var idade = ano - Number(nas.value)
        var sex = window.document.getElementsByName('radsex')
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            var gênero = 'Homem'
            window.document.body.style.backgroundColor = '#23B5D3'
            if(idade < 4){
                img.setAttribute('src', './_imagens/foto-homem-bebe.png')
            } else if(idade < 12){
                img.setAttribute('src', './_imagens/foto-homem-crianca.png')
            } else if(idade < 18){
                img.setAttribute('src', './_imagens/foto-homem-jovem.png')
            } else if(idade < 65){
                img.setAttribute('src','./_imagens/foto-homem-adulto.png')
            } else{
                img.setAttribute('src', './_imagens/foto-homem-idoso.png')
            }
        } else{
            var gênero = 'Mulher'
            window.document.body.style.backgroundColor = '#D955A6'
            if(idade < 4){
                img.setAttribute('src', './_imagens/foto-mulher-bebe.png')
            } else if(idade < 12){
                img.setAttribute('src', './_imagens/foto-mulher-crianca.png')
            } else if(idade < 18){
                img.setAttribute('src', './_imagens/foto-mulher-jovem.png')
            } else if(idade < 65){
                img.setAttribute('src', './_imagens/foto-mulher-adulta.png')
            } else{
                img.setAttribute('src', './_imagens/foto-mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gênero} de ${idade} anos de idade.`
        res.appendChild(img)
    }
}