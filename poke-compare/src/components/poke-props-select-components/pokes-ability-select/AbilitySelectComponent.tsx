import React, { SyntheticEvent } from 'react';
import { Form, Input } from 'reactstrap';
import { getAbilityByName } from '../../../utilities/api';

interface IAbilityState {
    ability: string
    abilityDesc: any,
}

interface IAbilityProps {
    team: string,
    teamPokemon: any,
    opponentPokemon: any,
    teamModifiers: any,
    opponentModifiers:any,
    updateTeamAbility: (ability: string) => void,
    updateOpponentAbility: (ability: string) => void
}
export class AbilitySelectComponent extends React.Component<IAbilityProps, IAbilityState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ability: '',
            abilityDesc: null
        };
    }

    updateAbility = (event: any) => {
        this.setState({
            ...this.state,
            ability: event.target.value
        })
    }

    updateStoreAbility = async (event: SyntheticEvent) => {
        event.preventDefault();
        if (this.props.team === 'team') {
            this.props.updateTeamAbility(this.state.ability);
            this.setState({
                ...this.state,
                abilityDesc: await getAbilityByName(this.state.ability)
            })
        } else {
            this.props.updateOpponentAbility(this.state.ability);
            this.setState({
                ...this.state,
                abilityDesc: await getAbilityByName(this.state.ability)
            })
        }
    }

    render() {
        if ((this.props.team === 'team' && this.props.teamPokemon) || (this.props.opponentPokemon)) {
        const displayOptions: any[] = [];
        let i = 0;
        if (this.props.team === 'team') {
            displayOptions[i++] = <option>Choose {this.props.teamPokemon.name}'s ability</option>
            while (this.props.teamPokemon.abilities[i-1]) {
                displayOptions[i] = <option>{this.props.teamPokemon.abilities[i-1].ability.name}</option>;
                i++;
            }
        } else {
            displayOptions[i++] = <option>Choose {this.props.opponentPokemon.name}'s ability</option>
            while (this.props.opponentPokemon.abilities[i-1]) {
                displayOptions[i] = <option>{this.props.opponentPokemon.abilities[i-1].ability.name}</option>;
                i++;
            }
        }
        
        return (
            <>
                <Form onSubmit={this.updateStoreAbility}>
                    <Input type='select' onChange={this.updateAbility}>
                        {displayOptions}
                    </Input>
                    <Input type='submit'/>
                </Form>
                <p>{this.state.abilityDesc?this.state.abilityDesc.effect_entries[0].effect:''}</p>
            </>
        ) 
        } else {
            return (
                <div/>
            )
        }
    }
}