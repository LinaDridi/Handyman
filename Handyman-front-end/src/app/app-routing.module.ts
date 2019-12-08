import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceptOfferComponent } from './components/accept-offer/accept-offer.component';
import { ArtisanProjectPropositionComponent } from './components/artisan-project-proposition/artisan-project-proposition.component';
import { ArtisanComponent } from './components/artisan/artisan.component';
import { ArtisansearchComponent } from './components/artisansearch/artisansearch.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DeclineOfferComponent } from './components/decline-offer/decline-offer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { RegistrationArtisanComponent } from './components/registration-artisan/registration-artisan.component';
import { RegistrationUserComponent } from './components/registration-user/registration-user.component';
import { SuggestCraftsmanComponent } from './components/suggest-craftsman/suggest-craftsman.component';

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
    { path: 'decline-offer', component: DeclineOfferComponent },
    { path: 'Suggest', component: SuggestCraftsmanComponent },
    { path: 'contact', component: ContactUsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
