import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { AppComponent } from './app.component';
import { HomeComponent } from './src/home/home.component';
import { GantComponent } from './src/gant/gant.component';
import { TableComponent } from './components/table/table.component';
import { CalendarioComponent } from './components/calendario/calendario.component';


export const routes: Routes = [
    
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        data: {pageTitle: 'Home'},
        component: HomeComponent,
    },    
    {
        path: 'gantt',
        data: {pageTitle: 'Gantt'},
        component: GantComponent,
    },
    {
        path: 'table',
        data: {pageTitle: 'Tabla'},
        component: TableComponent,
    },
    {
        path: 'calendario',
        data: {pageTitle: 'Calendario'},
        component: CalendarioComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});