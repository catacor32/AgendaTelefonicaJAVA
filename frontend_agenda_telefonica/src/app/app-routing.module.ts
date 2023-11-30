import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contacts-list/contact-list.component';
import { ContactCardsComponent } from './contact-cards/contact-cards.component';

const routes: Routes = [
  { path: 'contact-cards', component:ContactCardsComponent},
  { path: 'contact-list' , component:ContactListComponent},
  { path: '**', component:ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
