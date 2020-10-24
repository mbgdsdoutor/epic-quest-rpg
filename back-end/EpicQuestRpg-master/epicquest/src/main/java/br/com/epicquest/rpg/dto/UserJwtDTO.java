package br.com.epicquest.rpg.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class UserJwtDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private UserDTO User;
	
	private String Token;
}
