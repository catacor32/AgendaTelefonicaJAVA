package com.backend_agenda_telefonica.backend_agenda_telefonica;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@SpringBootApplication
public class BackendAgendaTelefonicaApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendAgendaTelefonicaApplication.class, args);
	}
}
