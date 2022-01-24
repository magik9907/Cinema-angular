import { Component, OnInit } from '@angular/core';
import { HallService } from 'src/app/service/hall/hall.service';
import { Hall } from 'src/Models/Hall';

@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.scss'],
})
export class HallListComponent implements OnInit {
  halls: Hall[] = [];

  constructor(private hallService: HallService) {}

  ngOnInit(): void {
    this.hallService.getHalls().subscribe(
      (halls: Hall[]) => {
        this.halls = halls;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
