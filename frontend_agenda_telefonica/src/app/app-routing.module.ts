import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contacts-list/contact-list.component';

const routes: Routes = [
  { path: 'add-contact' , component:AddContactComponent},
  { path: 'contact-list' , component:ContactListComponent},
  { path: '**', component:AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
