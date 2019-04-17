import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: "menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  @ViewChild("nav") nav: ElementRef;
  @ViewChild("hamburger") hamburger: ElementRef;

  hamburgerCross: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.createAvatar();
    this.initLocalClocks();
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

  initLocalClocks() {

    let date = new Date;
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();


    let hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6)
      },
      {
        hand: 'seconds',
        angle: (seconds * 6)
      }
    ];
    // Loop through each of these hands to set their angle
    for (let j = 0; j < hands.length; j++) {
      let elements = document.querySelectorAll('.' + hands[j].hand);
      for (let k = 0; k < elements.length; k++) {

        this.renderer.setStyle(elements[k], 'transform', 'rotateZ('+ hands[j].angle +'deg)');
        this.renderer.setStyle(elements[k], 'webkitTransform', 'rotateZ('+ hands[j].angle +'deg)');


          // if (hands[j].hand === 'minutes') {
          //   this.renderer.setAttribute(elements[k].parentNode,)
          //   elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
          // }
      }
    }
  }


  createAvatar () {
    let container = document.querySelector('.avatar-container');


    let polygon = 'polygon(94% 58%, 0 100%, 100%' + this.getRandom(65, 100) + "%)";

    let polygon_3 = 'polygon(16% 80%, 100% ' + this.getRandom(0,45) + '%, 0% -15%)';

    let circle_4 = 'circle(7.7% at ' + this.getRandom(10, 90) + '% 21%)';
    let circle_5 = 'circle(7.7% at ' + this.getRandom(33, 85) + '% 94%)';
    let circle_6 = 'circle(8.1% at 14% ' + this.getRandom(15, 80) + '% 15%)';
    console.log(polygon_3)
    this.renderer.setStyle(container.children[0], 'clip-path', polygon);
    this.renderer.setStyle(container.children[2], 'clip-path', polygon_3);
    // this.renderer.setStyle(container.children[3], 'clip-path', circle_4);
    // this.renderer.setStyle(container.children[4], 'clip-path', circle_5);
    // this.renderer.setStyle(container.children[5], 'clip-path', circle_6);


    let circ_4 = 'circle(' + this.getRandom(12, 40) + '% at ' + this.getRandom(60, 100) + '% 29%)';
    let circ_5 = 'circle(' + this.getRandom(20, 52) + '% at 60% ' + this.getRandom(90, 110) + '%)';
    let circ_6 = 'circle(' + this.getRandom(10, 50) + '% at 12% 54%)';

    console.log(circ_6)

    // this.renderer.setStyle(container.children[0], 'clip-path', circ_4);
    // this.renderer.setStyle(container.children[1], 'clip-path', circ_5);
    // this.renderer.setStyle(container.children[2], 'clip-path', circ_6);

    // this.renderer.listen(container.children[0], 'mouseenter', () => {
    //   this.renderer.setStyle(container.children[0], 'clip-path', 'circle(' + this.getRandom(12, 40) + '% at 135% 29%)');
    // })

  }


  getRandom (min: number, max: number) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
}
