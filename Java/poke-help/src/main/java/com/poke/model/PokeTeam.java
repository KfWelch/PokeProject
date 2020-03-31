package com.poke.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class PokeTeam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int poke_team_id;
    @Column
    private String poke_team_name;
    @OneToOne
    private User user;  
    @OneToMany(mappedBy = "pokemon_team",cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Pokemon> pokemon;


    public PokeTeam() {
    }

    public PokeTeam(int poke_team_id, String poke_team_name, User user, List<Pokemon> pokemon) {
        this.poke_team_id = poke_team_id;
        this.poke_team_name = poke_team_name;
        this.user = user;
        this.pokemon = pokemon;
    }

    public PokeTeam(String poke_team_name, User user, List<Pokemon> pokemon) {
        this.poke_team_name = poke_team_name;
        this.user = user;
        this.pokemon = pokemon;
    }

    public int getPoke_team_id() {
        return this.poke_team_id;
    }

    public void ListPoke_team_id(int poke_team_id) {
        this.poke_team_id = poke_team_id;
    }

    public String getPoke_team_name() {
        return this.poke_team_name;
    }

    public void ListPoke_team_name(String poke_team_name) {
        this.poke_team_name = poke_team_name;
    }

    public User getUser() {
        return this.user;
    }

    public void ListUser(User user) {
        this.user = user;
    }

    public List<Pokemon> getPokemon() {
        return this.pokemon;
    }

    public void ListPokemon(List<Pokemon> pokemon) {
        this.pokemon = pokemon;
    }

    @Override
    public String toString() {
        return "{" +
            " poke_team_id='" + getPoke_team_id() + "'" +
            ", poke_team_name='" + getPoke_team_name() + "'" +
            ", user='" + getUser() + "'" +
            ", pokemon='" + getPokemon() + "'" +
            "}";
    }


}