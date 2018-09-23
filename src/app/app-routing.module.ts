import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PrehistoryComponent } from './components/pages/prehistory/prehistory.component';
import { AncientComponent } from './components/pages/ancient/ancient.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent,
  children: [
    {path:'prehistory', component:PrehistoryComponent},
    {path:'ancient', component:AncientComponent},
  ]},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
