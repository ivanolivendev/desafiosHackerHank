const valores = [100, 500, 100, 200]
let soma = 0
let maior = valores[0];

if (valores.length < 5) {
    for (let num of valores) {

        soma = soma + num;
    }
}
else {

    for (let numero of valores) {
        if (numero > maior) {
            maior = numero;
        }
    }
}

console.log(soma);

// if(valores.length<5){
//     for (let x of valores){
//         soma+=x
//     }else{

//     }

// }
// console.log(soma);

// for (let numero of valores) { }

// console.log(maior)

