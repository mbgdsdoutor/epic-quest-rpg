package br.com.epicquest.rpg.dto;

import java.io.Serializable;

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
public class PericiaDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	private String description;
	// attribute: AttributesEnum,
	private boolean onlyTrained;
	private boolean armorPenalty;
}
