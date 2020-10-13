package br.com.epicquest.rpg.mapper;

import org.springframework.stereotype.Service;

import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.ConfigurableMapper;
import ma.glasnost.orika.impl.DefaultMapperFactory;
import ma.glasnost.orika.metadata.ClassMapBuilder;

@Service
public class ConverterMapper extends ConfigurableMapper {

	public <S, D> D map(S source, Class<D> destinationClass, String... fields) {
		MapperFactory mapperFactory = new DefaultMapperFactory.Builder().build();
		ClassMapBuilder<? extends Object, D> classMap = mapperFactory.classMap(source.getClass(), destinationClass).constructorA().constructorB();
		for (String field : fields) {
			classMap = classMap.exclude(field);
		}
		classMap.byDefault().register();
		return mapperFactory.getMapperFacade().map(source, destinationClass);
	}
}