import { Component, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "configuration",
  templateUrl: "./configuration.component.html",
  styleUrls: ["./configuration.component.scss"]
})
export class ConfigurationComponent implements OnInit {
  stepId: number = 1;

  infoText: string = "Skip";

  steps = [1, 2, 3, 4];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.showInteger();
  }

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

  showInteger() {
    let dots = document.querySelector(".dots");
    let kids = dots.querySelectorAll(".dot");

    let time = 0;
    let index = 0;

    for (let i = 0; i < kids.length; i++) {
      setTimeout(() => {
        // kids[i].classList.remove("dot");

        this.renderer.removeClass(kids[i], "dot");
        this.renderer.addClass(kids[i], "integer");
        this.renderer.setProperty(kids[i], "innerHTML", "2");
      }, time);
      time += 800;
    }
  }
}
