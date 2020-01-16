import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './auth/auth-http-interceptor.service';
import { AcceptOfferComponent } from './components/accept-offer/accept-offer.component';
import { ArtisanProjectPropositionComponent } from './components/artisan-project-proposition/artisan-project-proposition.component';
import { ArtisanComponent } from './components/artisan/artisan.component';
import { ArtisansearchComponent } from './components/artisansearch/artisansearch.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DeclineOfferComponent } from './components/decline-offer/decline-offer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { RegistrationArtisanComponent } from './components/registration-artisan/registration-artisan.component';
import { RegistrationUserComponent } from './components/registration-user/registration-user.component';
import { SearchComponent } from './components/search/search.component';
import { SuggestCraftsmanComponent } from './components/suggest-craftsman/suggest-craftsman.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoginGGuard } from './auth/login-g.guard';
import { LogoutGGuard } from "./auth/logout-g.guard";
import { ClientProjectsComponent } from './components/client-projects/client-projects.component';
import { ProjectDevisComponent } from './components/project-devis/project-devis.component';
import { EditArtisanComponent } from './components/edit-artisan/edit-artisan.component';
import { ArtisanNamePipe } from './pipes/artisan-name.pipe';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtisansearchComponent,
    ArtisanComponent,
    HomeComponent,
    LoginComponent,
    RegistrationUserComponent,
    RegistrationArtisanComponent,
    ProjectDescriptionComponent,
    ArtisanProjectPropositionComponent,
    AcceptOfferComponent,
    DeclineOfferComponent,
    FooterComponent,
    SearchComponent,
    SuggestCraftsmanComponent,
    ContactUsComponent,
    ClientProjectsComponent,
    ProjectDevisComponent,
    EditArtisanComponent,
    ArtisanNamePipe,
    PaymentComponent
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    AutocompleteLibModule,
    NgMultiSelectDropDownModule
  ],
  providers: [httpInterceptorProviders, { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }, LoginGGuard, LogoutGGuard],
  entryComponents: [LoginComponent, ProjectDevisComponent,PaymentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
