import React from 'react';
import { Slider } from '@material-ui/core';

interface IHappyState {
    happy: any
}

interface IHappyProps {
    team: string,
    teamPokemon: any,
    opponentPokemon: any,
    teamModifiers: any,
    opponentModifiers: any,
    updateTeamHappy: (happy: number) => void,
    updateOpponentHappy: (happy: number) => void
}

function valuetext(value: any) {
    return `Happy ${value}`;
}

export class HappySelectComponent extends React.Component<IHappyProps, IHappyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            happy: 1
        };
    }

    updateHappy = (event: any, value: any) => {
        this.setState({
            ...this.state,
            happy: value
        })
    }

    updateStoreHappy = () => {
        if (this.props.team === 'team') {
            this.props.updateTeamHappy(this.state.happy);
        } else {
            this.props.updateOpponentHappy(this.state.happy);
        }
    }

    

    render() {
        if ((this.props.team === 'team' && this.props.teamPokemon) || (this.props.opponentPokemon)) {
            return (
                <>
                    <h4>Choose Pokémon Happy</h4>
                    <Slider
                        defaultValue={1}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        onChange={this.updateHappy}
                        onMouseUp={this.updateStoreHappy}
                        marks
                        step={1}
                        min={0}
                        max={255}
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