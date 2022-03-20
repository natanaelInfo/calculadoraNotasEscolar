//formas de selecionar elementos no form
//document.forms; lista todos os formúlarios
//também podemos utilizar o query selector <--seleciona o form , calc.elements.nomedoelemento;
//document.forms.calc; <---seleciona o form que tem o name='calc'
//document.forms.elements;retorna os elementos
//document.forms[0].elements[0].value;<--seleciona o form 0 e o elemento 0 do form 
//com 




//botão selecionado
let btnMedia = document.forms[0].querySelector('#calcularMedia');

btnMedia.addEventListener('click',function(event){
    event.preventDefault();

    let form0 = document.forms[0];

    let nota1 =  parseFloat(form0.elements[0].value);

    let nota2 =  parseFloat(form0.elements[1].value);

    let nota3 =  parseFloat(form0.elements[2].value);

    let nota4 =  parseFloat(form0.elements[3].value)

    let somaNotas = (nota1 + nota2 +nota3 + nota4)/4;

    

    if(somaNotas >=7){
      let mudarCor =   form0.querySelector("#motrarNotas");

      mudarCor.style.background = 'yellow';
      mudarCor.innerHTML =('Aprovado :'+somaNotas);
      
     // form0.querySelector("#motrarNotas").innerHTML =('Aprovado :'+somaNotas);
    }else{
        mudarCor.style.background = 'red';
        mudarCor.innerHTML =('Reprovado :'+somaNotas);
    }
    
   
   
    
});