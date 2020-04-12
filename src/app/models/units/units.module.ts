import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Unit {


  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  created_in: string;
  cost: [];
  build_time: number;
  reload_time: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  range: number;
  attack: number;
  armor: string;
  attack_bonus: [];
  armor_bonus: [] ;

}


