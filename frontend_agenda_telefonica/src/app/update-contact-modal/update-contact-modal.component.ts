import { Component, Injectable, Input, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiService } from '../api.service';
import { Contact } from '../models/contact';
import Swal from "sweetalert2";
import { ContactListComponent } from '../contacts-list/contact-list.component';

@Component({
  selector: 'app-update-contact-modal',
  templateUrl: './update-contact-modal.component.html',
  styleUrls: ['./update-contact-modal.component.css']
})

export class UpdateContactModalComponent implements OnInit {
  constructor(public modalRef : MdbModalRef<UpdateContactModalComponent>,private apiService: ApiService,){}

  ngOnInit(): void {
      this.selectedContact = this.apiService.getSelectContact();
  }
  public selectedContact: Contact = {id: 0, nume: '', prenume: '', telefon: '', email: '', imageUrl: ''};
  public contacts: Contact[] = [];
  public succeessMessage = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Contact has been saved",
      showConfirmButton: false,
      timer: 2000
    });
  }

  public errorMessage = () => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Something went wrong",
      showConfirmButton: false,
      timer: 2500
    });
  }

  public updateContact(){
    this.apiService.updateContact(this.selectedContact.id, this.selectedContact).subscribe({
      complete: () => {
        this.succeessMessage();
        this.modalRef.close();
      },
      error: (err) => {
        console.log(err);
        this.errorMessage();
      }

    })
  }

}
