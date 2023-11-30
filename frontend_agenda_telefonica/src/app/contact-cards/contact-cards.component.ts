import { Component, ElementRef, Injectable, OnInit, Renderer2 } from '@angular/core';
import { Contact } from '../models/contact';
import { ApiService } from '../api.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from "sweetalert2";
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { UpdateContactModalComponent } from '../update-contact-modal/update-contact-modal.component';


@Component({
  selector: 'app-contact-cards',
  templateUrl: './contact-cards.component.html',
  styleUrls: ['./contact-cards.component.css']
})
export class ContactCardsComponent implements OnInit{
  public currentPage: number = 1;
  public pageSize: number = 12;
  public selectedContact: Contact = {id: 0, nume: '', prenume: '', telefon: '', email: '', imageUrl: ''};
  public modalRef: MdbModalRef<ModalComponent> | null = null;
  public modalRefUpdate: MdbModalRef<UpdateContactModalComponent> | null = null;
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
    this.render.addClass(document.body, "bg-body-secondary")
  }
  
  constructor(private apiService: ApiService,private modalService: MdbModalService, private render: Renderer2){}

  public openModalNewContact() {
    this.modalRef = this.modalService.open(ModalComponent)
    this.modalRef.onClose.subscribe(() => {
      this.readContacts();
    });
  }



  public openModalUpdateContact(contact: Contact) {
    this.modalRefUpdate = this.modalService.open(UpdateContactModalComponent);
    this.modalRefUpdate.onClose.subscribe(() => {
      this.readContacts();
    });
    this.apiService.setSelectedContact(contact);
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

  public searchContact(key: string): void{
    const results: Contact[] = [];
    for(const contact of this.contacts){
        if(contact.nume.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
        || contact.prenume?.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
        || contact.email?.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1){
          results.push(contact);
      }
    }
    this.contacts = results;
    if(results.length === 0 || !key){
      this.readContacts();
    }
  }
  
}
