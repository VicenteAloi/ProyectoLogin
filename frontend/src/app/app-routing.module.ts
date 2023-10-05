import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { ProductShoppingComponent } from './components/product-shopping/product-shopping.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HelpsComponent } from './components/helps/helps.component';






const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'admin', component: AdminComponent },




  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/helps', component: HelpsComponent },
  { path: 'dashboard/product', component: ProductInformationComponent },
  { path: 'dashboard/shopping/:id', component: ProductShoppingComponent },
  { path: 'dashboard/userProfile', component: UserProfileComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
