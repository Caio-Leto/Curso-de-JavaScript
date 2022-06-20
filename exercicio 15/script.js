function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        img.setAttribute("src", "imagens/xvermelho.png")
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "imagens/bebemenino.png")
            } else if (idade < 22) {
                // Jovem
                img.setAttribute("src", "imagens/jovemhomem.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "imagens/homemadulto.png")
            } else {
                // Idoso
                img.setAttribute("src", "imagens/idosohomem.png")
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "imagens/bebemenina.png" )
            } else if (idade < 22) {
                // Jovem
                img.setAttribute("src", "imagens/jovemmulher.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "imagens/mulheradulta.png")
            } else {
                // Idoso
                img.setAttribute("src", "imagens/idosamulher.png")
            }
        }
    }
    res.style.texAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

}