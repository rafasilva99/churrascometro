//Carne - 400 gr por pessoa + de 6 horas - 650
//Cerveja - 1200 ml por pessoa + 6 horas - 2000ml
//Refrigerante/agua - 1000ml por pessoa + de 6 horas - 1500ml

//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");



 let resultado = document.getElementById("resultado");

 function calcular(){
     console.log("Calculando...")

     let adultos = inputAdultos.value;
     let criancas = inputCriancas.value;    
     let duracao = inputDuracao.value;
     let carne = carnePP(duracao);
     let cerveja = cervejaPP(duracao);
     let bebidas = bebidasPP(duracao);

     let qndtTotalCarne = carne * adultos + (carne/2 * criancas);
     let qndtTotalCerveja = cerveja * adultos;
     let qndtTotalBebidas = bebidas * adultos + (bebidas/2 * criancas);

    resultado.innerHTML = `<p>${qndtTotalCarne/1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qndtTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qndtTotalBebidas/2000)} Pet's 2L de Bebidas</p>`

     
 }

 function carnePP(duracao){
    let carne = 400;

    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
 }

 function cervejaPP(duracao){
    let cerveja = 1200;

    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
 }

 function bebidasPP(duracao){
    let bebida = 1000;

    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
 }