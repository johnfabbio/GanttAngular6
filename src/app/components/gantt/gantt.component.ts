import {Component, ViewChild, AfterViewInit} from "@angular/core";
import {DayPilot, DayPilotGanttComponent} from "daypilot-pro-angular";
import {DataService} from "./data.service";{}

@Component({
  selector: 'gantt-component',
  template: `<daypilot-gantt [config]="config" #gantt></daypilot-gantt>`,
  styles: [``]
})
export class GanttComponent implements AfterViewInit {

  @ViewChild("gantt")
  gantt: DayPilotGanttComponent;

  config: any = {
    cellWidthSpec: "Fixed",
    cellWidth: 40,
    timeHeaders: [{"groupBy":"Month"},{"groupBy":"Day","format":"d"}],
    scale: "Day",
    days: DayPilot.Date.today().daysInMonth(),
    startDate: DayPilot.Date.today().firstDayOfMonth(),
    taskHeight: 30,
    rowHeaderHideIconEnabled: false,
    rowMoveHandling: "Update",
    onRowMoved: function (args) {
      this.message("La fila a sido movida.");
    },
    taskMoveHandling: "Update",
    onTaskMoved: function (args) {
      this.message("La tarea a sido movida.");
    },
    linkCreateHandling: "Update",
    onLinkCreated: function (args) {
      this.message("El link ha sido creado.");
    },
    rowCreateHandling: "Enabled",
    onRowCreate: function (args) {
      this.tasks.add(new DayPilot.Task({
        id: DayPilot.guid(),
        text: args.text,
        start: new DayPilot.Date().getDatePart(),
        end: new DayPilot.Date().getDatePart().addDays(1)
      }));
    },
  };

  constructor(private ds: DataService) {
  }

  ngAfterViewInit(): void {
    this.ds.getTasks().subscribe(result => this.config.tasks = result);
    this.ds.getLinks().subscribe(result => this.config.links = result);
  }

}

