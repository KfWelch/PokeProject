package com.poke.controller;

import com.poke.model.User;
import com.poke.service.UserService;

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
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService us;

    @GetMapping("/all")
    public Iterable<User> getAllUser() {
        return us.getAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") int id) {
        if (us.getById(id).isPresent()) {
            return us.getById(id).get();
        }
        return null;
    }

    @PostMapping("/create")
    public String insertUser(@RequestBody User p) {
        us.insert(p);
        return "Your User Has Been Saved";
    }

    @PutMapping("/update")
    public String updateUser(@RequestBody User p) {
        us.update(p);
        return "Your User Has Been Updated";
    }
    @DeleteMapping("/delete")
    public String deleteUser(@RequestBody User p) {
        us.delete(p);
        return "Your User Has Been Deleted";
    }
}