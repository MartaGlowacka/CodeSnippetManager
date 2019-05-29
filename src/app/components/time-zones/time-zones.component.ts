import { Component, OnInit, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'time-zones',
  templateUrl: './time-zones.component.html',
  styleUrls: ['./time-zones.component.scss']
})
export class TimeZonesComponent implements OnInit {

  timeZones = ['Api Token',  'Time Zones', 'Manager', 'Data Base', 'Skills', 'Employment Fields', 'Admins', 'Notes']

  isHover: boolean = true;


@HostListener('mouseenter',  ['$event'])
onmouseover(event) {


  let container = document.querySelector('.menu-container')
  let ul = document.querySelector('.menu-list')
  let li = document.querySelectorAll('li.menu-element')
  let rect = ul.getBoundingClientRect();
  let marginLeft = window.getComputedStyle(ul).getPropertyValue('margin-left')
  console.log(marginLeft)
  let slicedmargin = Number(marginLeft.substring(0, marginLeft.length - 2))


  let pageX = event.screenX
  let innerWidth = window.innerWidth;
  let centerPoint = innerWidth/2
  let outOfVieport = rect.width - innerWidth

this.renderer.listen(ul, 'mouseout', () => {
    // this.renderer.setStyle(ul, 'margin-left', 'initial')
 })

// var diff = innerWidth- rect.width;
  // diff *= (pageX) / rect.width;//10margin of parent




//  let diff = pageX - centerPoint + (outOfVieport - slicedmargin)
 let firstVal = (pageX-centerPoint)*100/centerPoint

 let secVal = outOfVieport + slicedmargin;
 console.log('out',outOfVieport)
 console.log('iiner', window.innerWidth)
 console.log(slicedmargin)
 console.log('to co schowane po prawej', secVal)

 let result = firstVal * secVal/100

 console.log(result)

let diff = 0
let allWidth = 0;


 this.renderer.listen(ul, 'mouseover', () => {

this.renderer.setStyle(ul, 'margin-left',   '-' + result + 'px')
})


}


  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

}
