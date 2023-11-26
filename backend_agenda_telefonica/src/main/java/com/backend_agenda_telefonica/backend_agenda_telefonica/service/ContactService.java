package com.backend_agenda_telefonica.backend_agenda_telefonica.service;

import com.backend_agenda_telefonica.backend_agenda_telefonica.models.Contact;

import java.util.List;

public interface ContactService {
    public Contact createContact(Contact contact);
    public Contact updateContact(Contact contact);
    public void deleteContact(Long id);
    public Contact getContact(Long id);
    public List<Contact> getAllContacts();

}
