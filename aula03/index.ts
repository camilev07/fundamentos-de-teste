import { validar } from '../framework-teste'

// O máximo de parcelas é 12x,
// se for de 1x tem desconto de 5%,
// de 2x a 6x não tem juros, 
// de 7x a 12x tem juros de 2% ao mês,
// o mínimo de uma parcela deve ser de 20 reais

let valorCompra = 250
const maxParcelas = 12
let parcelas = 5
let valorParcelas = 50


function validarQuantidadeDeParcela(parcelas:number, maxParcelas:number){
    if (parcelas > maxParcelas){
        console.error("Número de parcelas inválida");
    }
    return "Parcelamento inválido"

}

function validarValorDaParcela(valorParcelas: number){
    if(valorParcelas < 20 ){
        console.error("Valor de parcelas inválida");
    }
    return "Parcelas inválidas"
}

function aplicarDescontoAVista(valorCompra: number, parcelas: number){
    if (parcelas == 1){
        let valorComDescontoAVista = valorCompra * 0.95
    }
}




