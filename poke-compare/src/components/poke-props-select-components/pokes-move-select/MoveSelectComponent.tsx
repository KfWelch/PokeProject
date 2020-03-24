import React, { SyntheticEvent } from 'react';
import { Form, Input, Row, Col } from 'reactstrap';

interface IMoveState {
    move: string
}

interface IMoveProps {
    team: string,
    teamPokemon: any,
    opponentPokemon: any,
    teamModifiers: any,
    opponentModifiers:any,
    updateTeamMove: (move: string) => void,
    updateOpponentMove: (move: string) => void
}
export class MoveSelectComponent extends React.Component<IMoveProps, IMoveState> {
    constructor(props: any) {
        super(props);
        this.state = {
            move: ''
        };
    }

    updateMove = (event: any) => {
        this.setState({
            ...this.state,
            move: event.target.value
        })
    }

    updateStoreMove = (event: SyntheticEvent) => {
        event.preventDefault();
        if (this.props.team === 'team') {
            this.props.updateTeamMove(this.state.move);
        } else {
            this.props.updateOpponentMove(this.state.move);
        }
    }

    render() {
        if (((this.props.team === 'team') && this.props.teamPokemon) || (this.props.opponentPokemon)) {
        const displayOptions: any[] = [];
        let i = 0;
        if (this.props.team === 'team') {
            displayOptions[i++] = <option>Choose {this.props.teamPokemon.name}'s move</option>
            while (this.props.teamPokemon.moves[i-1]) {
                displayOptions[i] = <option>{this.props.teamPokemon.moves[i-1].move.name}</option>;
                i++;
            }
        } else {
            displayOptions[i++] = <option>Choose {this.props.opponentPokemon.name}'s move</option>
            while (this.props.opponentPokemon.moves[i-1]) {
                displayOptions[i] = <option>{this.props.opponentPokemon.moves[i-1].move.name}</option>;
                i++;
            }
        }


        return (
            <>
                <Form onSubmit={this.updateStoreMove}>
                    <Input type='select' onChange={this.updateMove}>
                        {displayOptions}
                    </Input>
                    <Input type='submit'/>
                </Form>
                <Row>
                        <Col>
                            <p>Accuracy</p>
                            <p>{this.props.team==='team'?
                                (this.props.teamModifiers.move?
                                    this.props.teamModifiers.move.accuracy:''):
                                (this.props.opponentModifiers.move?
                                    this.props.opponentModifiers.move.accuracy:'')}</p>
                        </Col>
                        <Col>
                            <p>Attack</p>
                            <p>{this.props.team==='team'?
                                (this.props.teamModifiers.move?
                                    this.props.teamModifiers.move.power:''):
                                (this.props.opponentModifiers.move?
                                    this.props.opponentModifiers.move.power:'')}</p>
                        </Col>
                        <Col>
                            <p>Type</p>
                            <p>{this.props.team==='team'?
                                (this.props.teamModifiers.move?
                                    this.props.teamModifiers.move.damage_class.name:''):
                                (this.props.opponentModifiers.move?
                                    this.props.opponentModifiers.move.damage_class.name:'')}</p>
                        </Col>
                    </Row>
            </>
        )
        } else {
            return (
                <div/>
            )
        }
    }
}