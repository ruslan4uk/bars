import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AppComponent} from './app.component';
import {DocumentsComponent} from './profile/documents/documents.component';
import {AuthGuard} from './guards/auth.guard';
import {DocumentsCreateComponent} from './profile/documents-create/documents-create.component';
import {DocumentsUpdateComponent} from './profile/documents-update/documents-update.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'profile', component: DocumentsComponent, canActivate: [AuthGuard]},
  {path: 'profile/create', component: DocumentsCreateComponent, canActivate: [AuthGuard]},
  {path: 'profile/:id', component: DocumentsUpdateComponent, canActivate: [AuthGuard]},

  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
