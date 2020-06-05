import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {RemediesComponent} from './remedies/remedies.component';
import{AboutComponent} from './about/about.component';
import{ContactComponent} from './contact/contact.component';


const routes: Routes = [
  
   { path:"home", component:HomeComponent},
   { path:"remedies", component:RemediesComponent},
   { path:"about", component:AboutComponent},
   { path:"contact", component:ContactComponent},
   { path:"", component:HomeComponent,pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }