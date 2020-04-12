import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.scss']
})
export class CivilizationsComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getCivilizations().subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }

}
