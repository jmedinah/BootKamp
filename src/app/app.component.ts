import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Jhon Alejandro Medina';
  count = 0;
  isdisable = false;

  imgSource = 'https://www.facevertizing.com/wp-content/uploads/2016/05/Nailed-It-Baby-Meme-06.jpg';

  add() {
    this.count += 1;
    this.isdisable = !this.isdisable;
  }
}
