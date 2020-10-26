package br.com.epicquest.rpg.dto;

import java.io.Serializable;
import javax.validation.constraints.NotEmpty;


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

	@NotEmpty(message = "UserName is required")
	private String userName;

	@NotEmpty(message = "FullName is required")
	private String fullName;
	
	@NotEmpty(message = "Description is required")
	private String description;
	
	@NotEmpty(message = "Email is required")
	private String email;
	
	private String photoUrl;
	
	@NotEmpty(message = "UserName is required")
	private String password;
	
	private String confirmPassword;
}