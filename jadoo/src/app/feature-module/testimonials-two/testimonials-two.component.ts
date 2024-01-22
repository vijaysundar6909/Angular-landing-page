import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testimonials-two',
  templateUrl: './testimonials-two.component.html',
  styleUrls: ['./testimonials-two.component.css']
})
export class TestimonialsTwoComponent {


  customOptions: OwlOptions = {
    items: 6,
    margin: 30,
    dots: false,
    nav: false,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    loop: true,
    responsive: {
      0: {
        items: 1
      },

      550: {
        items: 3
      },
      700: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 5
      }
    },
  };

  brandslide = [
    {
      img: "assets/img/image-8.png"
    },
    {
      img: "assets/img/image-9.png"
    },
    {
      img: "assets/img/image-10.png"
    },
    {
      img: "assets/img/image-11.png"
    },
    {
      img: "assets/img/image-12.png"
    },
    {
      img: "assets/img/image-10.png"
    },
  ]
}
