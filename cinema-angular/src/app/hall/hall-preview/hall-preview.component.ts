import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HallService } from 'src/app/service/hall/hall.service';
import { Hall } from 'src/Models/Hall';

@Component({
  selector: 'app-hall-preview',
  templateUrl: './hall-preview.component.html',
  styleUrls: ['./hall-preview.component.scss'],
})
export class HallPreviewComponent implements OnInit {
  hall?: Hall;

  constructor(
    private hallService: HallService,
    private router: ActivatedRoute,
    private navigate: Router
  ) {}

  ngOnInit(): void {
    const id: string = this.router.snapshot.paramMap.get('id') as string;
    this.hallService.getHall(id).subscribe(
      (hall: Hall) => {
        this.hall = hall;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  delete() {
    this.hallService.deleteHall(this.hall?.Id as string).subscribe(
      (res) => {
        this.navigate.navigateByUrl('/hall');
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
