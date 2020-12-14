function classifica() {
    var modelo = document.getElementById('modelo').value
    var anoFabricacao = document.getElementById('ano').value
    const anoAtual = 2020

    if (anoFabricacao == anoAtual)
        document.getElementById("modelo_classe").innerHTML = modelo + " - Novo"
    else if (anoAtual - anoFabricacao == 2)
        document.getElementById("modelo_classe").innerHTML = modelo + " - Seminovo"

    precoVenda()
}

function precoVenda() {
    var precoPropietario = parseInt(document.getElementById('preco').value)

    var anoFabricacao = document.getElementById('ano').value

    if (anoFabricacao == 2020) {
        var total = precoPropietario * 0.08 + precoPropietario
        document.getElementById("preco_de_venda").innerHTML = "Preço de Venda R$: " + total
    }
    else {
        var total = precoPropietario * 0.10 + precoPropietario
        document.getElementById("preco_de_venda").innerHTML = "Preço de Venda R$: " + total
    }


}