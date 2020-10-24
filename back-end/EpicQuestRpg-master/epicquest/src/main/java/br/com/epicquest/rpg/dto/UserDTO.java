package br.com.epicquest.rpg.dto;

import java.io.Serializable;
import java.util.Date;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class UserDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private Long id;

	@NotBlank(message = "UserName is required")
	private String username;

	@NotBlank(message = "FullName is required")
	private String fullname;
	
	@NotBlank(message = "Birthday is required")
	private Date birthday;
	
	@NotBlank(message = "Email is required")
	private String email;

	@NotBlank(message = "UserName is required")
	private String password;
	
	private String confirmPassword;
}