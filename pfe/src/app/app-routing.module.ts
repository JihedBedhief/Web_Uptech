import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CardsComponent } from './cards/cards.component';
import { CloudComponent } from './cloud/cloud.component';
import { ContactComponent } from './contact/contact.component';
import { ErpComponent } from './erp/erp.component';
import { HomeComponent } from './home/home.component';
import { InfoSystemComponent } from './info-system/info-system.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { InternshipRequestComponent } from './internship-request/internship-request.component';
import { LoginEnershipComponent } from './login-enership/login-enership.component';
import { LoginComponent } from './login/login.component';
import { MobileComponent } from './mobile/mobile.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { SecurityComponent } from './security/security.component';
import { ServicesComponent } from './IT-System-services/services.component';
import { SignUpEnershipComponent } from './sign-up-enership/sign-up-enership.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToastTestComponent } from './toast-test/toast-test.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WebComponent } from './web/web.component';
import { DevelopmentServicesComponent } from './development-services/development-services.component';
import { CommunityComponent } from './community/community.component';
import { ReferencementComponent } from './referencement/referencement.component';
import { EmailMarketingComponent } from './email-marketing/email-marketing.component';
import { MobileMarketingComponent } from './mobile-marketing/mobile-marketing.component';
import { DesignComponent } from './design/design.component';
import { MarketingServicesComponent } from './marketing-services/marketing-services.component';
import { UpdateProfileComponent } from './user-profile/componenets/update-profile/update-profile.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';
import { DevisUserComponent } from './devis-user/devis-user.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path: 'login' , component : LoginComponent},
  { path: 'login_enership' , component : LoginEnershipComponent},
  { path : 'contact' , component : ContactComponent},
  { path : 'about' , component : AboutComponent},
  { path : 'sign_up', component : SignUpComponent},
  { path : 'sign_up_enership', component : SignUpEnershipComponent},
  { path : 'recruitment', component : RecruitmentComponent},
  { path : 'enership_request', component : InternshipRequestComponent},
  //{ path : 'user_profile', component : UserProfileComponent},
  { path : 'services', component : ServicesComponent,canActivate:[AuthGuard]},
  { path : 'dev_services', component : DevelopmentServicesComponent,canActivate:[AuthGuard]},
  { path : 'infrastructure', component : InfrastructureComponent},
  { path : 'security', component : SecurityComponent},
  { path : 'information system', component : InfoSystemComponent},
  { path : 'erp', component : ErpComponent},
  { path : 'cloud', component : CloudComponent},
  { path : 'web', component : WebComponent},
  { path : 'mobile', component : MobileComponent},
  { path : 'cards', component : CardsComponent},
  { path : 'toast', component : ToastTestComponent},
  { path : 'community', component : CommunityComponent},
  { path : 'referencement', component : ReferencementComponent},
  { path : 'email_marketing', component : EmailMarketingComponent},
  { path : 'mobile_marketing', component : MobileMarketingComponent},
  { path : 'design', component : DesignComponent},
  { path : 'marketing_services', component : MarketingServicesComponent ,canActivate:[AuthGuard]},
  { path : 'devis', component : DevisUserComponent},
  //{ path : 'update_user', component : UpdateProfileComponent},
  // { path : 'admin', component : AdminComponent},
  {
    path: 'admin',
    loadChildren: () => import('../app/dashboard-admin/dashboard-admin.module').then(m => m.DashboardAdminModule),canActivate:[RoleGuard] 
  },

  {
    path: 'user_profile',
    loadChildren: () => import('../app/user-profile/user-profile.module').then(m => m.UserProfileModule),canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent, HomeComponent, AboutComponent, ContactComponent, SignUpComponent]
