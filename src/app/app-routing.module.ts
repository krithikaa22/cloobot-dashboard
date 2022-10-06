import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
  
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'edit', component: EditDashboardComponent },
  { path: 'modal', component: EditModalComponent },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
