package com.poke.controller;

import com.poke.calculation.DamageCalculation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/damage")
public class DamageController {

    @Autowired
    private DamageCalculation dc;

    @GetMapping("/calc/{}")
    public double damageCalc() {
        return 1;
    }
    
}