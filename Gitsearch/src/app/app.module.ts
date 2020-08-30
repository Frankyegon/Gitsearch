import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { RepoFormComponent } from './repo-form/repo-form.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepoComponent,
    RepoDetailComponent,
    HighlightDirective,
    DateCountPipe,
    RepoFormComponent,
    AboutComponent,
    NotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
