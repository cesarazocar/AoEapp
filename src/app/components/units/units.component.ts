import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Unit } from '../../models/units/units.module'
import { equalSegments } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {


  units: Unit[] = [];
  unit: Unit;
  manorwoman;
  dataSource: any;
  // displayedColumns: string[] = [
  //   'name',
  //   'expansion',
  //   'Agent',
  //   'cost',
  //   'build_time',
  //   'hit_points',
  //   'line_of_sight',
  //   'armor',
  //   'special'
  // ];
  constructor(private gameService: GameService) {
    let random = Math.random();
    if (random < 0.5)
      this.manorwoman = 'm'
    else
      this.manorwoman = 'w'


  }

  ngOnInit() {
    this.gameService.getUnits().subscribe(
      res => {
        let receivedData;
        console.log('res', res)
        receivedData = res['units'];
        receivedData.forEach(element => {

          this.unit = new Unit();
          this.unit.name = element['name'];
          this.unit.description = element['description'];
          this.unit.expansion = element['expansion'];
          this.unit.age = element['age'];
          this.unit.cost = element['cost'];
          this.unit.build_time = element['build_time'];
          this.unit.reload_time = element['reload_time'];

          this.unit.movement_rate = element['movement_rate'];
          this.unit.line_of_sight = element['line_of_sight'];
          this.unit.hit_points = element['hit_points'];
          this.unit.range = element['range'];
          this.unit.attack = element['attack'];
          this.unit.armor = element['armor'];
          this.unit.attack_bonus = element['attack_bonus'];
          this.unit.armor_bonus = element['armor_bonus'];

          this.unit.image = this.unit.name.toLowerCase() == 'villager' ? `url('/assets/img/units/${this.unit.name.toLowerCase() + this.manorwoman}.png')` :
            `url('/assets/img/units/${this.unit.name.toLowerCase().replace('(', '').replace(')', '')}.png')`;




          this.units.push(this.unit);
        });

      },
      err => console.error(err)
    );
  }


}
