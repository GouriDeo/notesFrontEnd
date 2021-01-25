import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {RegistrationComponent} from './components/registration/registration.component'
import {ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import {UserVerificationComponent } from './components/user-verification/user-verification.component'
import {UpdatePasswordComponent} from './components/update-password/update-password.component'
import {DashBoardComponent} from './components/dash-board/dash-board.component'
import {NavbarComponent} from './components/navbar/navbar.component'
import {AddNoteComponent} from './components/add-note/add-note.component'

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'verify/:token',component:UserVerificationComponent},
  {path:'updatepassword/:token',component:UpdatePasswordComponent},
  {path:'dashboard',component:DashBoardComponent},
  {path:'Navbar',component:NavbarComponent},
  {path:'addNote',component:AddNoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }