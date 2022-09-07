import { Component, EventEmitter, OnInit, Output } from '@angular/core';
/* EventEmitter help us to call parent function from the child */

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

   @Output() parentFunction:EventEmitter<any>=new EventEmitter

  constructor() { }

  ngOnInit(): void {

  }

  sendData()
  {
    let data= {
      name: "sunilkumar",
      gender: "male",
      age: "26",
      place: "bengaluru"
    }
     this.parentFunction.emit(data)
  }

}
