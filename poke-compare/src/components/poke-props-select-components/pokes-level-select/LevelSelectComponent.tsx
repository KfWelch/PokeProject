import React from 'react';
import { Slider } from '@material-ui/core';

interface ILevelState {
    level: any
}

interface ILevelProps {
    team: string,
    teamPokemon: any,
    opponentPokemon: any,
    teamModifiers: any,
    opponentModifiers: any,
    updateTeamLevel: (level: number) => void,
    updateOpponentLevel: (level: number) => void
}

function valuetext(value: any) {
    return `Level ${value}`;
}

export class LevelSelectComponent extends React.Component<ILevelProps, ILevelState> {
    constructor(props: any) {
        super(props);
        this.state = {
            level: 1
        };
    }

    updateLevel = (event: any, value: any) => {
        this.setState({
            ...this.state,
            level: value
        })
    }

    updateStoreLevel = () => {
        if (this.props.team === 'team') {
            this.props.updateTeamLevel(this.state.level);
        } else {
            this.props.updateOpponentLevel(this.state.level);
        }
    }

    

    render() {
        if ((this.props.team === 'team' && this.props.teamPokemon) || (this.props.opponentPokemon)) {
            return (
                <>
                    <h4>Choose Pokémon Level</h4>
                    <Slider
                        defaultValue={1}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        onChange={this.updateLevel}
                        onMouseUp={this.updateStoreLevel}
                        step={1}
                        min={1}
                        max={100}
                    />
                </>
            )
        } else {
            return (
                <div/>
            )
        }
    }
}