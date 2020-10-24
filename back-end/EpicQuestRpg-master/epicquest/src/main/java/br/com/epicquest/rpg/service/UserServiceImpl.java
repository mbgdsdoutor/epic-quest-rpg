package br.com.epicquest.rpg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.epicquest.rpg.dto.UserDTO;
import br.com.epicquest.rpg.entity.User;
import br.com.epicquest.rpg.exceptions.AbstractException;
import br.com.epicquest.rpg.mapper.UserMapper;
import br.com.epicquest.rpg.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository _userRepository;
	@Autowired
	private PasswordEncoder _passwordEncoder;
	@Autowired
	private UserMapper _userMapper;

	public UserDTO registerUser(UserDTO userDto) {
		User user = _userMapper.toModel(userDto);
		if (!_userRepository.existsByUsername(user.getUsername())) {
			user.setPassword(_passwordEncoder.encode(user.getPassword()));
			user = _userRepository.save(user);
			return _userMapper.toDto(user);
		} else {
			throw new AbstractException("Username is already in use");
		}
	}
}
