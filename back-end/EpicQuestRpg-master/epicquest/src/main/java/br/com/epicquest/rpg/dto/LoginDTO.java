package br.com.epicquest.rpg.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class LoginDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	@NotBlank(message = "UserName is required")
	private String username;

	@NotBlank(message = "UserName is required")
	private String password;
}
