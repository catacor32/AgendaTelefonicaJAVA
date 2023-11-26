package com.backend_agenda_telefonica.backend_agenda_telefonica.models;

import jakarta.persistence.*;

import java.io.Serializable;


@Entity
@Table(name="contacts")
public class Contact implements Serializable {
    @SequenceGenerator(name = "yourSequenceGenerator", allocationSize = 0)
    @Id
    @GeneratedValue(strategy =  GenerationType.SEQUENCE, generator = "yourSequenceGenerator")
    @Column(nullable = false, updatable = false)
    private Long id;
    private String nume;
    private String prenume;
    private String telefon;
    private String email;
    private String imageUrl;

    public Contact() {}
    public Contact(Long id, String nume, String prenume, String telefon,String email, String imageUrl) {
        this.id = id;
        this.nume = nume;
        this.prenume = prenume;
        this.telefon = telefon;
        this.email = email;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getPrenume(){
        return prenume;
    }

    public void setPrenume(String prenume) {
        this.prenume = prenume;
    }

    public String getTelefon(){
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public  String getImageUrl(){
        return imageUrl;
    }

    public void setImageUrl(String imageUrl){
        this.imageUrl = imageUrl;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    @Override
    public String toString(){
        return "Contact{" +
                "id=" + id +
                ", nume=" + nume +'/' +
                ", prenume=" + prenume + '/' +
                ", telefon=" + telefon + '/' +
                ", email=" + email + '/' +
                ", imageUrl=" + imageUrl + '/' +
                '}';
    }
}
