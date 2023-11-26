package com.backend_agenda_telefonica.backend_agenda_telefonica.repository;

import com.backend_agenda_telefonica.backend_agenda_telefonica.models.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
