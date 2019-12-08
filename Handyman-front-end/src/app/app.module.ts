import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArtisansearchComponent } from './components/artisansearch/artisansearch.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtisanComponent } from './components/artisan/artisan.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationArtisanComponent } from './components/registration-artisan/registration-artisan.component';
import { RegistrationUserComponent } from './components/registration-user/registration-user.component';
import { httpInterceptorProviders } from './auth/auth-http-interceptor.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ArtisanProjectPropositionComponent } from './components/artisan-project-proposition/artisan-project-proposition.component';
import { AcceptOfferComponent } from './components/accept-offer/accept-offer.component';
import { DeclineOfferComponent } from './components/decline-offer/decline-offer.component';
import { MatSelectModule } from '@angular/material';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SuggestCraftsmanComponent } from './components/suggest-craftsman/suggest-craftsman.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { MatDialogModule } from '@angular/material/dialog';



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
    DeclineOfferComponent

    FooterComponent,
    SearchComponent,
    SuggestCraftsmanComponent,
    ContactUsComponent
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
    MatSelectModule

    AutocompleteLibModule
  ],
  providers: [httpInterceptorProviders, { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
