import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestHttpInterceptor} from './interceptors/requestHttp.interceptor';
import {ResponseHttpInterceptor} from './interceptors/responseHttp.interceptor';
import {DocumentsComponent} from './profile/documents/documents.component';
import {DocumentsCreateComponent} from './profile/documents-create/documents-create.component';
import {DocumentsUpdateComponent} from './profile/documents-update/documents-update.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DocumentsComponent,
    DocumentsCreateComponent,
    DocumentsUpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
