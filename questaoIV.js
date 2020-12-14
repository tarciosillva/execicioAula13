function mConv(){
    document.getElementById('conv').style.display = "block"
  }
  
  function sConv(){
    document.getElementById('conv').style.display = "none"
    document.getElementById('conv').value = 'none'
  }
  
  function getRadioValor(name){
    var rd = document.getElementsByName(name);
    
    for(var i = 0; i < rd.length; i++){
     if(rd[i].checked){ 
      return rd[i].value;
     }
    
    }
    
    return null;
   }
  
  function calcularDesconto(){
    let valor = document.getElementById('inValor').value
    let selectConvenio = document.getElementById('sel1').value
    let desconto = 0
    let newValor = 0
  
    if(valor == '' || isNaN(valor)){
        alert("Digite um valor válido!")
    }
    else if(selectConvenio == "amg"){
        desconto = 0.2 * valor
        newValor = valor - desconto
        document.getElementById('resultado').innerHTML = "<h3>Desconto R$: " + desconto.toFixed(2) + "<br>A pagar R$: " + newValor.toFixed(2) + "</h3>"
    }
    else if(selectConvenio == "saude"){
        desconto = 0.5 * valor
        newValor = valor - desconto
        document.getElementById('resultado').innerHTML = "<h3>Desconto R$: " + desconto.toFixed(2) + "<br>A pagar R$: " + newValor.toFixed(2) + "</h3>"
    }
    else if(selectConvenio == "none"){
        desconto = 0.1 * valor
        newValor = valor - desconto
        document.getElementById('resultado').innerHTML = "<h3>Desconto R$: " + desconto.toFixed(2) + "<br>A pagar R$: " + newValor.toFixed(2) + "</h3>"
    }
  
  }
  
    document.getElementById('conv').style.display = "none"