System.register(['angular2/core', 'angular2/router', '../services/restaurante.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, restaurante_service_1;
    var RestaurantesList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurante_service_1_1) {
                restaurante_service_1 = restaurante_service_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            RestaurantesList = (function () {
                function RestaurantesList(_service) {
                    this._service = _service;
                    this.titulo = 'Listado de Restaurantes';
                }
                RestaurantesList.prototype.getTitulo = function () {
                    var titulo = this.titulo;
                    return titulo;
                };
                RestaurantesList.prototype.ngOnInit = function () {
                    this.getRestaurantes();
                    console.log("Componente restaurantes-list cargado");
                };
                RestaurantesList.prototype.getRestaurantes = function () {
                    var _this = this;
                    var box_restaurantes = document.querySelector('#restaurantes-list .loading-list');
                    box_restaurantes.style.visibility = 'visible';
                    this._service.getRestaurantes()
                        .subscribe(function (result) {
                        _this.restaurantes = result.data;
                        _this.status = result.status;
                        if (_this.status !== 'success') {
                            alert('Ooops algo salió mal :(');
                        }
                        box_restaurantes.style.display = 'none';
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert('Diantres, algo salió mal :(');
                        }
                    });
                };
                RestaurantesList.prototype.logRestaurantes = function () {
                    for (var i = this.restaurantes.length - 1; i >= 0; i--) {
                        console.log(this.restaurantes[i].nombre);
                    }
                };
                RestaurantesList = __decorate([
                    core_1.Component({
                        selector: 'restaurantes-list',
                        templateUrl: 'app/view/restaurantes-list.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [restaurante_service_1.RestauranteService]
                    }), 
                    __metadata('design:paramtypes', [restaurante_service_1.RestauranteService])
                ], RestaurantesList);
                return RestaurantesList;
            }());
            exports_1("RestaurantesList", RestaurantesList);
        }
    }
});
//# sourceMappingURL=restaurantes-list.component.js.map