function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        img.src = 'foto-manha.png'
        document.body.style.background = '#e4a858'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'foto-tarde.png'
        document.body.style.background = '#e43c00'
    } else {
        img.src = 'foto-noite.png'
        document.body.style.background = '#182b2f'
    }
}

