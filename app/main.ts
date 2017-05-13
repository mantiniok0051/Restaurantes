//Este fichero se hace cargo de inicializar y lanzar el framework al cargar la página:
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';

bootstrap(AppComponent,[ROUTER_PROVIDERS, HTTP_PROVIDERS]);