import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HallService } from 'src/app/service/hall/hall.service';
import { Hall } from 'src/Models/Hall';

@Component({
  selector: 'app-hall-add',
  templateUrl: './hall-add.component.html',
  styleUrls: ['./hall-add.component.scss'],
})
export class HallAddComponent implements OnInit {
  constructor(private hallService: HallService, private router: Router) {}

  ngOnInit(): void {}

  submit(hall: Hall) {
    this.hallService.addHall(hall).subscribe(
      (res) => {
        this.router.navigateByUrl('/hall');
      },
      (err) => console.error(err)
    );
  }
}
