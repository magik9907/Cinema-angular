import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cinema-angular';

  items = [
    {
      label: 'Film',
      items: [
        {
          label: 'Lista',
          routerLink: '/film',
        },
        { label: 'Dodaj', routerLink: '/film/add' },
      ],
    },
    {
      label: 'Sale',
      items: [
        {
          label: 'Lista',
          routerLink: '/hall',
        },
        { label: 'Dodaj', routerLink: '/hall/add' },
      ],
    },
    {
      label: 'Seanse',

      items: [
        {
          label: 'Lista',
          routerLink: '/seans',
        },
        { label: 'Dodaj', routerLink: '/seans/add' },
      ],
    },
  ];
}
