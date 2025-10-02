let caracteristicas: string[] = ['Lindo', 'Wapo'];

interface PersonaInterface {
    nombre: string,
    edad?: number,
    caracteristicas?: string[]
}

const persona: PersonaInterface = {
    nombre: 'Esneyder',
    edad: 24,
    caracteristicas: caracteristicas
}

console.log(persona);

export {};