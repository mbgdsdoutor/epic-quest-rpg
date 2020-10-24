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
public class RaceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private Integer strengthPoints;
	private Integer wisdomPoints;
	private Integer dexterityPoints;
	private Integer constitutionPoints;
	private Integer intelligencePoints;
	private Integer charismaPoints;
	private Integer freePoints;
	private List<PericiaDTO> pericias;
	private List<PoderDTO> poderes;
}
