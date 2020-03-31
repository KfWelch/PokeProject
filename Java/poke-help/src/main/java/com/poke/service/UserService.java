package com.poke.service;

import java.util.Optional;

import com.poke.dao.UserDao;
import com.poke.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserDao ud;

    public Iterable<User> getAll() {
        return ud.findAll();
    }

    public Optional<User> getById(int id) {
        return ud.findById(id);
    }

    public void insert(User p) {
        ud.save(p);
    }

    public void update(User p) {
        ud.save(p);
    }

    public void delete(User p) {
        ud.delete(p);
    }

}