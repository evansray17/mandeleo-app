
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//MDB BOOSTRAP
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENT IMPORT
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SliderComponent } from './slider/slider.component';
import { ModalEventComponent } from './modal-event/modal-event.component';
import { AppComponent } from './app.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { TableEditableComponent } from './table-editable/table-editable.component';

// SERVICCE IMPORT
import { RecordsServiceService } from './records-service.service';
import { AppDatatablesComponent } from './app-datatables/app-datatables.component';



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    LoanFormComponent,
    FooterComponent,
    TableEditableComponent,
    ModalEventComponent,
    AppDatatablesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RecordsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
    