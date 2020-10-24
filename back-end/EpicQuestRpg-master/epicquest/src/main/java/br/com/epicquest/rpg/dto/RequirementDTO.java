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
public class RequirementDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	  private Long id;
	  private Integer strengthPoints;
	  private Integer wisdomPoints;
	  private Integer dexterityPoints;
	  private Integer constitutionPoints;
	  private Integer intelligencePoints;
	  private Integer charismaPoints;
	  //private List<Integer> PoderesIds: number[],
	  //PericiasIds: number[],
	  //DeusId: number,
}
