export class Persona {
    constructor(
        public nombre: string,
        public direccion: string = 'Sin Direccion'
    ) {}
}

const persona: Persona = new Persona('Johan');

console.log(persona)

export class Trabajador extends Persona{
    constructor(
        public nombre: string,
        public cargo: string,
        public empresa: string,
        public direccionTrabajo: string
    ) {
        super(nombre)
    }
}

const trabajador: Trabajador =  new Trabajador('Jack', 'Lead', 'GBS', 'Conecta');

console.log(trabajador)