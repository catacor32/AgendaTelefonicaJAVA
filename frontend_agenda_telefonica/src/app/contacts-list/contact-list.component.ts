import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ApiService } from '../api.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from "sweetalert2";
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public modalRef: MdbModalRef<ModalComponent> | null = null;
  public contacts: Contact[] = [];
  public errorMessage = () => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Something went wrong",
      showConfirmButton: false,
      timer: 2500
    });
  }

  ngOnInit(): void {
    this.readContacts();
  }
  
  constructor(private apiService: ApiService,private modalService: MdbModalService){}

  public openModal() {
    this.modalRef = this.modalService.open(ModalComponent)
  }

  public readContacts() {
    this.apiService.getAllContacts().subscribe(
      (res: Contact[]): void => {
        this.contacts = res;
      }
    )
  }

  public deleteContact(id:number){
    this.apiService.deleteContact(id).subscribe({
      complete: () => {
        this.readContacts();
      },
      error: (err) => {
        console.log(err);
        this.errorMessage();
      }
    });
  }

  public confirmDelete(id: number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: `Contact with id ${id} has been deleted.`,
          icon: "success"
        });
        this.deleteContact(id);
      }else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Your contact file is safe :)",
          icon: "error"
        });
      }
    });
  }

}
