import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts-list/contact-list.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from "./modal/modal.component";
import { UpdateContactModalComponent } from './update-contact-modal/update-contact-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactCardsComponent } from './contact-cards/contact-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    FooterComponent,
    NavbarComponent,
    ModalComponent,
    UpdateContactModalComponent,
    ContactCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MdbModalModule,
    NgxPaginationModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
