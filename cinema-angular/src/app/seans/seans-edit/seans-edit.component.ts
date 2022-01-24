import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeansService } from 'src/app/service/seans/seans.service';
import { Seans } from 'src/Models/Seans';

@Component({
  selector: 'app-seans-edit',
  templateUrl: './seans-edit.component.html',
  styleUrls: ['./seans-edit.component.scss'],
})
export class SeansEditComponent implements OnInit {
  seans?: Seans;
  constructor(
    private seanService: SeansService,
    private router: ActivatedRoute,
    private navigate: Router
  ) {}

  ngOnInit(): void {
    const id: string = this.router.snapshot.paramMap.get('id') as string;
    if (id)
      this.seanService.getSeans(id).subscribe((Seans: Seans) => {
        this.seans = Seans;
      });
  }

  submit(Seans: Seans) {
    this.seanService.updateSeans(Seans).subscribe(
      (res:Seans) => {
        this.navigate.navigateByUrl('/seans/' + res.Id);
      },
      (err) => console.error(err)
    );
  }
}
