import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  photoCover: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NNEJ33G38KYccnGvalx81zL8bY2iKyBvHi-1I4lZYYEdeaIf2hOOcxPAAM-4xbF8Lf0&usqp=CAU';
  cardTitle: string = 'Nova serie anunciada';
  constructor() {}

  ngOnInit(): void {}
}
