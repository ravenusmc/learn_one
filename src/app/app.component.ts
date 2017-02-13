import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title: string;
    title2: string;

    constructor(){
        this.title = 'Angular 2';
        this.title2 = 'Practice';
    }
}
