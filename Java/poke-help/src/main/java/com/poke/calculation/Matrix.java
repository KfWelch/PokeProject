package com.poke.calculation;

public class Matrix {

    private static final String[][] POKEMON_NATURE={
        {"Hardy","Lonely", "Adamant", "Naughty", "Brave"},
        {"Bold", "Docile", "Impish", "Lax", "Relaxed"},
        {"Modest", "Mild", "Bashful", "Rash", "Quiet"},
        {"Calm", "Gentle", "Careful", "Quirky", "Sassy"},
        {"Timid", "Hasty", "Jolly", "Naive", "Serious"}
    };
       
    private static final String[] ATTACKING_TYPES={
        "Normal", "Fighting", "Flying", "Poison", "Ground", 
        "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", 
        "Grass", "Electric", "Psychic", "Ice", "Dragon", 
        "Dark", "Fairy"
    };

    private static final double[] TYPE_MULTIPLIER ={ 0, 0.5, 1, 2};
    private static final double[] NATURE_MULTIPLIER ={0.9, 1.0, 1.1};


    public static double typeModifier(String attackingTeamType, String[] defendingOpponentTypes){
        double tempModifer = 0;
        if(defendingOpponentTypes.length>1){
                tempModifer += typeModifier(attackingTeamType, defendingOpponentTypes[0]);
                tempModifer *= typeModifier(attackingTeamType, defendingOpponentTypes[1]);
                return tempModifer;
        }
        tempModifer = typeModifier(attackingTeamType, defendingOpponentTypes[0]);
        return tempModifer;
    }
    
    private static double typeModifier(String teamType1, String opponentType1){
        for (int i=0; i<ATTACKING_TYPES.length; ++i){

            //Same type Switch case
            if(teamType1.equals(opponentType1)){
                //x0.5
                switch (teamType1) {
                    case "Poison":
                    case "Steel":
                    case "Fire":
                    case "Water":
                    case "Grass":
                    case "Electric":
                    case "Psychic":
                    case "Ice":
                    case "Dark":
                        return TYPE_MULTIPLIER[1];
                    default:
                        //x2
                        switch (teamType1) {
                            case "Ghost":
                            case "Dragon":
                                return TYPE_MULTIPLIER[3];
                            default:
                                break;
                        }
                }
            }
            
            //Normal
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[0])) {
                //If Attacking Type equals normal and ( param2 equals a specific type that is(x0.5) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[5])||opponentType1.equals(ATTACKING_TYPES[8]))){
                    return TYPE_MULTIPLIER[1];
                }
                //else If Attacking Type equals normal and ( param2 equals a specific type that is(x0) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[7])){
                    return TYPE_MULTIPLIER[0];
                }
                
            }
            //Fighting
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[1])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[0])||opponentType1.equals(ATTACKING_TYPES[5])||opponentType1.equals(ATTACKING_TYPES[8])||opponentType1.equals(ATTACKING_TYPES[14])||opponentType1.equals(ATTACKING_TYPES[16]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[2])||opponentType1.equals(ATTACKING_TYPES[3])||opponentType1.equals(ATTACKING_TYPES[6])||opponentType1.equals(ATTACKING_TYPES[13])||opponentType1.equals(ATTACKING_TYPES[17]))){
                    return TYPE_MULTIPLIER[1];
                }
                //else If Attacking Type equals param1 and ( param2 equals a specific type that is(x0) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[7])){
                    return TYPE_MULTIPLIER[0];
                }
                
            }
            //Flying
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[2])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[1])||opponentType1.equals(ATTACKING_TYPES[6])||opponentType1.equals(ATTACKING_TYPES[11]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[5])||opponentType1.equals(ATTACKING_TYPES[8])||opponentType1.equals(ATTACKING_TYPES[12]))){
                    return TYPE_MULTIPLIER[1];
                }
                
            }
            //Poison
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[3])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[11])||opponentType1.equals(ATTACKING_TYPES[17]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[4])||opponentType1.equals(ATTACKING_TYPES[5])||opponentType1.equals(ATTACKING_TYPES[7])||opponentType1.equals(ATTACKING_TYPES[13])||opponentType1.equals(ATTACKING_TYPES[17]))){
                    return TYPE_MULTIPLIER[1];
                }
                //else If Attacking Type equals param1 and ( param2 equals a specific type that is(x0) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[8])){
                    return TYPE_MULTIPLIER[0];
                }
                
            }
            //Ground
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[4])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[3])||opponentType1.equals(ATTACKING_TYPES[5])||opponentType1.equals(ATTACKING_TYPES[8])||opponentType1.equals(ATTACKING_TYPES[9])||opponentType1.equals(ATTACKING_TYPES[12]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[6])||opponentType1.equals(ATTACKING_TYPES[11]))){
                    return TYPE_MULTIPLIER[1];
                }
                //else If Attacking Type equals param1 and ( param2 equals a specific type that is(x0) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[2])){
                    return TYPE_MULTIPLIER[0];
                }
                
            }
            //Rock
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[5])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[2])||opponentType1.equals(ATTACKING_TYPES[6])||opponentType1.equals(ATTACKING_TYPES[9])||opponentType1.equals(ATTACKING_TYPES[14]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[1])||opponentType1.equals(ATTACKING_TYPES[4])||opponentType1.equals(ATTACKING_TYPES[8])||opponentType1.equals(ATTACKING_TYPES[13])||opponentType1.equals(ATTACKING_TYPES[17]))){
                    return TYPE_MULTIPLIER[1];
                }
                
            }
            //Bug
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[6])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[11])||opponentType1.equals(ATTACKING_TYPES[13])||opponentType1.equals(ATTACKING_TYPES[16]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[1])||opponentType1.equals(ATTACKING_TYPES[2])||opponentType1.equals(ATTACKING_TYPES[3])||opponentType1.equals(ATTACKING_TYPES[7])||opponentType1.equals(ATTACKING_TYPES[8])||opponentType1.equals(ATTACKING_TYPES[9])||opponentType1.equals(ATTACKING_TYPES[17]))){
                    return TYPE_MULTIPLIER[1];
                }
                
            }
            //Ghost
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[7])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[13])){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[16])){
                    return TYPE_MULTIPLIER[1];
                }
                //else If Attacking Type equals param1 and ( param2 equals a specific type that is(x0) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[0])){
                    return TYPE_MULTIPLIER[0];
                }
                
            }
            //Steel
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[8])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[5])||opponentType1.equals(ATTACKING_TYPES[14])||opponentType1.equals(ATTACKING_TYPES[17]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[9])||opponentType1.equals(ATTACKING_TYPES[10])||opponentType1.equals(ATTACKING_TYPES[12]))){
                    return TYPE_MULTIPLIER[1];
                }
                
            }
            //Fire
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[9])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[6])||opponentType1.equals(ATTACKING_TYPES[8])||opponentType1.equals(ATTACKING_TYPES[11])||opponentType1.equals(ATTACKING_TYPES[14]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[5])||opponentType1.equals(ATTACKING_TYPES[10])||opponentType1.equals(ATTACKING_TYPES[15]))){
                    return TYPE_MULTIPLIER[1];
                }
                
            }
            //Water
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[10])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[4])||opponentType1.equals(ATTACKING_TYPES[5])||opponentType1.equals(ATTACKING_TYPES[9]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[11])||opponentType1.equals(ATTACKING_TYPES[15]))){
                    return TYPE_MULTIPLIER[1];
                }
                
            }
            //Grass
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[11])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[4])||opponentType1.equals(ATTACKING_TYPES[5])||opponentType1.equals(ATTACKING_TYPES[10]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[2])||opponentType1.equals(ATTACKING_TYPES[3])||opponentType1.equals(ATTACKING_TYPES[6])||opponentType1.equals(ATTACKING_TYPES[8])||opponentType1.equals(ATTACKING_TYPES[9])||opponentType1.equals(ATTACKING_TYPES[15]))){
                    return TYPE_MULTIPLIER[1];
                }
                
            }
            //Electric
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[12])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[2])||opponentType1.equals(ATTACKING_TYPES[10]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[11])||opponentType1.equals(ATTACKING_TYPES[15]))){
                    return TYPE_MULTIPLIER[1];
                }
                //else If Attacking Type equals param1 and ( param2 equals a specific type that is(x0) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[4])){
                    return TYPE_MULTIPLIER[0];
                }
                
            }
            //Psychic
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[13])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[1])||opponentType1.equals(ATTACKING_TYPES[3]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[8])){
                    return TYPE_MULTIPLIER[1];
                }
                //else If Attacking Type equals param1 and ( param2 equals a specific type that is(x0) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[16])){
                    return TYPE_MULTIPLIER[0];
                }
                
            }
            //Ice
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[14])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[2])||opponentType1.equals(ATTACKING_TYPES[4])||opponentType1.equals(ATTACKING_TYPES[11])||opponentType1.equals(ATTACKING_TYPES[15]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[8])||opponentType1.equals(ATTACKING_TYPES[9])||opponentType1.equals(ATTACKING_TYPES[10]))){
                    return TYPE_MULTIPLIER[1];
                }
                
            }
            //Dragon
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[15])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[8])){
                    return TYPE_MULTIPLIER[1];
                }
                //else If Attacking Type equals param1 and ( param2 equals a specific type that is(x0) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&opponentType1.equals(ATTACKING_TYPES[17])){
                    return TYPE_MULTIPLIER[0];
                }
                
            }
            //Dark
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[16])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[7])||opponentType1.equals(ATTACKING_TYPES[13]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[1])||opponentType1.equals(ATTACKING_TYPES[17]))){
                    return TYPE_MULTIPLIER[1];
                }
                
            }
            //Fairy
            if (ATTACKING_TYPES[i].equals(ATTACKING_TYPES[17])) {
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x2) )
                if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[1])||opponentType1.equals(ATTACKING_TYPES[15])||opponentType1.equals(ATTACKING_TYPES[16]))){
                    return TYPE_MULTIPLIER[3];
                }
                //If Attacking Type equals param1 and ( param2 equals a specific type that is(x0.5) )
                else if (ATTACKING_TYPES[i].equals(teamType1)&&(opponentType1.equals(ATTACKING_TYPES[3])||opponentType1.equals(ATTACKING_TYPES[8])||opponentType1.equals(ATTACKING_TYPES[9]))){
                    return TYPE_MULTIPLIER[1];
                }
                
            }
            
        }
        
        return TYPE_MULTIPLIER[2];
    }


    public static double teamNatureModifier(boolean isMovePhysical, String nature){
        
        for(int row = 0; row < POKEMON_NATURE.length; ++row){
            for(int column = 0; column < POKEMON_NATURE[row].length; ++column){
                if(nature.equals(POKEMON_NATURE[row][column])){

                    if( (isMovePhysical&&(row==1&&column!=1)) || 
                    (!isMovePhysical&&(row==2&&column!=2))){

                        return NATURE_MULTIPLIER[2];

                    }else if( (isMovePhysical&&(row!=1&&column==1)) || 
                    (!isMovePhysical&&(row!=2&&column==2)) ){

                        return NATURE_MULTIPLIER[0];
                    }
                }
            }
        }
        return NATURE_MULTIPLIER[1];
    }

    public static double opponentNatureModifier(boolean isMovePhysical, String nature){
        for(int row = 0; row < POKEMON_NATURE.length; ++row){
            for(int column = 0; column < POKEMON_NATURE[row].length; ++column){

                if(nature.equals(POKEMON_NATURE[row][column])){

                    if( (isMovePhysical&&(row==3&&column!=3)) || 
                    (!isMovePhysical&&(row==4&&column!=4))){

                        return NATURE_MULTIPLIER[2];

                    }else if( (isMovePhysical&&(row!=3&&column==3)) || 
                    (!isMovePhysical&&(row!=4&&column==4)) ){

                        return NATURE_MULTIPLIER[0];
                    }
                }
            }
        }
        return NATURE_MULTIPLIER[1];
    }
    
}