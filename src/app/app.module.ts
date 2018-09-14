import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLayoutsComponent } from './src/shared/app-layouts/app-layouts.component';
import { HeaderComponent } from './src/shared/layout/header/header.component';
import { NavigationComponent } from './src/shared/layout/navigation/navigation.component';
import { HomeComponent } from './src/home/home.component';
import { routing } from './app.routing';
import { GantComponent } from './src/gant/gant.component';
import * as Sample from 'angular4-gantt';
import { GanttModule } from './components/gantt/gantt.module';
import { TableComponent } from './components/table/table.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { GanttDhtmlxModule } from './components/gantt-dhtmlx/gantt-dhtmlx.module';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutsComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    GantComponent,
    TableComponent,
    CalendarioComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    GanttModule,
    GanttDhtmlxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
