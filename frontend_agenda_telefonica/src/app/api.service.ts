import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models/contact';


@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private apiServerUrl: string = 'http://localhost:8080/contacts';

    constructor(private http: HttpClient){}

    public getAllContacts(): Observable<Contact[]>{
        return this.http.get<Contact[]>(this.apiServerUrl)
    }
    public getContact(id:number): Observable<Contact>{
        return this.http.get<Contact>(`${this.apiServerUrl}/${id}`);
    }
    public addContact(contact: Contact): Observable<Contact>{
        return this.http.post<Contact>(this.apiServerUrl, contact);
    }
    public updateContact(id: number,contact: Contact): Observable<Contact>{
        return this.http.put<Contact>(`${this.apiServerUrl}/${id}`, id);
    }
    public deleteContact(id: number): Observable<Contact>{
        return this.http.delete<Contact>(`${this.apiServerUrl}/${id}`);
    }
}


