import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiService } from '../api.service';
import { Contact } from '../models/contact';
import Swal from "sweetalert2";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(public modalRef : MdbModalRef<ModalComponent>, private apiService: ApiService){}

  public contacts: Contact[] = [];
  public selectedContact: Contact = {id: 0, nume: '', prenume: '', telefon: '', email: '', imageUrl: ''};
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

  public createContact(form: {value: Contact}){
    this.apiService.addContact(form.value).subscribe({
      complete: () => {
        this.succeessMessage();
        this.modalRef.close();
      },
      error: (err: any) => {
        console.log(err);
        this.errorMessage();
      }
    });
  }
}
