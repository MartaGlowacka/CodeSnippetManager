import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewChecked
} from "@angular/core";

@Component({
  selector: "menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit, AfterViewChecked {
  @ViewChild("nav") nav: ElementRef;
  @ViewChild("hamburger") hamburger: ElementRef;

  hamburgerCross: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    console.log(this.nav);

    if (this.hamburgerCross == true) {
      this.renderer.setStyle(this.nav.nativeElement, "visibility", "visible");
    }

    console.log(this.hamburger.nativeElement);
  }

  toggleNav() {
    if (this.hamburgerCross == true) {
      this.renderer.setStyle(this.nav.nativeElement, "visibility", "visible");
      this.renderer.addClass(this.nav.nativeElement, "fade-in-top");
    } else {
      this.renderer.setStyle(this.nav.nativeElement, "visibility", "hidden");
      this.renderer.removeClass(this.nav.nativeElement, "fade-in-top");
    }
  }
}
