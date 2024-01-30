import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UploadCvComponent } from './upload-cv/upload-cv.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardTableComponent } from './dashboard/dashboard-table/dashboard-table.component';
import { AgGridModule } from 'ag-grid-angular'; // Angular Grid Logic
import { FrontPageComponent } from './front-page/front-page.component'; // Column Definitions Interface
import { CommonModule } from '@angular/common';
import { SidebarContentComponent } from './sidebar/sidebar-content/sidebar-content.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownfilterPipe } from './pipes/dropdownfilter.pipe';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'UploadCv', component: UploadCvComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'dashboardtable', component: DashboardTableComponent },
  { path: 'frontpage', component: FrontPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    UploadCvComponent,
    RegisterComponent,
    DashboardComponent,
    DashboardTableComponent,
    AppComponent,
    FrontPageComponent,
    SidebarContentComponent,
    DropdownfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    AgGridModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
