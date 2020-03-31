package com.poke.controller;

import com.poke.model.Pokemon;
import com.poke.service.PokemonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    @Autowired
    private PokemonService ps;

    @GetMapping("/all")
    public Iterable<Pokemon> getAllPokemon() {
        return ps.getAll();
    }

    @GetMapping("/{id}")
    public Pokemon getPokemonById(@PathVariable("id") int id) {
        if (ps.getById(id).isPresent()) {
            return ps.getById(id).get();
        }
        return null;
    }

    @PostMapping("/create")
    public String insertPokemon(@RequestBody Pokemon p) {
        
        ps.insert(p);
        return "Your Pokemon Has Been Saved";
    }

    @PutMapping("/update")
    public String updatePokemon(@RequestBody Pokemon p) {
        ps.update(p);
        return "Your Pokemon Has Been Updated";
    }
    @DeleteMapping("/delete")
    public String deletePokemon(@RequestBody Pokemon p) {
        ps.delete(p);
        return "Your Pokemon Has Been Deleted";
    }

}