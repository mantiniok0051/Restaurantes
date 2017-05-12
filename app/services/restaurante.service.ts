//Importar modulo Injectable desde Angular 2
import {Injectable} from 'angular2/core';
//Importar funcionalidades HTTP para manejar peticiones y respuestas
import {Http, Response} from 'angular2/http';
//Importar mapper para manejar peticines AJAX
import "rxjs/add/operator/map";
//Importar modilos para reaccionar a eventos
import {Observable} from "rxjs/Observable";
//Importar componente local Restaurante
import {Restaurante} from '../model/restaurante';


@Injectable()
export class RestauranteService{

	constructor(private _http:Http){}

	getRestaurantes(){
		return this._http.get('http://slim.api.local:2121/restaurantes-api.php/restaurantes')
			   .map(res => res.json());
	}
}
