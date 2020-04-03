import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Slider } from '@material-ui/core';

interface IEVState {
    ev: number,
    hev: number,
    aev: number,
    dev: number,
    saev: number,
    sdev: number,
    spev: number
}

interface IEVProps {
    team: string,
    teamPokemon: any,
    opponentPokemon: any,
    updateTeamEffort: (ev: number[]) => void,
    updateOpponentEffort: (ev: number[]) => void
}



function valuetext(value: any) {
    return `Level ${value}`;
}

export class EVSelectComponent extends React.Component<IEVProps, IEVState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ev: 510,
            hev: 0,
            aev: 0,
            dev: 0,
            saev: 0,
            sdev: 0,
            spev: 0
        };
    }

    updateHealth = (event: any, value: any) => {
        let diff = this.state.hev - value;
        this.setState({
            ...this.state,
            ev: this.state.ev + diff,
            hev: value
        });
    }

    updateAttack = (event: any, value: any) => {
        let diff = this.state.aev - value;
        this.setState({
            ...this.state,
            ev: this.state.ev + diff,
            aev: value
        });
    }

    updateDefense = (event: any, value: any) => {
        let diff = this.state.dev - value;
        this.setState({
            ...this.state,
            ev: this.state.ev + diff,
            dev: value
        });
    }

    updateSpAtk = (event: any, value: any) => {
        let diff = this.state.saev - value;
        this.setState({
            ...this.state,
            ev: this.state.ev + diff,
            saev: value
        });
    }

    updateSpDef = (event: any, value: any) => {
        let diff = this.state.sdev - value;
        this.setState({
            ...this.state,
            ev: this.state.ev + diff,
            sdev: value
        });
    }

    updateSpeed = (event: any, value: any) => {
        let diff = this.state.spev - value;
        this.setState({
            ...this.state,
            ev: this.state.ev + diff,
            spev: value
        });
    }

    updateEV = () => {
        let toStore:number[] = [
            this.state.spev,
            this.state.sdev,
            this.state.saev,
            this.state.dev,
            this.state.aev,
            this.state.hev
        ];
        if (this.props.team === 'team') {
            this.props.updateTeamEffort(toStore);
        } else {
            this.props.updateOpponentEffort(toStore);
        }
    }

    render() {
        if ((this.props.team === 'team' && this.props.teamPokemon) || (this.props.opponentPokemon)) {
            return (
                <>
                        <Row>
                            <Col><h5>Effort Value Selection (Remaining: {this.state.ev})</h5></Col>
                        </Row>
                        <Row>
                            <Col><h6>HP:   {this.state.hev}</h6></Col>
                            <Col><h6>Atk:    {this.state.aev}</h6></Col>
                            <Col><h6>Def:    {this.state.dev}</h6></Col>
                            <Col><h6>SpAtk:  {this.state.saev}</h6></Col>
                            <Col><h6>SpDef:  {this.state.sdev}</h6></Col>
                            <Col><h6>Spd:  {this.state.spev}</h6></Col>
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
                                    onMouseUp={this.updateEV}
                                    step={1}
                                    min={0}
                                    max={(this.state.ev + this.state.hev)>252?252:(this.state.ev + this.state.hev)}
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
                                    onMouseUp={this.updateEV}
                                    step={1}
                                    min={0}
                                    max={(this.state.ev + this.state.aev)>252?252:(this.state.ev + this.state.aev)}
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
                                    onMouseUp={this.updateEV}
                                    step={1}
                                    min={0}
                                    max={(this.state.ev + this.state.dev)>252?252:(this.state.ev + this.state.dev)}
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
                                    onMouseUp={this.updateEV}
                                    step={1}
                                    min={0}
                                    max={(this.state.ev + this.state.saev)>252?252:(this.state.ev + this.state.saev)}
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
                                    onMouseUp={this.updateEV}
                                    step={1}
                                    min={0}
                                    max={(this.state.ev + this.state.sdev)>252?252:(this.state.ev + this.state.sdev)}
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
                                    onMouseUp={this.updateEV}
                                    step={1}
                                    min={0}
                                    max={(this.state.ev + this.state.spev)>252?252:(this.state.ev + this.state.spev)}
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