package com.poke.dao;

import com.poke.model.PokeTeam;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PokeTeamDao  extends CrudRepository<PokeTeam, Integer>{

    
}