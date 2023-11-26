package com.backend_agenda_telefonica.backend_agenda_telefonica.controller;

import com.backend_agenda_telefonica.backend_agenda_telefonica.service.ContactService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend_agenda_telefonica.backend_agenda_telefonica.models.Contact;

import java.util.List;

@RestController
@RequestMapping("/contacts")

public class controllerService {
    private final ContactService contactService;

    public controllerService(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping("{id}")
    @CrossOrigin( origins = "http://localhost:4200")
    public ResponseEntity<Contact> geContactDetails(@PathVariable("id") Long id){
        Contact contact = contactService.getContact(id);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @GetMapping
    @CrossOrigin( origins = "http://localhost:4200")
    public ResponseEntity<List<Contact>> getAllContactsDetails(){
        List<Contact> listContacts = contactService.getAllContacts();
        return new ResponseEntity<>(listContacts,HttpStatus.OK);
    }

    @PostMapping
    @CrossOrigin( origins = "http://localhost:4200")
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact){
        Contact newContact =  contactService.createContact(contact);
        return new ResponseEntity<>(newContact, HttpStatus.CREATED);
    }

    @PutMapping
    @CrossOrigin( origins = "http://localhost:4200")
    public ResponseEntity<Contact> updateContact(@RequestBody Contact contact){
        Contact upadateContact = contactService.updateContact(contact);
        return new ResponseEntity<>(upadateContact, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    @CrossOrigin( origins = "http://localhost:4200")
    public ResponseEntity<?> deleteContact(@PathVariable("id") Long id){
        contactService.deleteContact(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
