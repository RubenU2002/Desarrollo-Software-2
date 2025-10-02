import { ComidaService } from './comida-service';
import { NotificadorComida } from './notificador-comida';
import type { Comida } from './comida';

  const pizza: Comida = { nombre: 'Pizza', calorias: 800, esVegana: false };
  const ensalada: Comida = { nombre: 'Ensalada', calorias: 150, esVegana: true };
  const hamburguesa: Comida = { nombre: 'Hamburguesa', calorias: 600, esVegana: false };

  const service = new ComidaService();
  const notificador = new NotificadorComida(service);

  notificador.notificar(pizza);
  notificador.notificar(ensalada);
  notificador.notificar(hamburguesa);

  const pizzaModificada = service.modificarCalorias(pizza, 500);
  notificador.notificar(pizzaModificada);
