import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputComponent } from "./Components/input/input.component";
import { ShowComponent } from './Components/show/show.component';

const routes: Routes = [
  {path: '', component: InputComponent},
  {path: 'show', component: ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
