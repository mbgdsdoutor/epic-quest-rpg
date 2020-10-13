package br.com.epicquest.rpg.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.epicquest.rpg.dto.UserDTO;
import br.com.epicquest.rpg.service.UserService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/usuario")
public class UserController {

	@NonNull
	private UserService userService;

	/*
	 * @PostMapping("/login") public JwtDto login(@RequestBody UserDto usuarioDto)
	 * throws AuthenticationException { return usuarioService.login(usuarioDto); }
	 */
	@PostMapping("/cadastro")
	public UserDTO registerUser(@RequestBody UserDTO usuario) {
		return userService.registerUser(usuario);
	}
}
