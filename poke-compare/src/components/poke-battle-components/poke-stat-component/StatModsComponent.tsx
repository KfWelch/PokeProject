import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

interface IStatState {
    attackCount: number,
    attackPercent: number,
    defenseCount: number,
    defensePercent: number,
    spatkCount: number,
    spatkPercent: number,
    spdefCount: number,
    spdefPercent: number,
    speedCount: number,
    speedPercent: number,
}

interface IStatProps {
    team: string
    teamPokemon: any,
    opponentPokemon: any
}

export class StatModsComponent extends React.Component<IStatProps, IStatState> {
    constructor(props: any) {
        super(props);
        this.state = {
            attackCount: 0,
            attackPercent: 1,
            defenseCount: 0,
            defensePercent: 1,
            spatkCount: 0,
            spatkPercent: 1,
            spdefCount: 0,
            spdefPercent: 1,
            speedCount: 0,
            speedPercent: 1
        };
    }

    resetAtk = () => {
        this.setState({
            ...this.state,
            attackCount: 0,
            attackPercent: 1
        })
    }

    resetDef = () => {
        this.setState({
            ...this.state,
            defenseCount: 0,
            defensePercent: 1
        })
    }

    resetSpAtk = () => {
        this.setState({
            ...this.state,
            spatkCount: 0,
            spatkPercent: 1
        })
    }

    resetSpDef = () => {
        this.setState({
            ...this.state,
            spdefCount: 0,
            spdefPercent: 1
        })
    }

    resetSpd = () => {
        this.setState({
            ...this.state,
            speedCount: 0,
            speedPercent: 1
        })
    }

    setAtk = (levels: number) => {
        let currentLevel:number = this.state.speedCount + levels;
        let percent:number;
        if (currentLevel < 1) {
            percent = 2 / (2 - currentLevel);
        } else {
            percent = (2 + currentLevel) / 2;
        }
        this.setState({
            ...this.state,
            attackCount: currentLevel,
            attackPercent: percent
        })
    }

    setDef = (levels: number) => {
        let currentLevel:number = this.state.speedCount + levels;
        let percent:number;
        if (currentLevel < 1) {
            percent = 2 / (2 - currentLevel);
        } else {
            percent = (2 + currentLevel) / 2;
        }
        this.setState({
            ...this.state,
            defenseCount: currentLevel,
            defensePercent: percent
        })
    }

    setSpAtk = (levels: number) => {
        let currentLevel:number = this.state.speedCount + levels;
        let percent:number;
        if (currentLevel < 1) {
            percent = 2 / (2 - currentLevel);
        } else {
            percent = (2 + currentLevel) / 2;
        }
        this.setState({
            ...this.state,
            spatkCount: currentLevel,
            spatkPercent: percent
        })
    }

    setSpDef = (levels: number) => {
        let currentLevel:number = this.state.speedCount + levels;
        let percent:number;
        if (currentLevel < 1) {
            percent = 2 / (2 - currentLevel);
        } else {
            percent = (2 + currentLevel) / 2;
        }
        this.setState({
            ...this.state,
            spdefCount: currentLevel,
            spdefPercent: percent
        })
    }

    setSpeed = (levels: number) => {
        let currentLevel:number = this.state.speedCount + levels;
        let percent:number;
        if (currentLevel < 1) {
            percent = 2 / (2 - currentLevel);
        } else {
            percent = (2 + currentLevel) / 2;
        }
        this.setState({
            ...this.state,
            speedCount: currentLevel,
            speedPercent: percent
        })
    }

    render() {
        if ((this.props.team === 'team' && this.props.teamPokemon) || (this.props.opponentPokemon)) {
            return(
                <>
                        <Row>
                            <Col>
                                <h5>Battle Stat Modifiers for {this.props.team==='team'?
                                    this.props.teamPokemon.name:this.props.opponentPokemon.name}</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <h6>Attack: {this.state.attackPercent * 100}%</h6>
                            </Col>
                            <Col>
                            <h6>Defense: {this.state.defensePercent * 100}%</h6>
                            </Col>
                            <Col>
                            <h6>Sp Atk: {this.state.spatkPercent * 100}%</h6>
                            </Col>
                            <Col>
                            <h6>Sp Def: {this.state.spdefPercent * 100}%</h6>
                            </Col>
                            <Col>
                            <h6>Speed: {this.state.speedPercent * 100}%</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col><Button color="info" onClick={this.resetAtk}>Reset Attack</Button></Col>
                            <Col><Button color="info" onClick={this.resetDef}>Reset Defense</Button></Col>
                            <Col><Button color="info" onClick={this.resetSpAtk}>Reset Sp Atk</Button></Col>
                            <Col><Button color="info" onClick={this.resetSpDef}>Reset Sp Def</Button></Col>
                            <Col><Button color="info" onClick={this.resetSpd}>Reset Speed</Button></Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col><Button color="primary" onClick={()=>this.setAtk(2)}>^^ Attack ^^</Button></Col>
                            <Col><Button color="primary" onClick={()=>this.setDef(2)}>^^ Defense ^^</Button></Col>
                            <Col><Button color="primary" onClick={()=>this.setSpAtk(2)}>^^ Sp_Atk ^^</Button></Col>
                            <Col><Button color="primary" onClick={()=>this.setSpDef(2)}>^^ Sp_Def ^^</Button></Col>
                            <Col><Button color="primary" onClick={()=>this.setSpeed(2)}>^^ Speed ^^</Button></Col>
                        </Row>
                        <Row>
                            <Col><Button color="success" onClick={()=>this.setAtk(1)}>^ Attack ^</Button></Col>
                            <Col><Button color="success" onClick={()=>this.setDef(1)}>^ Defense ^</Button></Col>
                            <Col><Button color="success" onClick={()=>this.setSpAtk(1)}>^ Sp_Atk ^</Button></Col>
                            <Col><Button color="success" onClick={()=>this.setSpDef(1)}>^ Sp_Def ^</Button></Col>
                            <Col><Button color="success" onClick={()=>this.setSpeed(1)}>^ Speed ^</Button></Col>
                        </Row>
                        <Row>
                            <Col><Button color="warning" onClick={()=>this.setAtk(-1)}>v _Attack_ v</Button></Col>
                            <Col><Button color="warning" onClick={()=>this.setDef(-1)}>v Defense v</Button></Col>
                            <Col><Button color="warning" onClick={()=>this.setSpAtk(-1)}>v Sp_Atk v</Button></Col>
                            <Col><Button color="warning" onClick={()=>this.setSpDef(-1)}>v Sp_Def v</Button></Col>
                            <Col><Button color="warning" onClick={()=>this.setSpeed(-1)}>v _Speed_ v</Button></Col>
                        </Row>
                        <Row>
                            <Col><Button color="danger" onClick={()=>this.setAtk(-2)}>vv Attack vv</Button></Col>
                            <Col><Button color="danger" onClick={()=>this.setDef(-2)}>vv Defense vv</Button></Col>
                            <Col><Button color="danger" onClick={()=>this.setSpAtk(-2)}>vv Sp_Atk vv</Button></Col>
                            <Col><Button color="danger" onClick={()=>this.setSpDef(-2)}>vv Sp_Def vv</Button></Col>
                            <Col><Button color="danger" onClick={()=>this.setSpeed(-2)}>vv Speed vv</Button></Col>
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