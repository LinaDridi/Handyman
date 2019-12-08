import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtisansearchComponent } from './components/artisansearch/artisansearch.component';
import { ArtisanComponent } from './components/artisan/artisan.component';
import { LoginComponent } from "./components/login/login.component";
import { RegistrationUserComponent } from "./components/registration-user/registration-user.component";
import { HomeComponent } from "./components/home/home.component";
import { RegistrationArtisanComponent } from './components/registration-artisan/registration-artisan.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ArtisanProjectPropositionComponent } from './components/artisan-project-proposition/artisan-project-proposition.component';
import { AcceptOfferComponent } from './components/accept-offer/accept-offer.component';
import { DeclineOfferComponent } from './components/decline-offer/decline-offer.component';
import {SuggestCraftsmanComponent} from './components/suggest-craftsman/suggest-craftsman.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';

const routes: Routes = [

  { path: 'SearchArtisan', component: ArtisansearchComponent },
  { path: 'SearchArtisan/:id', component: ArtisanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegistrationUserComponent },
  { path: 'signup/artisan', component: RegistrationArtisanComponent },
  { path: 'home', component: HomeComponent },
  { path: 'project-description', component: ProjectDescriptionComponent },
  { path: 'artisan/list-project-propositions', component: ArtisanProjectPropositionComponent },
  { path: 'accept-offer', component: AcceptOfferComponent },
  { path: 'decline-offer', component: DeclineOfferComponent }

  { path: 'Suggest', component: SuggestCraftsmanComponent},
  { path: 'contact', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
