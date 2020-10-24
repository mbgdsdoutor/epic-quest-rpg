package br.com.epicquest.rpg.dto;

import java.io.Serializable;
import java.util.List;

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
public class DeusDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String description;
	private String objective;
	private List<Integer> classesAllowed;
	private List<Integer> racesAllowed;
	private String symbol;
	private String energy;
	private String weapon;
	// obligations: any, // ????
	// restrictions: any, // ????
	private List<PoderDTO> poderes;
}
