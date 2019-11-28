import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArtisansearchComponent } from './components/artisansearch/artisansearch.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtisanComponent } from './components/artisan/artisan.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationArtisanComponent} from './components/registration-artisan/registration-artisan.component';
import { RegistrationUserComponent} from './components/registration-user/registration-user.component';
import { httpInterceptorProviders } from './auth/auth-http-interceptor.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtisansearchComponent,
    ArtisanComponent,
    HomeComponent,
    LoginComponent,
    RegistrationUserComponent,
    RegistrationArtisanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
