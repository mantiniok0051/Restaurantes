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
    var RestaurantesDetalle;
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
            // Decorador @Component, confiración del componente
            RestaurantesDetalle = (function () {
                function RestaurantesDetalle(_service, _routeParams, _router) {
                    this._service = _service;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                RestaurantesDetalle.prototype.ngOnInit = function () {
                    this.getRestaurante();
                };
                RestaurantesDetalle.prototype.getRestaurante = function () {
                    var _this = this;
                    this.id_actual = this._routeParams.get('id');
                    var id = this._routeParams.get('id');
                    this._service.getRestaurante(id)
                        .subscribe(function (response) {
                        _this.restaurante = response.data;
                        _this.status = response.status;
                        console.log('status' + response.status);
                        if (_this.status !== "success") {
                            //alert('Chales, algo salió mal :(');
                            _this._router.navigate(["/Home"]);
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert('Changos, algo salió mal :(');
                            _this._router.navigate(["/Home"]);
                        }
                    });
                };
                RestaurantesDetalle = __decorate([
                    core_1.Component({
                        selector: 'restaurantes-detalle',
                        templateUrl: 'app/view/restaurantes-detalle.html',
                        providers: [restaurante_service_1.RestauranteService]
                    }), 
                    __metadata('design:paramtypes', [restaurante_service_1.RestauranteService, router_1.RouteParams, router_1.Router])
                ], RestaurantesDetalle);
                return RestaurantesDetalle;
            }());
            exports_1("RestaurantesDetalle", RestaurantesDetalle);
        }
    }
});
//# sourceMappingURL=restaurantes-detalle.component.js.map