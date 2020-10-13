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
@EqualsAndHashCode(of = "userId")
public class UserDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private Long userId;

	@NotBlank(message = "UserName is required")
	private String userName;

	@NotBlank(message = "FullName is required")
	private String fullName;
	
	@NotBlank(message = "Birthday is required")
	private Date birthday;
	
	@NotBlank(message = "Email is required")
	private String email;

	@NotBlank(message = "UserName is required")
	private String password;
	
	private String confirmPassword;
}