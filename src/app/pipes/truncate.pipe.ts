import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncate"
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, limit: number): any {
    return value.slice(0, limit) + "..";
  }
}
