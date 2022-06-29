import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogHeadComponent } from './blog-head.component';
import { BlogHeadNavbarComponent } from './blog-head-navbar/blog-head-navbar.component';
import { RouterModule } from '@angular/router';
import { BlogHeadPresentationComponent } from './blog-head-presentation/blog-head-presentation.component';



@NgModule({
  declarations: [
    BlogHeadComponent,
    BlogHeadNavbarComponent,
    BlogHeadPresentationComponent
  ],
  exports: [
    BlogHeadComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BlogHeadModule { }
