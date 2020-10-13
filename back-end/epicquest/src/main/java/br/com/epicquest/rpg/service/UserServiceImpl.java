package br.com.epicquest.rpg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.epicquest.rpg.dto.UserDTO;
import br.com.epicquest.rpg.entity.User;
import br.com.epicquest.rpg.exceptions.AbstractException;
import br.com.epicquest.rpg.mapper.ConverterMapper;
import br.com.epicquest.rpg.repository.UserRepository;
import lombok.NonNull;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository _userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	public UserDTO registerUser(UserDTO usuarioDto) {
		try {
			User usuario = User.builder().userEmail(usuarioDto.getEmail()).userName(usuarioDto.getUserName())
					.userPassword(usuarioDto.getPassword()).birthday(usuarioDto.getBirthday())
					.fullName(usuarioDto.getFullName()).build();
			if (!_userRepository.existsByUserName(usuario.getUserName())) {
				usuario.setUserPassword(passwordEncoder.encode(usuario.getUserPassword()));
				usuario = _userRepository.save(usuario);
				return usuarioDto;
			} else {
				throw new AbstractException("Username is already in use");
			}
		} catch (Exception e) {
			throw e;
		}
	}
}
