import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
  selector: "personal",
  templateUrl: "./personal.component.html",
  styleUrls: ["./personal.component.scss"]
})
export class PersonalComponent implements OnInit, DoCheck {
  isExpanded: boolean;
  currentView: string = "home";

  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log(this.currentView);
  }
}
