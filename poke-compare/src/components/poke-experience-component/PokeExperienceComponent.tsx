import { FormControlLabel, Radio, RadioGroup, Slider } from '@material-ui/core';
import React, { useState } from 'react';
import { Container } from 'reactstrap';

enum LevelingType {
    FAST = "fast",
    MED_FAST = "med-fast",
    MED_SLOW = "med-slow",
    SLOW = "slow"
};

const getLevelingType = (type: string): LevelingType => {
    switch (type) {
        case 'fast': return LevelingType.FAST;
        case 'med-fast': return LevelingType.MED_FAST;
        case 'med-slow': return LevelingType.MED_SLOW;
        case 'slow': return LevelingType.SLOW;
        default: return LevelingType.MED_FAST;
    }
}

enum CalculatorType {
    LEVEL = "level",
    EXP = "experience"
}

const getCalculatorType = (type: string): CalculatorType => {
    switch (type) {
        case 'level': return CalculatorType.LEVEL;
        case 'experience': return CalculatorType.EXP;
        default: return CalculatorType.LEVEL;
    }
} 

const valueText = (value: number) => (`Level ${value}`);

const PokeExperience = () => {
    const [calculatorType, setCalculatorType] = useState(CalculatorType.LEVEL)
    const [currentLevel, setCurrentLevel] = useState(0);
    const [currentExp, setCurrentExp] = useState(0);
    const [targetLevel, setTargetLevel] = useState(100);
    const [levelingType, setLevelingType] = useState<LevelingType>(LevelingType.FAST);

    const expLevelSlow = (level: number): number => (1.25 * Math.pow(level, 3));

    const expLevelMedSlow = (level: number): number => (1.2 * Math.pow(level, 3) - 15 * Math.pow(level, 2) + 100 * level - 140);

    const expLevelMedFast = (level: number): number => (Math.pow(level, 3));

    const expLevelFast = (level: number): number => (.8 * Math.pow(level, 3));

    const expByLevel = (level: number): number => {
        switch (levelingType) {
            case LevelingType.FAST: return expLevelFast(level);
            case LevelingType.MED_FAST: return expLevelMedFast(level);
            case LevelingType.MED_SLOW: return expLevelMedSlow(level);
            case LevelingType.SLOW: return expLevelSlow(level);
            default: return expLevelMedFast(level);
        }
    }

    const expDiffByLevel = () => {
        switch (levelingType) {
            case LevelingType.FAST:
                return expLevelFast(targetLevel) - expLevelFast(currentLevel);
            case LevelingType.MED_FAST:
                return expLevelMedFast(targetLevel) - expLevelMedFast(currentLevel);
            case LevelingType.MED_SLOW:
                return expLevelMedSlow(targetLevel) - expLevelMedSlow(currentLevel);
            case LevelingType.SLOW:
                return expLevelSlow(targetLevel) - expLevelSlow(currentLevel);
        }
    }

    const expDiff = () => {
        switch (levelingType) {
            case LevelingType.FAST:
                return expLevelFast(targetLevel) - currentExp;
            case LevelingType.MED_FAST:
                return expLevelMedFast(targetLevel) - currentExp;
            case LevelingType.MED_SLOW:
                return expLevelMedSlow(targetLevel) - currentExp;
            case LevelingType.SLOW:
                return expLevelSlow(targetLevel) - currentExp;
        }
    }

    const currentView = () => {
        if (calculatorType === CalculatorType.LEVEL) {
            return (
                <>
                    <h5>Choose current level</h5>
                    <Slider
                        defaultValue={1}
                        getAriaValueText={valueText}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        // @ts-ignore
                        onChange={(event, value) => setCurrentLevel(value)}
                        step={1}
                        min={1}
                        max={100}
                    />
                    <h6>{currentLevel}</h6>
                </>
            )
        } else {
            return (
                <>
                    <h5>Choose current experience points</h5>
                    <Slider
                        defaultValue={1}
                        getAriaValueText={valueText}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        // @ts-ignore
                        onChange={(event, value) => setCurrentExp(value)}
                        step={1}
                        min={1}
                        max={expByLevel(100)}
                    />
                    <h6>{currentExp}</h6>
                </>
            )
        }
    }

    const expNeededView = () => (calculatorType === CalculatorType.LEVEL 
        ? <><h5>Exp Needed</h5><h6>{expDiffByLevel()}</h6></>
        : <><h5>Exp Needed</h5><h6>{expDiff()}</h6></>
    );

    return (
        <Container style={{width: "90%", paddingTop: 20, alignItems: 'center'}}>
            <h4>Choose Calculator Type</h4>
            <RadioGroup row aria-label="Calculator Type" name="Calculator Type" value={calculatorType} onChange={(event, value) => setCalculatorType(getCalculatorType(value))}>
                <FormControlLabel value={CalculatorType.LEVEL} control={<Radio />} label="Level" />
                <FormControlLabel value={CalculatorType.EXP} control={<Radio />} label="Experience" />
            </RadioGroup>
            <div />
                {currentView()}
            <div />
            <h5>Choose target level</h5>
            QuiteElegantD4927!
            <Slider
                defaultValue={1}
                getAriaValueText={valueText}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                // @ts-ignore
                onChange={(event, value) => setTargetLevel(value)}
                step={1}
                min={1}
                max={100}
            />
            <h6>{targetLevel}</h6>
            <RadioGroup row aria-label="Leveling Type" name="Leveling Type" value={levelingType} onChange={(event, value) => setLevelingType(getLevelingType(value))}>
                <FormControlLabel value={LevelingType.SLOW} control={<Radio />} label="Slow" />
                <FormControlLabel value={LevelingType.MED_SLOW} control={<Radio />} label="Medium Slow" />
                <FormControlLabel value={LevelingType.MED_FAST} control={<Radio />} label="Medium Fast" />
                <FormControlLabel value={LevelingType.FAST} control={<Radio />} label="Fast" />
            </RadioGroup>
            <div />
            {expNeededView()}
        </Container>
    )
};

export default PokeExperience;
