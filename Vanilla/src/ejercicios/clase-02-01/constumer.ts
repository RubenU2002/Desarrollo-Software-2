import {calcularAreaCuadrado, datosCuadrado} from './funciones'
import {  type cuadrado, type triangulo} from './interfaces'

const cuadrado1: cuadrado = {
    lado1: 5,
    lado2: 7
}

console.log(datosCuadrado(cuadrado1))
console.log(`Area: ${calcularAreaCuadrado(cuadrado1)}`)

export {};