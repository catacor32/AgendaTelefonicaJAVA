package com.backend_agenda_telefonica.backend_agenda_telefonica.service.impl;

import com.backend_agenda_telefonica.backend_agenda_telefonica.expection.ContactNotFoundException;
import com.backend_agenda_telefonica.backend_agenda_telefonica.models.Contact;
import com.backend_agenda_telefonica.backend_agenda_telefonica.repository.ContactRepository;
import com.backend_agenda_telefonica.backend_agenda_telefonica.service.ContactService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;
    public ContactServiceImpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public Contact updateContact(Long id,Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }

    @Override
    public Contact getContact(Long id) {
        return contactRepository.findById(id).
                orElseThrow(() -> new ContactNotFoundException(
                        "Contact with id"+ id + "was not fount"));
    }

    @Override
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }
}
