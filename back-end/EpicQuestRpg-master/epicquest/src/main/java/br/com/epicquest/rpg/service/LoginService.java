package br.com.epicquest.rpg.service;

import org.springframework.stereotype.Component;

import br.com.epicquest.rpg.dto.LoginDTO;
import br.com.epicquest.rpg.dto.UserJwtDTO;

@Component
public interface LoginService {
	UserJwtDTO login(LoginDTO usuario);
}
