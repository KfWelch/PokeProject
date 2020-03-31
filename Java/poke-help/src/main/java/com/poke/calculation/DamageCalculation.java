/**
 * 
 * Initial Damage Formula procured @ 
 * https://brilliant.org/discussions/thread/pokemon-damage-formula/
 * 
 * Broken down in a format that made it easier to replicate
 * 
 */
package com.poke.calculation;

import com.poke.model.Damage;

//team pokemon, opponent pokemon, team modifiers, opponent modifiers
public class DamageCalculation {

    /**
     * This method returns a number between min inclusive and 
     * max inclusive. 
     * Used exclusively for the calculate damage method;
     * 
     * @param min
     * @param max
     * @return
     */
    private double rand(int min,int max) {
        return min + (Math.random() * ((max - min) + 1/*+1 makes max inclusive */));
    }

    /**
     * This method returns a double to determine how much damage an attack does to a
     * pokemon utilizing both pokemons stats and types of the attack and of the
     * pokemon as parameters
     * 
     * @param isMaxed
     * @param attackType
     * @param attackPower
     * @param baseAttackStat
     * @param teamIv
     * @param teamEv
     * @param teamNature
     * @param attackStatModifer
     * @param baseDefenseStat
     * @param opponentIv
     * @param opponentEv
     * @param opponentNature
     * @param defenseStatModifier
     * @param teamType
     * @param opponentTypes
     * @param baseHpStat
     * @param opponentHpIv
     * @param opponentHpEv
     * @param isMovePhysical
     * @return
     */
    public double calculateDamage(Damage damage) {
        
        boolean isStab  = (damage.getAttackType().equals(damage.getTeamType()))?true:false;
        double stab = (isStab)?1.5:1.0;
        double teamLevel = (damage.getIsMaxed())?100:50;
        double opponentLevel  = (damage.getIsMaxed())?100:50;
        
        return (((2*teamLevel+10)/250)*damage.getAttackPower()*((((2*damage.getBaseAttackStat()+damage.getTeamIv()+(damage.getTeamEv()/4))*
        (teamLevel/100)+5)*Matrix.teamNatureModifier(damage.getIsMovePhysical(), damage.getTeamNature())*damage.getAttackStatModifer())/
        (((2*damage.getBaseDefenseStat()+damage.getOpponentIv()+(damage.getOpponentEv()/4))*(opponentLevel/100)+5)*
        Matrix.opponentNatureModifier(damage.isIsMovePhysical(), damage.getOpponentNature())*damage.getDefenseStatModifier()))+2)*
        stab*Matrix.typeModifier(damage.getTeamType(), damage.getOpponentTypes())*(rand(85, 100)/100)/
        (2*damage.getBaseHpStat()+damage.getOpponentHpIv()+(damage.getOpponentHpEv()/4))*(opponentLevel/100)+10+opponentLevel;
       
    }


    

}
