import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';

const routes: Routes = [
  { path: 'repos', component: RepoComponent},
  { path: 'about', component: AboutComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'repos/:id', component: RepoDetailComponent },
  { path: '', redirectTo:"/profile", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
