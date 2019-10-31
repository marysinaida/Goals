import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:Goal [] = [
    new Goal(1, 'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2030,3,14)),
    new Goal(2, 'Buy cookies','i have buy cookies for parrot',new Date(2018,4,15)),
    new Goal(3,'Get new phone case','Diana has her birthday coming up',new Date(2015,3,4)),
    new Goal(4,'Get dog food','pupper likes expensive snacks',new Date(2000,8,7)),
    new Goal(5, 'Solve math home work','Damn math',new Date(2020,7,7)),
   new Goal(6,'Plot my world domination plan','Cause I am evil overlord',new Date(2012,6,5)),
  ];
}