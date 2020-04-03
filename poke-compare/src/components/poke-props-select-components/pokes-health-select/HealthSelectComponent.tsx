import React from 'react';
import  Slider  from '@material-ui/core/Slider';
import { Button } from 'reactstrap';

interface IHealthState {
    health: any,
    maxHP: number
}

interface IHealthProps {
    team: string,
    teamPokemon: any,
    opponentPokemon: any,
    teamModifiers: any,
    opponentModifiers: any,
    updateTeamHealth: (health: number) => void,
    updateOpponentHealth: (health: number) => void
}

function valuetext(value: any) {
        return `${value} HP`;
}

export class HealthSelectComponent extends React.Component<IHealthProps, IHealthState> {
    constructor(props: any) {
        super(props);
        this.state = {
            health: 0,
            maxHP: 11
        };
    }

    componentDidUpdate() {
        let hp:number;
        if (this.props.team === 'team') {
            hp = this.updateTeamHP();
            if (this.state.maxHP !== hp) {
                this.setState({
                    ...this.state,
                    maxHP: hp
                })
            }
        } else {
            hp = this.updateOpponentHP();
            if (this.state.maxHP !== hp) {
                this.setState({
                    ...this.state,
                    maxHP: hp
                })
            }
        }
    }

    updateTeamHP = () => {
        if (this.props.team === 'team' && this.props.teamPokemon) {
            let hp = Math.floor(((2 * this.props.teamPokemon.stats[5].base_stat +
                this.props.teamModifiers.individual[5] +
                Math.floor(this.props.teamModifiers.effort[5] / 4)) *
                this.props.teamModifiers.level) / 100) +
                this.props.teamModifiers.level + 10;
            return hp;
        }
    }

    updateOpponentHP = () => {
        if (this.props.team !== 'team' && this.props.opponentPokemon) {
            let hp = Math.floor(((2 * this.props.opponentPokemon.stats[5].base_stat +
                this.props.opponentModifiers.individual[5] +
                Math.floor(this.props.opponentModifiers.effort[5] / 4)) *
                this.props.opponentModifiers.level) / 100) +
                this.props.opponentModifiers.level + 10;
            return hp;
        }
    }

    updateHP = (event: any, value: any) => {
        this.setState({
            ...this.state,
            health: value
        })
    }

    updateStoreHP = () => {
        if (this.props.team === 'team') {
            this.props.updateTeamHealth(this.state.health);
        } else {
            this.props.updateOpponentHealth(this.state.health);
        }
    }

    

    render() {
        if ((this.props.team === 'team' && this.props.teamPokemon) || (this.props.opponentPokemon)) {
            return (
                <>
                    <h5>Choose Pokémon Health</h5>
                    <Slider
                        defaultValue={this.state.maxHP}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        onChange={this.updateHP}
                        onMouseUp={this.updateStoreHP}
                        marks
                        step={1}
                        min={0}
                        max={this.state.maxHP}
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