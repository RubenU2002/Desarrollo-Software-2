import type { Comida } from './comida';
import { ComidaService } from './comida-service';

export class NotificadorComida {
  declare private readonly service: ComidaService;

  constructor(service: ComidaService) {
    this.service = service;
  }

  notificar(comida: Comida): void {
    console.log('Notificando comida...');
    this.service.mostrarInfo(comida);
    console.log('');
  }
}
