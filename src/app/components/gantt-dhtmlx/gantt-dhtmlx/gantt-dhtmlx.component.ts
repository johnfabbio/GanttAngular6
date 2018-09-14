import { Component, OnInit, Input } from '@angular/core';
import { task } from './data';

declare var $: any;

declare var demo_tasks:any;

declare var gantt:any;


@Component({
  selector: 'gantt-dhtmlx',
  templateUrl: './gantt-dhtmlx.component.html'
})
export class GanttDhtmlxComponent implements OnInit {

  @Input() id : String = 'mygantt';

  @Input() data:any = [];

  @Input() options:any = {};



  constructor() { }

  ngOnInit() {
      this.init();
      this.data = task;
      this.render();
  }

  init() {  
    $('#'+this.id).dhx_gantt(this.options);
  }

  render()
  {
    $('#'+this.id).dhx_gantt().parse(this.data);
  }

}
