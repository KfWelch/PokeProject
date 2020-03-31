package com.poke.controller;

import com.poke.model.PokeTeam;
import com.poke.service.PokeTeamService;

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
@RequestMapping("/poketeam")
public class PokeTeamController {

    @Autowired
    private PokeTeamService pts;

    @GetMapping("/all")
    public Iterable<PokeTeam> getAllPokeTeam() {
        return pts.getAll();
    }

    @GetMapping("/{id}")
    public PokeTeam getPokeTeamById(@PathVariable("id") int id) {
        if (pts.getById(id).isPresent()) {
            return pts.getById(id).get();
        }
        return null;
    }

    @PostMapping("/create")
    public String insertPokeTeam(@RequestBody PokeTeam p) {
        pts.insert(p);
        return "Your PokeTeam Has Been Saved";
    }

    @PutMapping("/update")
    public String updatePokeTeam(@RequestBody PokeTeam p) {
        pts.update(p);
        return "Your PokeTeam Has Been Updated";
    }
    @DeleteMapping("/delete")
    public String deletePokeTeam(@RequestBody PokeTeam p) {
        pts.delete(p);
        return "Your PokeTeam Has Been Deleted";
    }
}