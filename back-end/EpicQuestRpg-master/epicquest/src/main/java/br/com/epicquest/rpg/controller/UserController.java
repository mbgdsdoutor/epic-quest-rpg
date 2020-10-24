package br.com.epicquest.rpg.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
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

	@ResponseStatus(code = HttpStatus.CREATED)
	@ResponseBody
	@PostMapping("/cadastro")
	public UserDTO registerUser(@RequestBody UserDTO usuario) {
		return userService.registerUser(usuario);
	}
}
