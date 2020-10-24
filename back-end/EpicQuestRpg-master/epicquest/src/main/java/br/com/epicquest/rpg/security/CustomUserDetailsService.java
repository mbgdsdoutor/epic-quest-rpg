package br.com.epicquest.rpg.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.Gson;

import br.com.epicquest.rpg.entity.User;
import br.com.epicquest.rpg.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private Gson gson;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(usernameOrEmail).orElseThrow(
				() -> new UsernameNotFoundException("User not found with username or email : " + usernameOrEmail));

		return UsuarioLogado.create(user);
	}

	@Transactional
	public UserDetails createUsuarioLogado(String userJWT) {
		User user = gson.fromJson(userJWT, User.class);
		return UsuarioLogado.create(user);
	}
}