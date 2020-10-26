package br.com.epicquest.rpg.service;

import java.util.List;

import org.springframework.stereotype.Component;

import br.com.epicquest.rpg.dto.UserDTO;

@Component
public interface UserService {
	public UserDTO registerUser(UserDTO usuarioDto);

	public List<UserDTO> getAllUsers();

	public UserDTO GetUserById(long userId);
}
