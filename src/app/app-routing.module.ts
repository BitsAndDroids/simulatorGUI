import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartScreenComponent} from "./start-screen/start-screen.component";
import {EditScreenComponent} from "./edit-screen/edit-screen.component";
import {LoadingScreenComponent} from "./loading-screen/loading-screen.component";
import {ActiveScreenComponent} from "./active-screen/active-screen.component";

const routes: Routes = [
  { path:'', component:StartScreenComponent},
  { path:'edit', component: EditScreenComponent},
  { path:'loading', component: LoadingScreenComponent},
  { path:'active-screen', component: ActiveScreenComponent},
  {
    path: '**',
    component: StartScreenComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
