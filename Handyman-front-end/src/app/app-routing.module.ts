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
import { LoginGGuard } from './auth/login-g.guard';
import { LogoutGGuard } from './auth/logout-g.guard';
import { RoleGGuard } from './auth/role-g.guard';
import { EditArtisanComponent } from './components/edit-artisan/edit-artisan.component';
import { ClientProjectsComponent } from './components/client-projects/client-projects.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  // { path: 'SearchArtisan', component: ArtisansearchComponent , canActivate: [LoginGGuard]},
  {
    path: 'SearchArtisan', component: ArtisansearchComponent
    // ,canActivate: [RoleGGuard],
    // data: {roles: ['ROLE_ARTISAN']}
  },
  { path: 'SearchArtisan/:id', component: ArtisanComponent, canActivate: [LoginGGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGGuard] },
  { path: 'signup', component: RegistrationUserComponent },
  { path: 'signup/artisan', component: RegistrationArtisanComponent },
  { path: 'home', component: HomeComponent },
  { path: 'project-description', component: ProjectDescriptionComponent, canActivate: [RoleGGuard, LoginGGuard], data: { roles: ['ROLE_USER'] } },
  { path: 'artisan/list-project-propositions', component: ArtisanProjectPropositionComponent, canActivate: [RoleGGuard, LoginGGuard], data: { roles: ['ROLE_ARTISAN'] } },
  { path: 'accept-offer', component: AcceptOfferComponent, canActivate: [RoleGGuard, LoginGGuard], data: { roles: ['ROLE_ARTISAN'] } },
  { path: 'decline-offer', component: DeclineOfferComponent, canActivate: [RoleGGuard, LoginGGuard], data: { roles: ['ROLE_ARTISAN'] } },
  { path: 'Suggest', component: SuggestCraftsmanComponent, canActivate: [LoginGGuard] },
  { path: 'contact', component: ContactUsComponent },
  { path: 'edit/:id', component: EditArtisanComponent, canActivate: [RoleGGuard, LoginGGuard], data: { roles: ['ROLE_ARTISAN'] } },
  { path: 'client/projects', component: ClientProjectsComponent, canActivate: [RoleGGuard, LoginGGuard], data: { roles: ['ROLE_USER'] } },
  { path: 'payment', component: PaymentComponent, canActivate: [RoleGGuard, LoginGGuard], data: { roles: ['ROLE_USER'] } },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
