package br.com.epicquest.rpg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.epicquest.rpg.dto.LoginDTO;
import br.com.epicquest.rpg.dto.UserJwtDTO;
import br.com.epicquest.rpg.security.JwtTokenProvider;
import br.com.epicquest.rpg.security.UsuarioLogado;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {

	@NonNull
	private UserService userRepository;

	@NonNull
	private PasswordEncoder passwordEncoder;

	@NonNull
	private JwtTokenProvider tokenProvider;

	@Autowired
	private AuthenticationManager authenticationManager;

	public UserJwtDTO login(LoginDTO usuario) {
		try {
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(usuario.getUsername(), usuario.getPassword()));

			SecurityContextHolder.getContext().setAuthentication(authentication);

			UsuarioLogado userPrincipal = (UsuarioLogado) authentication.getPrincipal();

			String jwt = tokenProvider.generateToken(userPrincipal);

			UserJwtDTO usuarioLogado = UserJwtDTO.builder().Token(jwt).User(null).build();

			return usuarioLogado;
		} catch (AuthenticationException e) {
			throw e;
		}
	}
}
