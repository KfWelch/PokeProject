import React, { SyntheticEvent } from 'react';
import { Form, Input } from 'reactstrap';

interface IStatusState {
    status: string
}

interface IStatusProps {
    team: string,
    teamPokemon: any,
    opponentPokemon: any,
    teamModifiers: any,
    opponentModifiers: any,
    updateTeamStatus: (status: string) => void,
    updateOpponentStatus: (status: string) => void
}

export class PokeStatusComponent extends React.Component<IStatusProps, IStatusState> {
    constructor(props: any) {
        super(props);
        this.state = {
            status: ''
        }
    }

    updateStatus = (event: any) => {
        this.setState({
            ...this.state,
            status: event.target.value
        })
    }

    updateStoreStatus = (event: SyntheticEvent) => {
        event.preventDefault();
        if (this.props.team === 'team') {
            this.props.updateTeamStatus(this.state.status);
        } else {
            this.props.updateOpponentStatus(this.state.status);
        }
    }

    render() {
        if ((this.props.team === 'team' && this.props.teamPokemon) || (this.props.opponentPokemon)) {
            return (
                <>
                    <Form onSubmit={this.updateStoreStatus}>
                        <Input type='select' onChange={this.updateStatus}>
                            {this.props.team==='team'?
                            ((this.props.teamModifiers.ability==='comatose' ||
                                this.props.teamModifiers.ability==='flower-veil' ||
                                (this.props.teamModifiers.ability==='leaf-guard' && this.props.teamModifiers.weather==='sunny') ||
                                (this.props.teamModifiers.ability==='shields-down' && this.props.teamModifiers.health > 0.5))?
                            <option>none</option>:
                            <>
                                <option>none</option>
                                <option disabled={(this.props.teamModifiers.ability==='sweet-veil' ||
                                    this.props.teamModifiers.ability==='vital-spirit' ||
                                    this.props.teamModifiers.ability==='insomnia')}>sleep</option> 
                                <option disabled={this.props.teamModifiers.ability==='limber'}>paralysis</option>
                                <option disabled={this.props.teamModifiers.ability==='water-bubble' ||
                                    this.props.teamModifiers.ability==='water-veil'}>burn</option>
                                <option disabled={this.props.teamModifiers.ability==='pastel-veil' ||
                                    this.props.teamModifiers.ability==='immunity'}>poison</option>
                                <option disabled={this.props.teamModifiers.ability==='magma-armor'}>frozen</option>
                            </>):
                            ((this.props.opponentModifiers.ability==='comatose' ||
                                this.props.opponentModifiers.ability==='flower-veil' ||
                                (this.props.opponentModifiers.ability==='leaf-guard' && this.props.opponentModifiers.weather==='sunny') ||
                                (this.props.opponentModifiers.ability==='shields-down' && this.props.opponentModifiers.health > 0.5))?
                            <option>none</option>:
                            <>
                                <option>none</option>
                                <option disabled={this.props.opponentModifiers.ability==='sweet-veil' ||
                                    this.props.opponentModifiers.ability==='vital-spirit' ||
                                    this.props.opponentModifiers.ability==='insomnia'}>sleep</option>
                                <option disabled={this.props.opponentModifiers.ability==='limber'}>paralysis</option>
                                <option disabled={this.props.opponentModifiers.ability==='water-bubble' ||
                                    this.props.opponentModifiers.ability==='water-veil'}>burn</option>
                                <option disabled={this.props.opponentModifiers.ability==='pastel-veil' ||
                                     this.props.opponentModifiers.ability==='immunity'}>poison</option>
                                <option disabled={this.props.opponentModifiers.ability==='magma-armor'}>frozen</option>
                            </>)
                            }
                        </Input>
                        <Input type='submit'/>
                    </Form>
                </>
            )
        } else {
            return (
                <div/>
            )
        }
    }
}