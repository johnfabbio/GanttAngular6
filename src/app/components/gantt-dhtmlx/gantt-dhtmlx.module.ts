import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttDhtmlxComponent } from './gantt-dhtmlx/gantt-dhtmlx.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GanttDhtmlxComponent],
  exports: [GanttDhtmlxComponent]

})
export class GanttDhtmlxModule { }
