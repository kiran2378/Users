import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scoreBoard';


  /* parent to child*/
  data= {
    name: 'karthik',
    age: '35',
    email: 'karthik12@gmail.com',
    salary: '30000'
  }

  /*child to parent using event emitter or ViewChild decorator */
  parentFunction(data: any)
  {
    console.warn(data)
  }
}
