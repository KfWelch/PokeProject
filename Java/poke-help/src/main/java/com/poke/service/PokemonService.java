package com.poke.service;

import java.util.Optional;

import com.poke.dao.PokemonDao;
import com.poke.model.Pokemon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {

    @Autowired
    private PokemonDao pd;

    public Iterable<Pokemon> getAll() {
        return pd.findAll();
    }

    public Optional<Pokemon> getById(int id) {
        return pd.findById(id);
    }

    public void insert(Pokemon p) {
        pd.save(p);
    }

    public void update(Pokemon p) {
        pd.save(p);
    }

    public void delete(Pokemon p) {
        pd.delete(p);
    }


}