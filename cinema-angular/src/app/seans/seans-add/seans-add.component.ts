import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeansService } from 'src/app/service/seans/seans.service';
import { Seans } from 'src/Models/Seans';

@Component({
  selector: 'app-seans-add',
  templateUrl: './seans-add.component.html',
  styleUrls: ['./seans-add.component.scss']
})
export class SeansAddComponent implements OnInit {

  constructor(private seansService: SeansService, private router: Router) {}

  ngOnInit(): void {}

  submit(seans: Seans) {
    this.seansService.addSeans(seans).subscribe(
      (res:Seans) => {
        this.router.navigateByUrl('/seans');
      },
      (err) => console.error(err)
    );
  }

}
