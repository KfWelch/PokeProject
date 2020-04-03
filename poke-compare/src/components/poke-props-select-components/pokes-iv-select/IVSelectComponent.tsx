import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Slider } from '@material-ui/core';

interface IIVState {
    hiv: number,
    aiv: number,
    div: number,
    saiv: number,
    sdiv: number,
    spiv: number
}

interface IIVProps {
    team: string,
    teamPokemon: any,
    opponentPokemon: any,
    updateTeamIndividual: (iv: number[]) => void,
    updateOpponentIndividual: (iv: number[]) => void
}



function valuetext(value: any) {
    return `Level ${value}`;
}

export class IVSelectComponent extends React.Component<IIVProps, IIVState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hiv: 0,
            aiv: 0,
            div: 0,
            saiv: 0,
            sdiv: 0,
            spiv: 0
        };
    }

    updateHealth = (event: any, value: any) => {
        this.setState({
            ...this.state,
            hiv: value
        });
    }

    updateAttack = (event: any, value: any) => {
        this.setState({
            ...this.state,
            aiv: value
        });
    }

    updateDefense = (event: any, value: any) => {
        this.setState({
            ...this.state,
            div: value
        });
    }

    updateSpAtk = (event: any, value: any) => {
        this.setState({
            ...this.state,
            saiv: value
        });
    }

    updateSpDef = (event: any, value: any) => {
        this.setState({
            ...this.state,
            sdiv: value
        });
    }

    updateSpeed = (event: any, value: any) => {
        this.setState({
            ...this.state,
            spiv: value
        });
    }

    updateIV = () => {
        let toStore:number[] = [
            this.state.spiv,
            this.state.sdiv,
            this.state.saiv,
            this.state.div,
            this.state.aiv,
            this.state.hiv
        ];
        if (this.props.team === 'team') {
            this.props.updateTeamIndividual(toStore);
        } else {
            this.props.updateOpponentIndividual(toStore);
        }
    }

    render() {
        if ((this.props.team === 'team' && this.props.teamPokemon) || (this.props.opponentPokemon)) {
            return (
                <>
                        <Row>
                            <Col><h5>Individual Value Selection</h5></Col>
                        </Row>
                        <Row>
                            <Col><h6>HP:   {this.state.hiv}</h6></Col>
                            <Col><h6>Atk:    {this.state.aiv}</h6></Col>
                            <Col><h6>Def:    {this.state.div}</h6></Col>
                            <Col><h6>SpAtk:  {this.state.saiv}</h6></Col>
                            <Col><h6>SpDef:  {this.state.sdiv}</h6></Col>
                            <Col><h6>Spd:  {this.state.spiv}</h6></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Slider
                                    defaultValue={0}
                                    orientation="vertical"
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    onChange={this.updateHealth}
                                    onMouseUp={this.updateIV}
                                    step={1}
                                    min={0}
                                    max={31}
                                />
                            </Col>
                            <Col>
                                <Slider
                                    defaultValue={0}
                                    orientation="vertical"
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    onChange={this.updateAttack}
                                    onMouseUp={this.updateIV}
                                    step={1}
                                    min={0}
                                    max={31}
                                />
                            </Col>
                            <Col>
                                <Slider
                                    defaultValue={0}
                                    orientation="vertical"
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    onChange={this.updateDefense}
                                    onMouseUp={this.updateIV}
                                    step={1}
                                    min={0}
                                    max={31}
                                />
                            </Col>
                            <Col>
                                <Slider
                                    defaultValue={0}
                                    orientation="vertical"
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    onChange={this.updateSpAtk}
                                    onMouseUp={this.updateIV}
                                    step={1}
                                    min={0}
                                    max={31}
                                />
                            </Col>
                            <Col>
                                <Slider
                                    defaultValue={0}
                                    orientation="vertical"
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    onChange={this.updateSpDef}
                                    onMouseUp={this.updateIV}
                                    step={1}
                                    min={0}
                                    max={31}
                                />
                            </Col>
                            <Col>
                                <Slider
                                    defaultValue={0}
                                    orientation="vertical"
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    onChange={this.updateSpeed}
                                    onMouseUp={this.updateIV}
                                    step={1}
                                    min={0}
                                    max={31}
                                />
                            </Col>
                        </Row>
                    <br/>
                </>
            )
        } else {
            return (
                <div/>
            )
        }
    }
}