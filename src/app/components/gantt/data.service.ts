import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DayPilot} from "daypilot-pro-angular";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {

  tasks: any[] = [
    {
      id: 1,
      text: "Group 1",
      complete: 35,
      children: [
        {
          id: 2,
          start: this.firstOfMonth().addDays(3),
          end: this.firstOfMonth().addDays(10),
          text: "Task 1",
          complete: 60
        },
        {
          id: 3,
          start: this.firstOfMonth().addDays(10),
          end: this.firstOfMonth().addDays(15),
          text: "Task 2",
          complete: 0
        },
        {
          id: 4,
          start: this.firstOfMonth().addDays(15),
          type: "Milestone",
          text: "Milestone 1"
        }
      ]
    },
  ];

  links: any[] = [
    { from: 2, to: 3, type: "FinishToStart"}
  ];

  firstOfMonth(): DayPilot.Date {
    return DayPilot.Date.today().firstDayOfMonth();
  }

  constructor(private http : HttpClient){
  }

  getTasks(): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.tasks);
      }, 200);
    });

    // return this.http.get("/api/tasks");
  }

  getLinks(): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.links);
      }, 200);
    });
  }
}
