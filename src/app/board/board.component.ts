import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

}
