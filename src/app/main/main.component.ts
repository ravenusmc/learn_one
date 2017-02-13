import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    games: string[];

  constructor() {
      this.games = ['Zelda', 'Horizon Zero Dawn', 'Halo Wars 2', 'Mass Effect']
  }

  ngOnInit() {
  }

}
