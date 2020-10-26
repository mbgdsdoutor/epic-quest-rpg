package br.com.epicquest.rpg.controller;

import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.epicquest.rpg.dto.LoginDTO;
import br.com.epicquest.rpg.dto.UserJwtDTO;
import br.com.epicquest.rpg.service.LoginService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/Login")
public class LoginController {

	@NonNull
	private LoginService _loginService;

	@PostMapping
	public UserJwtDTO login(@RequestBody LoginDTO usuarioDto) throws AuthenticationException {
		try {
			return _loginService.login(usuarioDto);
		} catch (Exception e) {
			throw e;
		}
	}
}
