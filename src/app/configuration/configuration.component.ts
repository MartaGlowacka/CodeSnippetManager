import { Component, OnInit } from "@angular/core";

@Component({
  selector: "configuration",
  templateUrl: "./configuration.component.html",
  styleUrls: ["./configuration.component.scss"]
})
export class ConfigurationComponent implements OnInit {
  stepId: number = 1;

  infoText: string = "Skip";

  steps = [1, 2, 3, 4];

  constructor() {}

  ngOnInit() {}

  changeStep() {
    this.stepId++;

    if (this.stepId == 4) {
      this.infoText = "Start again";
    }
    if (this.stepId == 5) {
      this.stepId = 1;
      this.infoText = "Skip";
    }
  }
}
