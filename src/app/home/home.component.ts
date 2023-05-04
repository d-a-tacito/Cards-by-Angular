import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cards =[
    {
      id:1,
      image: "iphone.png",
      description: "This is Iphone 14 Pro Max"
    },
    {
      id:2,
      image: "oneplus.jpg",
      description: "This is Oneplus 11 Pro"
    },
    {
      id:3,
      image: "samsung.jpg",
      description: "This is Samsung Galaxy S23 Ultra"
    }
  ];
}
