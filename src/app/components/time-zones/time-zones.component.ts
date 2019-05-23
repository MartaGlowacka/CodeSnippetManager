import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-zones',
  templateUrl: './time-zones.component.html',
  styleUrls: ['./time-zones.component.scss']
})
export class TimeZonesComponent implements OnInit {

  timeZones = []

  isHover: boolean = true;

  constructor() { }

  ngOnInit() {

    for(let i=0; i<=599; i++) {
      this.timeZones.push('TimeZ/Aaa0'+ i)
    }


    console.log(this.timeZones)
  }

}
