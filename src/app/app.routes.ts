import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
    AboutComponent,
    PortafolioComponent,
    ProductoComponent,
    SearchComponent
} from "./components/index.paginas";

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];


export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
