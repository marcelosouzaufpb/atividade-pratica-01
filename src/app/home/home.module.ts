import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  // {
  //   path: NAME_PROJECT,
  //   children: [
  //     {
  //       path: '',
  //       component: HomeComponent,
  //       children: [
  //         {path: '', redirectTo: `${HOME_ROUTING}`, pathMatch: FULL},
  //         {
  //           path: HOME_ROUTING,
  //           loadChildren: () => import('./home.module').then(m => m.HomeModule),
  //           data: {}
  //         },
  //       ]
  //     }
  //   ]
  // },
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
