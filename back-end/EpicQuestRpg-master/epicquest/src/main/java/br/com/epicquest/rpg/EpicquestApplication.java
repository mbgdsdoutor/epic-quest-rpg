package br.com.epicquest.rpg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class EpicquestApplication {

	public static void main(String[] args) {
		SpringApplication.run(EpicquestApplication.class, args);
	}
}
