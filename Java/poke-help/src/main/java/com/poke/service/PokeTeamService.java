package com.poke.service;

import java.util.Optional;

import com.poke.dao.PokeTeamDao;
import com.poke.model.PokeTeam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PokeTeamService {

    @Autowired
    private PokeTeamDao ptd;

    public Iterable<PokeTeam> getAll() {
        return ptd.findAll();
    }

    public Optional<PokeTeam> getById(int id) {
        return ptd.findById(id);
    }

    public void insert(PokeTeam p) {
        ptd.save(p);
    }

    public void update(PokeTeam p) {
        ptd.save(p);
    }

    public void delete(PokeTeam p) {
        ptd.delete(p);
    }
}