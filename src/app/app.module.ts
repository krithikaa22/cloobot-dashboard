import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzListModule } from 'ng-zorro-antd/list';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { IconDefinition } from '@ant-design/icons-angular';
import { DeleteFill } from '@ant-design/icons-angular/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
import { EditModalComponent } from './edit-modal/edit-modal.component'; 

import { IconModule } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [ DeleteFill ];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditDashboardComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzCardModule,
    FormsModule,
    NzDropDownModule,
    NzMenuModule,
    NzListModule,
    IconModule, 
    NzSelectModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
