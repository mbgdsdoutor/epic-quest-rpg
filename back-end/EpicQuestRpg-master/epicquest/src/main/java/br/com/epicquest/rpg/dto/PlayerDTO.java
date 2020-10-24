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
public class PlayerDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String photoUrl;
	private UserDTO user;
	private Integer nivel;
	private AdventureDTO adventure;
	private ClasseDTO classe;
	private RaceDTO race;
	// alignment: AlignmentEnum,
	private Integer age;
	private OriginDTO origem;
	private Integer lifePoints;
	private Integer manaPoints;
	private Integer totalLifePoints;
	private Integer totalManaPoints;
	private Integer caPoints;
	private Integer displacement;
	private Integer strength;
	private Integer wisdom;
	private Integer dexterity;
	private Integer constitution;
	private Integer intelligence;
	private Integer charisma;
	private List<ItemDTO> items;
	private List<PericiaDTO> pericias;
	private List<PoderDTO> poderes;
	private Integer tibar;
	private DeusDTO deus;
}
