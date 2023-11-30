package com.backend_agenda_telefonica.backend_agenda_telefonica.controller;

import com.backend_agenda_telefonica.backend_agenda_telefonica.service.ContactService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend_agenda_telefonica.backend_agenda_telefonica.models.Contact;

import java.util.List;

@RestController
@RequestMapping("/contacts")
@CrossOrigin( origins = "http://localhost:4200")
public class controllerService {
    private final ContactService contactService;

    public controllerService(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping("{id}")
    public ResponseEntity<Contact> geContactDetails(@PathVariable("id") Long id){
        Contact contact = contactService.getContact(id);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Contact>> getAllContactsDetails(){
        List<Contact> listContacts = contactService.getAllContacts();
        return new ResponseEntity<>(listContacts,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact){
        Contact newContact =  contactService.createContact(contact);
        return new ResponseEntity<>(newContact, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<Contact> updateContact(@PathVariable("id") Long id,@RequestBody Contact contact){
        Contact upadateContact = contactService.updateContact(id,contact);
        return new ResponseEntity<>(upadateContact, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteContact(@PathVariable("id") Long id){
        contactService.deleteContact(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
