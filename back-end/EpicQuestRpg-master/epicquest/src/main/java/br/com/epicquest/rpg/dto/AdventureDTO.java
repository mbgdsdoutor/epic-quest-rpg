package br.com.epicquest.rpg.dto;

import java.io.Serializable;
import java.util.List;

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
public class AdventureDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "Name is required")
	private String name;
	
	@NotBlank(message = "Photo is required")
	private String photoUrl;
	
	@NotBlank(message = "Description is required")
	private String description;
	
	@NotBlank(message = "Master is required")
	private UserDTO master;
	
	private List<UserDTO> users;
	private List<PlayerDTO> players;
	private boolean status;
}
