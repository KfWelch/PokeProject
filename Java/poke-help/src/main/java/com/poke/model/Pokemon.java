package com.poke.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Pokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int pokemon_id;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private PokeTeam pokemon_team;


    public Pokemon() {
    }

    public Pokemon(int pokemon_id, PokeTeam pokemon_team) {
        this.pokemon_id = pokemon_id;
        this.pokemon_team = pokemon_team;
    }

    public int getPokemon_id() {
        return this.pokemon_id;
    }

    public void setPokemon_id(int pokemon_id) {
        this.pokemon_id = pokemon_id;
    }

    public PokeTeam getPokemon_team() {
        return this.pokemon_team;
    }

    public void setPokemon_team(PokeTeam pokemon_team) {
        this.pokemon_team = pokemon_team;
    }

    @Override
    public String toString() {
        return "{" +
            " pokemon_id='" + getPokemon_id() + "'" +
            ", pokemon_team='" + getPokemon_team() + "'" +
            "}";
    }

}