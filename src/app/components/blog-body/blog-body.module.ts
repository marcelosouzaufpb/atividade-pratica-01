import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogBodyComponent } from './blog-body.component';


@NgModule({
  declarations: [
    BlogBodyComponent
  ],
  exports: [
    BlogBodyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogBodyModule {
}
