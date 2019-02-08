import { HttpClient } from "@angular/common/http";
import {
  Component,
  OnInit,
  Input,
  Inject,
  Injector,
  Injectable
} from "@angular/core";
import { SnippetsService } from "src/app/services/snippets.service";
import { ClassMethod } from "@angular/compiler";

// export function instantiateMyClass(service) {
//   return function() {
//     return new TagComponent(service);
//   };
// }

@Component({
  selector: "tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"],
  providers: []
})
export class TagComponent implements OnInit {
  @Input() tagName: string;
  @Input() editMode: boolean = true;
  @Input() color: string;

  tags;

  constructor() {}

  ngOnInit() {}
}
