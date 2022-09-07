import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  /*From parent to child using @input decorator */
  @Input() hero: any;
  constructor() { }

  ngOnInit(): void {

    console.warn(this.hero)
 }

}
