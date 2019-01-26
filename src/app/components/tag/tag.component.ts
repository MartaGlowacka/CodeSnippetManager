import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"]
})
export class TagComponent implements OnInit {
  @Input() tagName: string;
  @Input() editMode: boolean = true;
  @Input() color: string;

  constructor() {}

  ngOnInit() {}
}
