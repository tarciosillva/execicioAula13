function validarNome(nome) {

    var nomecompleto = nome.split(" ")

    if (nomecompleto.length > 1) {
        return true
    } else
        return false
}

function obterSobrenome(nome) {
    if (validarNome(nome) == true) {
        var nomes = nome.split(" ")
        return nomes[nomes.length - 1].toLowerCase()
    }
}

console.log()

function contarVogais(nomeComplet) {
    var total = 0
    var vogais = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < nomeComplet.length; i++) {
        if (vogais.indexOf(nomeComplet[i]) != -1) {
            total++
        }
    }
    console.log(total)
    return total
}

function exibesenha() {
    var nome = document.getElementById("nome").value
    document.getElementById("senha").innerHTML = "Senha Inicial: " + obterSobrenome(nome)+ "0"+contarVogais(nome)
}






