import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarduidComponent } from './carduid/carduid.component';
import { ChartuidComponent } from './chartuid/chartuid.component';
import { TableuidComponent } from './tableuid/tableuid.component';

const routes: Routes = [
  {
    path: ':lang',
    children: [
      { path: '', redirectTo: 'cards', pathMatch: 'full' },
      { path: 'cards', component: CarduidComponent },
      { path: 'charts', component: ChartuidComponent },
      { path: 'tables', component: TableuidComponent },
    ]
  },
  // Redirect base path to default language
  { path: '', redirectTo: '/ar', pathMatch: 'full' },
  { path: '**', redirectTo: '/ar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  paramsInheritanceStrategy: 'always'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
