package com.poke.dao;

import com.poke.model.Pokemon;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PokemonDao extends CrudRepository<Pokemon, Integer>{

    
}