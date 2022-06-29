import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-head-presentation',
  templateUrl: './blog-head-presentation.component.html',
  styleUrls: ['./blog-head-presentation.component.scss']
})
export class BlogHeadPresentationComponent implements OnInit {

  imgDogPath: string = 'assets/img/dog.PNG';

  constructor() { }

  ngOnInit(): void {
  }

}
