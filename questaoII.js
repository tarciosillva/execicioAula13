function retornaTracos() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value


    document.getElementById("nomeAtleta").innerHTML = nome

    categorizarAluno(idade)
}

function categorizarAluno(num) {
    if (num <= 12) {
        document.getElementById("categoria").innerHTML = "Categoria: Infantil"
    } else if (num > 12 && num <= 18) {
        document.getElementById("categoria").innerHTML = "Categoria: Juvenil"
    } else if (num > 18) {
        document.getElementById("categoria").innerHTML = "Categoria: Adulto"
    }

}