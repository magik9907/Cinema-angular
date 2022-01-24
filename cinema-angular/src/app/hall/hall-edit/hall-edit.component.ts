import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HallService } from 'src/app/service/hall/hall.service';
import { Hall } from 'src/Models/Hall';

@Component({
  selector: 'app-hall-edit',
  templateUrl: './hall-edit.component.html',
  styleUrls: ['./hall-edit.component.scss'],
})
export class HallEditComponent implements OnInit {
  hall?: Hall;
  constructor(
    private hallService: HallService,
    private router: ActivatedRoute,
    private navigate: Router
  ) {}

  ngOnInit(): void {
    const id: string = this.router.snapshot.paramMap.get('id') as string;
    if (id)
      this.hallService.getHall(id).subscribe((hall: Hall) => {
        this.hall = hall;
      });
  }

  submit(hall: Hall) {
    this.hallService.updateHall(hall).subscribe(
      (res) => {
        this.navigate.navigateByUrl('/hall/' + res.Id);
      },
      (err) => console.error(err)
    );
  }
}
