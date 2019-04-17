import { Component, OnInit } from '@angular/core';
import { DataService } from '../../API/home.service';

import { OwlCarousel } from 'ngx-owl-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  users: Object;





  mySlideImages = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => `https://picsum.photos/640/480?image=${i}`);
mySlideOptions = { responsive:
  {
    320: { items: 1, dots: true },
    600: { items: 3, dots: false, nav: true },
    980: { items: 4,
     nav: true,
     dots: true,
     margin: 5
     //  loop: true,
    //  navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
      }
}};





  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users);
      }
    );
  }

  firstClick() {
    this.h1Style =! this.h1Style;
  }

  // secondClick() {
  //   this.data.getUsers(); // service click
  // }

}
