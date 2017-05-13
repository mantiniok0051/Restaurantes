// Importar el núcleo de Angular
import  {Component, OnInit} from 'angular2/core';
//Importar libreria estandar para enrutamiento
import {Router, RouteParams} from 'angular2/router';
//Componente estructural
import {RestauranteService} from '../services/restaurante.service';
//Importar componente local Restaurante
import {Restaurante} from '../model/restaurante';

// Decorador @Component, confiración del componente
@Component ({
	selector: 'restaurantes-detalle',
	templateUrl: 'app/view/restaurantes-detalle.html',
	providers: [RestauranteService]
})


// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesDetalle implements OnInit{
	private id_actual:string;
	private restaurante:Restaurante[];
	private status:string;
	private errorMessage:string;

	constructor(
			private _service: RestauranteService,
			private _routeParams: RouteParams,
			private _router: Router
		){}

	ngOnInit(){
		this.getRestaurante();
	}
	getRestaurante(){
		this.id_actual = this._routeParams.get('id');
		let id= this._routeParams.get('id');
		this._service.getRestaurante(id)
			.subscribe(
					response => {
						this.restaurante = response.data;
						this.status = response.status;
						console.log('status'+response.status);
						
						if(this.status !== "success") {
							alert('Chales, algo salió mal :(');
							this._router.navigate(["/Home"]);							
						}
					},
					error => {
						this.errorMessage = <any>error;
						if(this.errorMessage !== null) {
							console.log(this.errorMessage);
							alert('Changos, algo salió mal :(');
							this._router.navigate(["/Home"]);
						}
					}
				);
	}
}