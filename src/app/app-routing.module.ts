import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{path:"menu",component:MenuComponent},
  {path:"items/:item",component:ItemsComponent },

{path:"",redirectTo:"menu",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
