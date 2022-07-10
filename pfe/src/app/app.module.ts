import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http' ;

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginEnershipComponent } from './login-enership/login-enership.component';
import { SignUpEnershipComponent } from './sign-up-enership/sign-up-enership.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { InternshipRequestComponent } from './internship-request/internship-request.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ServicesComponent } from './IT-System-services/services.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ListeUsersComponent } from './dashboard-admin/components/users/liste-users/liste-users.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { SecurityComponent } from './security/security.component';
import { InfoSystemComponent } from './info-system/info-system.component';
import { ErpComponent } from './erp/erp.component';
import { CloudComponent } from './cloud/cloud.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { CardsComponent } from './cards/cards.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AdminRoutingModule } from './dashboard-admin/admin-routing.module';
import { ToastTestComponent } from './toast-test/toast-test.component';
import { DevelopmentServicesComponent } from './development-services/development-services.component';
import { CommunityComponent } from './community/community.component';
import { ReferencementComponent } from './referencement/referencement.component';
import { EmailMarketingComponent } from './email-marketing/email-marketing.component';
import { MobileMarketingComponent } from './mobile-marketing/mobile-marketing.component';
import { DesignComponent } from './design/design.component';
import { MarketingServicesComponent } from './marketing-services/marketing-services.component';
import { UserProfileRoutingModule } from './user-profile/user-profile-routing.module';
import { UpdateProfileComponent } from './user-profile/componenets/update-profile/update-profile.component';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileModule } from './user-profile/user-profile.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    routingComponent,
    LoginEnershipComponent,
    SignUpEnershipComponent,
    RecruitmentComponent,
    InternshipRequestComponent,
    ServicesComponent,
    ListeUsersComponent,
    InfrastructureComponent,
    SecurityComponent,
    InfoSystemComponent,
    ErpComponent,
    CloudComponent,
    WebComponent,
    MobileComponent,
    CardsComponent,
    AdminComponent,
    ToastTestComponent,
    DevelopmentServicesComponent,
    CommunityComponent,
    ReferencementComponent,
    EmailMarketingComponent,
    MobileMarketingComponent,
    DesignComponent,
    MarketingServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AdminRoutingModule,
    ToastrModule.forRoot(),
    UserProfileModule,
    NgbModule, 
    
    //UpdateProfileComponent
  ],
  providers: [ {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService , multi: true} ],
  bootstrap: [AppComponent],

})
export class AppModule { }
