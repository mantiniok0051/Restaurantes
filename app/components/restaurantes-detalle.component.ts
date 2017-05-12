// Importar el núcleo de Angular
import  {Component, OnInit} from 'angular2/core';
//Importar libreria estandar para enrutamiento
import {RouteParams} from 'angular2/router';
//Componente estructural
import {RestauranteService} from '../services/restaurante.service';
//Importar componente local Restaurante
import {Restaurante} from '../model/restaurante';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component ({
	selector: 'restaurantes-detalle',
	templateUrl: 'app/view/restaurantes-detalle.html',
	directives: [
					RestauranteService
				]
})


// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesDetalle{}