import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeUsersComponent } from 'src/app/dashboard-admin/components/users/liste-users/liste-users.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { InReqDetailComponent } from './components/Internship/in-req-detail/in-req-detail.component';
import { ListInternshipComponent } from './components/Internship/list-internship/list-internship.component';
import { ListeUsersRequestComponent } from './components/users/liste-users-request/liste-users-request.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { AuthGuard } from '../shared/auth.guard';
import { RoleGuard } from '../shared/role.guard';
import { ListeUsersRefusedComponent } from './components/users/liste-users-refused/liste-users-refused.component';
import { ListeUsersArchivedComponent } from './components/users/liste-users-archived/liste-users-archived.component';
import { ListCategorieComponent } from './components/categories/list-categorie/list-categorie.component';
import { AddCategorieComponent } from './components/categories/add-categorie/add-categorie.component';
import { ListServicesComponent } from './components/services/list-services/list-services.component';
import { AddServicesComponent } from './components/services/add-services/add-services.component';
import { InReqAcceptedComponent } from './components/Internship/in-req-accepted/in-req-accepted.component';
import { InReqRefusedComponent } from './components/Internship/in-req-refused/in-req-refused.component';
import { ListeRecrutementRequestComponent } from './components/Recruitment/liste-recrutement-request/liste-recrutement-request.component';
import { ListeRecrutementRefusedComponent } from './components/Recruitment/liste-recrutement-refused/liste-recrutement-refused.component';
import { ListeRecrutementAcceptedComponent } from './components/Recruitment/liste-recrutement-accepted/liste-recrutement-accepted.component';
import { RecReqDetailsComponent } from './components/Recruitment/rec-req-details/rec-req-details.component';
import { DevisComponent } from './components/devis/devis.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { UpdateAdminComponent } from './components/admin/update-admin/update-admin.component';
import { UpdateServiceComponent } from './components/services/update-service/update-service.component';
import { UpdateCategorieComponent } from './components/categories/update-categorie/update-categorie.component';


const routes: Routes = [
  { path : '' , component : DashboardAdminComponent, 
  children:[
    { path : '', component : AdminProfileComponent,canActivate:[RoleGuard]},
    { path : 'update_admin/:_id', component : UpdateAdminComponent,canActivate:[RoleGuard]},
    { path : 'user_liste', component : ListeUsersComponent,canActivate:[RoleGuard]},
    { path : 'user_liste_request', component : ListeUsersRequestComponent,canActivate:[RoleGuard]},
    { path : 'user_detail/:userId', component : UserDetailComponent,canActivate:[RoleGuard]},
    { path : 'inReq_detail/:inReqId', component : InReqDetailComponent,canActivate:[RoleGuard]},
    { path : 'recReq_detail/:inReqId', component : RecReqDetailsComponent,canActivate:[RoleGuard]},
    { path : 'contact_list', component : ContactListComponent,canActivate:[RoleGuard]},
    { path : 'internship_list', component : ListInternshipComponent,canActivate:[RoleGuard]},
    { path : 'user_liste_refused', component : ListeUsersRefusedComponent,canActivate:[RoleGuard]},
    { path : 'user_liste_archived', component : ListeUsersArchivedComponent,canActivate:[RoleGuard]},
    { path : 'liste_categorie', component : ListCategorieComponent,canActivate:[RoleGuard]},
    { path : 'add_categorie', component : AddCategorieComponent,canActivate:[RoleGuard]},
    { path : 'liste_services', component : ListServicesComponent,canActivate:[RoleGuard]},
    { path : 'add_services', component : AddServicesComponent,canActivate:[RoleGuard]},
    { path : 'accepted_in_req', component : InReqAcceptedComponent,canActivate:[RoleGuard]},
    { path : 'refused_in_req', component : InReqRefusedComponent,canActivate:[RoleGuard]},
    { path : 'liste_rec_req', component : ListeRecrutementRequestComponent,canActivate:[RoleGuard]},
    { path : 'refused_rec_req', component : ListeRecrutementRefusedComponent,canActivate:[RoleGuard]},
    { path : 'accepted_rec_req', component : ListeRecrutementAcceptedComponent,canActivate:[RoleGuard]},
    { path : 'devis', component : DevisComponent,canActivate:[RoleGuard]},
    { path : 'update_service/:_id', component : UpdateServiceComponent,canActivate:[RoleGuard]},
    { path : 'update_categorie/:_id', component : UpdateCategorieComponent,canActivate:[RoleGuard]},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
  
})
export class AdminRoutingModule { }
