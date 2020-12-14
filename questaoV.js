function incluirProduto() {
    var inNome = document.getElementById("inNome");

    var nome = inNome.value;

    if (nome == " " ) {
      alert("Informe nome do produto"); 
      inNome.focus(); 
      return; }
  
    if (localStorage.getItem("ProdutoNome")){
      var ProdutoNome = localStorage.getItem("ProdutoNome") + ";" + nome
      localStorage.setItem("ProdutoNome", ProdutoNome)
    } else {
      localStorage.setItem("ProdutoNome", nome)
    }
  
    mostrarProduto();
  
    inNome.value = ""; 
    inNome.focus();
  }
  var btProduto = document.getElementById("btProduto");
  btProduto.addEventListener("click", incluirProduto);
  
  
  function mostrarProduto() {
  
    var outProduto = document.getElementById("outProduto");

    if (!localStorage.getItem("ProdutoNome")) {
      outProduto.textContent = "";
      return;
    }
    var nomes = localStorage.getItem("ProdutoNome").split(";");
    var linhas = [""].sort(); 
 
    for (var i = 0; i < nomes.length; i++) {
        linhas += nomes[i] +" \n";
    
    }

    outProduto.textContent = " Produto Adicionados \n ------------------- \n " + linhas;
  }
 
  mostrarProduto();
  
  function limparApostas() {
    if(confirm("Confirma exclusão de todos os produtos?")){
      localStorage.removeItem("ProdutoNome")
      mostrarProduto()
    }
  }
  var btLimpar = document.getElementById("btLimpar");
  btLimpar.addEventListener("click", limparApostas);
