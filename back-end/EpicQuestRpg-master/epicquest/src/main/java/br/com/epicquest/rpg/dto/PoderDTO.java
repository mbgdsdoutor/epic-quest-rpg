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
public class PoderDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Integer id;
	private String name;
	private String description;
	private String category;
	private RequirementDTO requirement;
}
