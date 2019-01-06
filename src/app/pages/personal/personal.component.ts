import { Component, OnInit } from "@angular/core";

@Component({
  selector: "personal",
  templateUrl: "./personal.component.html",
  styleUrls: ["./personal.component.scss"]
})
export class PersonalComponent implements OnInit {
  public description =
    "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.";

  constructor() {}

  ngOnInit() {}
}
