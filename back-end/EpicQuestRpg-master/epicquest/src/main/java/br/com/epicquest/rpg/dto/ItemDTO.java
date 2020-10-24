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
public class ItemDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String description;
	private Long value;
	private Integer damageDice;
	private Integer additionalDamagePoints;
	private Integer penaltyDice;
	private Integer penaltyPoints;
	private Integer caPoints;
	private boolean consumable;
	private Integer consumableEffectDice;
	private Integer consumableEffectDiceAdditional;
	private Integer consumableEffectDiceDuration;
	private Integer lifePointsEffect;
	private Integer manaPointsEffect;
	private Integer strengthPointsEffect;
	private Integer wisdomPointsEffect;
	private Integer dexterityPointsEffect;
	private Integer constitutionPointsEffect;
	private Integer intelligencePointsEffect;
	private Integer charismaPointsEffect;
	private Integer periciaId;
	private Integer periciaValueModifier;
	private RequirementDTO requirement;
}
