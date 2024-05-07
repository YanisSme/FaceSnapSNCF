import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnap } from './models/face-snap.model';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

const routes: Routes = [
  { path: 'facesnaps', component: FaceSnapListComponent }, // on donne le chemin
  { path: '', component: LandingPageComponent},
  {path: 'facesnap/:id', component: SingleFaceSnapComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Module principale du routeur Angular
  exports: [RouterModule]
})

export class AppRoutingModule { }
