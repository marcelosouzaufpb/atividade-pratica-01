import { Component, OnInit } from '@angular/core';
import { BACKEND_URL, HOME_ROUTING, NAME_PROJECT } from '../../../shared/http.routes.consts';

@Component({
  selector: 'app-blog-head-navbar',
  templateUrl: './blog-head-navbar.component.html',
  styleUrls: ['./blog-head-navbar.component.scss']
})
export class BlogHeadNavbarComponent implements OnInit {

  routing: any[] = [
    {name: 'Blog', link: this.homeRouting},
    {name: 'Sobre', link: null},
    {name: 'Descrição', link: null},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  private get homeRouting(): string {
    return HOME_ROUTING;
  }

}
