import React, { SyntheticEvent } from 'react';
import { Label, Form, Input, Button } from 'reactstrap';
import { PokemonCardComponent } from '../pokemon-card-component/PokemonCardComponent';

interface IPokemonState {
    name: string
}

interface IPokemonProps {
    buttonText: string,
    team: string,
    myPokemon: any,
    opponent: any,
    getMyPokemon: (name: string) => void,
    getOpponentPokemon: (name: string) => void
}

export class PokemonSelectorComponent extends React.Component<IPokemonProps, IPokemonState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: ''
        };
    }

    updateName = (event: any) => {
        this.setState({
            ...this.state,
            name: event.target.value
        })
    }

    getPokemon = async (event: SyntheticEvent) => {
        event.preventDefault();
        if (this.props.team === 'team') {
            this.props.getMyPokemon(this.state.name);
        } else {
            this.props.getOpponentPokemon(this.state.name);
        }
    }

    render() {

        return (
            <>
                <Form onSubmit={this.getPokemon}>
                    <Label for="name" sm={3}>Pokemon Name</Label>
                    <Input required
                        type="text"
                        name="name"
                        placeholder="Name of Pokémon"
                        value={this.state.name}
                        onChange={this.updateName} />
                    <Button color="info">{this.props.buttonText}</Button>
                </Form>

                
                <PokemonCardComponent 
                    pokemon={
                        this.props.team === 'team' ?
                        this.props.myPokemon :
                        this.props.opponent
                    }
                />
            </>
        )
    }
}