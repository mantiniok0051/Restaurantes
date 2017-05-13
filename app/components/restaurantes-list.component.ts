// Importar el núcleo de Angular
import  {Component, OnInit} from 'angular2/core';
//Importar libreria estandar para enrutamiento
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
//Importar servicio local
import {RestauranteService} from '../services/restaurante.service';
//Importar componente local Restaurante
import {Restaurante} from '../model/restaurante';


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component ({
	selector: 'restaurantes-list',
	templateUrl: 'app/view/restaurantes-list.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [RestauranteService]
})


// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesList implements OnInit{
	private titulo:string = 'Listado de Restaurantes';
	private restaurantes:Restaurante[]; 
	private status:string;
	private errorMessage;

	constructor(private _service:RestauranteService){}

	public getTitulo():string{
		let titulo = this.titulo;
		return titulo;}

	public ngOnInit():any{
		this.getRestaurantes();	
		console.log("Componente restaurantes-list cargado");
		}
	getRestaurantes(){
		let box_restaurantes = <HTMLElement>document.querySelector('#restaurantes-list .loading-list');
		box_restaurantes.style.visibility = 'visible';
		this._service.getRestaurantes()
		.subscribe(
				result => {
					this.restaurantes = result.data;
					this.status = result.status;

					if(this.status !== 'success') {
						alert('Ooops algo salió mal :(');
					}
					box_restaurantes.style.display = 'none';
				},
				error => {
						this.errorMessage = <any>error;
						if(this.errorMessage !== null) {
							console.log(this.errorMessage);
							alert('Diantres, algo salió mal :(');
						}
				}
			);
	}
	public logRestaurantes(){
		for (var i = this.restaurantes.length - 1; i >= 0; i--) {
			console.log(this.restaurantes[i].nombre);
			
		}
	}
}