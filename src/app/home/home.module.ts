import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FULL, HOME_ROUTING, NAME_PROJECT } from '../shared/http.routes.consts';

export const routes: Routes = [
  {path: '', redirectTo: `${NAME_PROJECT}`, pathMatch: FULL},
  {
    path: NAME_PROJECT,
    children: [
      {
        path: '',
        children: [
          {path: '', redirectTo: `${HOME_ROUTING}`, pathMatch: FULL},
          {
            path: HOME_ROUTING,
            component: HomeComponent,
            data: {}
          },
        ]
      }
    ]
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {
}
