import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[clickOutside]"
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output("clickOutside") clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener("click", ["$event.currentTarget"])
  onMouseEnter(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(
      targetElement
    );
    if (!clickedInside) {
      this.clickOutside.emit("null");
    }
  }
}
