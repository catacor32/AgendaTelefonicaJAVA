package com.backend_agenda_telefonica.backend_agenda_telefonica.expection;

public class ContactNotFoundException extends RuntimeException {
    public ContactNotFoundException(String message) {
        super(message);
    }
}
