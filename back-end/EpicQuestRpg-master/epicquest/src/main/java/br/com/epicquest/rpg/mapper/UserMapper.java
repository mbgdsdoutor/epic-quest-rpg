package br.com.epicquest.rpg.mapper;

import org.mapstruct.Mapper;

import br.com.epicquest.rpg.dto.UserDTO;
import br.com.epicquest.rpg.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

	User toModel(UserDTO dto);

	UserDTO toDto(User model);
}
