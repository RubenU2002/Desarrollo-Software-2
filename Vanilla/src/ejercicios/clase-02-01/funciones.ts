import {  type cuadrado, type triangulo} from './interfaces'

export function calcularAreaCuadrado(cuadrado: cuadrado): number {
    return cuadrado.lado1 * cuadrado.lado2;
}

export function datosCuadrado(cuadrado: cuadrado): string {
    return `Datos del cuadrado -> lado 1: ${cuadrado.lado1} y lado 2: ${cuadrado.lado2}`;
}

export function calcularAreaTriangulo(triangulo: triangulo): number {
    return triangulo.base * triangulo.altura;
}

export function datosTriangulo(triangulo: triangulo): string {
    return `Datos del triangulo -> base: ${triangulo.base} y altura: ${triangulo.altura}`;
}