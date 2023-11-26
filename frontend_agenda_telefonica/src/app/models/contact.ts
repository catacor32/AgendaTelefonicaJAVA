import { Data } from "@angular/router";

export interface Contact {
    id: number;
    nume: string;
    prenume?: string;
    telefon: string;
    email?: string;
    imageUrl?: string;
    data_adaugare?: Data;
}