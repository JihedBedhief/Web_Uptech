import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { ListeUsersRequestComponent } from './components/users/liste-users-request/liste-users-request.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ListInternshipComponent } from './components/Internship/list-internship/list-internship.component';
import { InReqDetailComponent } from './components/Internship/in-req-detail/in-req-detail.component';
import { ListeUsersRefusedComponent } from './components/users/liste-users-refused/liste-users-refused.component';
import { ListeUsersArchivedComponent } from './components/users/liste-users-archived/liste-users-archived.component';
import { ListCategorieComponent } from './components/categories/list-categorie/list-categorie.component';
import { AddCategorieComponent } from './components/categories/add-categorie/add-categorie.component';
import { ListServicesComponent } from './components/services/list-services/list-services.component';
import { AddServicesComponent } from './components/services/add-services/add-services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InReqAcceptedComponent } from './components/Internship/in-req-accepted/in-req-accepted.component';
import { InReqRefusedComponent } from './components/Internship/in-req-refused/in-req-refused.component';
import { ListeRecrutementRequestComponent } from './components/Recruitment/liste-recrutement-request/liste-recrutement-request.component';
import { ListeRecrutementAcceptedComponent } from './components/Recruitment/liste-recrutement-accepted/liste-recrutement-accepted.component';
import { ListeRecrutementRefusedComponent } from './components/Recruitment/liste-recrutement-refused/liste-recrutement-refused.component';
import { RecReqDetailsComponent } from './components/Recruitment/rec-req-details/rec-req-details.component';
import { DevisComponent } from './components/devis/devis.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { UpdateAdminComponent } from './components/admin/update-admin/update-admin.component';
import { UpdateServiceComponent } from './components/services/update-service/update-service.component';
import { UpdateCategorieComponent } from './components/categories/update-categorie/update-categorie.component';






@NgModule({
  declarations: [
    DashboardAdminComponent,
    ListeUsersRequestComponent,
    UserDetailComponent,
    ContactListComponent,
    ListInternshipComponent,
    InReqDetailComponent,
    ListeUsersRefusedComponent,
    ListeUsersArchivedComponent,
    ListCategorieComponent,
    AddCategorieComponent,
    ListServicesComponent,
    AddServicesComponent,
    InReqAcceptedComponent,
    InReqRefusedComponent,
    ListeRecrutementRequestComponent,
    ListeRecrutementAcceptedComponent,
    ListeRecrutementRefusedComponent,
    RecReqDetailsComponent,
    DevisComponent,
    AdminProfileComponent,
    UpdateAdminComponent,
    UpdateServiceComponent,
    UpdateCategorieComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],

})
export class DashboardAdminModule { }
