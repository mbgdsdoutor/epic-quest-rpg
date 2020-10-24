package br.com.epicquest.rpg.service;

import org.springframework.stereotype.Component;

import br.com.epicquest.rpg.dto.UserDTO;

@Component
public interface UserService {
	public UserDTO registerUser(UserDTO usuarioDto);
}
