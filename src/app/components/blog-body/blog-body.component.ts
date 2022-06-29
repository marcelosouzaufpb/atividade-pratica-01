import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-body',
  templateUrl: './blog-body.component.html',
  styleUrls: ['./blog-body.component.scss']
})
export class BlogBodyComponent implements OnInit {

  tips: any[] = [
    {
      title: '5 deicas para sua carreia profissional',
      description: 'Confira algumas que podem ajudar a alavancar sua carreira com um desenvolvedor front-edn'
    },
    {
      title: '5 deicas para sua carreia profissional',
      description: 'Confira algumas que podem ajudar a alavancar sua carreira com um desenvolvedor front-edn'
    },
    {
      title: '5 deicas para sua carreia profissional',
      description: 'Confira algumas que podem ajudar a alavancar sua carreira com um desenvolvedor front-edn'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
