import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtisansearchComponent} from './components/artisansearch/artisansearch.component';
import {ArtisanComponent} from './components/artisan/artisan.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationUserComponent} from './components/registration-user/registration-user.component';
import {HomeComponent} from './components/home/home.component';
import { RegistrationArtisanComponent } from './components/registration-artisan/registration-artisan.component';

const routes: Routes =  [

  { path: 'SearchArtisan', component: ArtisansearchComponent },
  { path: 'SearchArtisan/:id', component: ArtisanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegistrationUserComponent },
  {path: 'signup/artisan' , component: RegistrationArtisanComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
