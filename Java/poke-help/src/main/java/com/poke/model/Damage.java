package com.poke.model;

public class Damage {

    private boolean isMaxed; 
    private String attackType;
    private double attackPower;
    private double baseAttackStat;
    private double teamIv;
    private double teamEv;
    private String teamNature;
    private double attackStatModifer;
    private double baseDefenseStat;
    private double opponentIv;
    private double opponentEv;
    private String opponentNature;
    private double defenseStatModifier;
    private String teamType;
    private String[] opponentTypes; 
    private double baseHpStat;
    private double opponentHpIv;
    private double opponentHpEv;
    private boolean isMovePhysical;


    public Damage() {
    }

    public Damage(boolean isMaxed, String attackType, double attackPower, double baseAttackStat, double teamIv, double teamEv, String teamNature, double attackStatModifer, double baseDefenseStat, double opponentIv, double opponentEv, String opponentNature, double defenseStatModifier, String teamType, String[] opponentTypes, double baseHpStat, double opponentHpIv, double opponentHpEv, boolean isMovePhysical) {
        this.isMaxed = isMaxed;
        this.attackType = attackType;
        this.attackPower = attackPower;
        this.baseAttackStat = baseAttackStat;
        this.teamIv = teamIv;
        this.teamEv = teamEv;
        this.teamNature = teamNature;
        this.attackStatModifer = attackStatModifer;
        this.baseDefenseStat = baseDefenseStat;
        this.opponentIv = opponentIv;
        this.opponentEv = opponentEv;
        this.opponentNature = opponentNature;
        this.defenseStatModifier = defenseStatModifier;
        this.teamType = teamType;
        this.opponentTypes = opponentTypes;
        this.baseHpStat = baseHpStat;
        this.opponentHpIv = opponentHpIv;
        this.opponentHpEv = opponentHpEv;
        this.isMovePhysical = isMovePhysical;
    }

    public boolean isIsMaxed() {
        return this.isMaxed;
    }

    public boolean getIsMaxed() {
        return this.isMaxed;
    }

    public void setIsMaxed(boolean isMaxed) {
        this.isMaxed = isMaxed;
    }

    public String getAttackType() {
        return this.attackType;
    }

    public void setAttackType(String attackType) {
        this.attackType = attackType;
    }

    public double getAttackPower() {
        return this.attackPower;
    }

    public void setAttackPower(double attackPower) {
        this.attackPower = attackPower;
    }

    public double getBaseAttackStat() {
        return this.baseAttackStat;
    }

    public void setBaseAttackStat(double baseAttackStat) {
        this.baseAttackStat = baseAttackStat;
    }

    public double getTeamIv() {
        return this.teamIv;
    }

    public void setTeamIv(double teamIv) {
        this.teamIv = teamIv;
    }

    public double getTeamEv() {
        return this.teamEv;
    }

    public void setTeamEv(double teamEv) {
        this.teamEv = teamEv;
    }

    public String getTeamNature() {
        return this.teamNature;
    }

    public void setTeamNature(String teamNature) {
        this.teamNature = teamNature;
    }

    public double getAttackStatModifer() {
        return this.attackStatModifer;
    }

    public void setAttackStatModifer(double attackStatModifer) {
        this.attackStatModifer = attackStatModifer;
    }

    public double getBaseDefenseStat() {
        return this.baseDefenseStat;
    }

    public void setBaseDefenseStat(double baseDefenseStat) {
        this.baseDefenseStat = baseDefenseStat;
    }

    public double getOpponentIv() {
        return this.opponentIv;
    }

    public void setOpponentIv(double opponentIv) {
        this.opponentIv = opponentIv;
    }

    public double getOpponentEv() {
        return this.opponentEv;
    }

    public void setOpponentEv(double opponentEv) {
        this.opponentEv = opponentEv;
    }

    public String getOpponentNature() {
        return this.opponentNature;
    }

    public void setOpponentNature(String opponentNature) {
        this.opponentNature = opponentNature;
    }

    public double getDefenseStatModifier() {
        return this.defenseStatModifier;
    }

    public void setDefenseStatModifier(double defenseStatModifier) {
        this.defenseStatModifier = defenseStatModifier;
    }

    public String getTeamType() {
        return this.teamType;
    }

    public void setTeamType(String teamType) {
        this.teamType = teamType;
    }

    public String[] getOpponentTypes() {
        return this.opponentTypes;
    }

    public void setOpponentTypes(String[] opponentTypes) {
        this.opponentTypes = opponentTypes;
    }

    public double getBaseHpStat() {
        return this.baseHpStat;
    }

    public void setBaseHpStat(double baseHpStat) {
        this.baseHpStat = baseHpStat;
    }

    public double getOpponentHpIv() {
        return this.opponentHpIv;
    }

    public void setOpponentHpIv(double opponentHpIv) {
        this.opponentHpIv = opponentHpIv;
    }

    public double getOpponentHpEv() {
        return this.opponentHpEv;
    }

    public void setOpponentHpEv(double opponentHpEv) {
        this.opponentHpEv = opponentHpEv;
    }

    public boolean isIsMovePhysical() {
        return this.isMovePhysical;
    }

    public boolean getIsMovePhysical() {
        return this.isMovePhysical;
    }

    public void setIsMovePhysical(boolean isMovePhysical) {
        this.isMovePhysical = isMovePhysical;
    }

    @Override
    public String toString() {
        return "{" +
            " isMaxed='" + isIsMaxed() + "'" +
            ", attackType='" + getAttackType() + "'" +
            ", attackPower='" + getAttackPower() + "'" +
            ", baseAttackStat='" + getBaseAttackStat() + "'" +
            ", teamIv='" + getTeamIv() + "'" +
            ", teamEv='" + getTeamEv() + "'" +
            ", teamNature='" + getTeamNature() + "'" +
            ", attackStatModifer='" + getAttackStatModifer() + "'" +
            ", baseDefenseStat='" + getBaseDefenseStat() + "'" +
            ", opponentIv='" + getOpponentIv() + "'" +
            ", opponentEv='" + getOpponentEv() + "'" +
            ", opponentNature='" + getOpponentNature() + "'" +
            ", defenseStatModifier='" + getDefenseStatModifier() + "'" +
            ", teamType='" + getTeamType() + "'" +
            ", opponentTypes='" + getOpponentTypes() + "'" +
            ", baseHpStat='" + getBaseHpStat() + "'" +
            ", opponentHpIv='" + getOpponentHpIv() + "'" +
            ", opponentHpEv='" + getOpponentHpEv() + "'" +
            ", isMovePhysical='" + isIsMovePhysical() + "'" +
            "}";
    }

}