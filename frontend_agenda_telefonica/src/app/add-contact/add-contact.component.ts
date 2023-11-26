import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';
import { HttpClient, HttpStatusCode } from '@angular/common/http';



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
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
  constructor(private apiService: ApiService){}

  public createContact(form: {value: Contact}){
    this.apiService.addContact(form.value).subscribe({
      complete: () => {
        this.succeessMessage();
      },
      error: (err: any) => {
        console.log(err);
        this.errorMessage();
      }
    });
  }

}
