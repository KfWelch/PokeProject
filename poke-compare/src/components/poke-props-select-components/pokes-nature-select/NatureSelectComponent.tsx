import React, { SyntheticEvent } from 'react';
import { Form, Input } from 'reactstrap';
import { state } from '../../../reducers';

interface INatureState {
    nature: string,
    statMods: string
    oldNature: string
}

interface INatureProps {
    team: string,
    teamPokemon: any,
    opponentPokemon: any,
    teamModifiers: any,
    opponentModifiers:any,
    updateTeamNature: (nature: string) => void,
    updateOpponentNature: (nature: string) => void
}
export class NatureSelectComponent extends React.Component<INatureProps, INatureState> {
    constructor(props: any) {
        super(props);
        this.state = {
            nature: '',
            statMods: '',
            oldNature: 'No nature selected'
        };
    }

    updateNature = (event: any) => {
        this.setState({
            ...this.state,
            nature: event.target.value
        })
    }

    updateStoreNature = (event: SyntheticEvent) => {
        event.preventDefault();
        if (this.props.team === 'team') {
            this.props.updateTeamNature(this.state.nature);
        } else {
            this.props.updateOpponentNature(this.state.nature);
        }
    }
    componentDidUpdate() {
        if ((this.props.team==='team'?this.props.teamModifiers.nature:this.props.opponentModifiers.nature) !== this.state.oldNature) {
            switch (this.props.team==='team'?this.props.teamModifiers.nature:this.props.opponentModifiers.nature) {
                case 'Bashful': {this.setState({...state, statMods:"No change"}); break}
                case 'Lonely': {this.setState({...state, statMods: "Atk Increase, Def Decrease"}); break;}
                case 'Adamant': {this.setState({...state, statMods: "Atk Increase, Sp Atk Decrease"}); break;}
                case 'Naughty': {this.setState({...state, statMods: "Atk Increase, Sp Def Decrease"}); break;}
                case 'Brave': {this.setState({...state, statMods: "Atk Increase, Speed Decrease"}); break;}
                case 'Bold': {this.setState({...state, statMods: "Def Increase, Atk Decrease"}); break;}
                case 'Docile': {this.setState({...state, statMods: "No change"}); break;}
                case 'Impish': {this.setState({...state, statMods: "Def Increase, Sp Atk Decrease"}); break;}
                case 'Lax': {this.setState({...state, statMods: "Def Increase, Sp Def Decrease"}); break;}
                case 'Relaxed': {this.setState({...state, statMods: "Def Increase, Speed Decrease"}); break;}
                case 'Modest': {this.setState({...state, statMods: "Sp Atk Increase, Atk Decrease"}); break;}
                case 'Mild': {this.setState({...state, statMods: "Sp Atk Increase, Def Decrease"}); break;}
                case 'Hardy': {this.setState({...state, statMods: "No change"}); break;}
                case 'Rash': {this.setState({...state, statMods: "Sp Atk Increase, Sp Def Decrease"}); break;}
                case 'Quiet': {this.setState({...state, statMods: "Sp Atk Increase, Speed Decrease"}); break;}
                case 'Calm': {this.setState({...state, statMods: "Sp Def Increase, Atk Decrease"}); break;}
                case 'Gentle': {this.setState({...state, statMods: "Sp Def Increase, Def Decrease"}); break;}
                case 'Careful': {this.setState({...state, statMods: "Sp Def Increase, Sp Atk Decrease"}); break;}
                case 'Quirky': {this.setState({...state, statMods: "No change"}); break;}
                case 'Sassy': {this.setState({...state, statMods: "Sp Def Increase, Speed Decrease"}); break;}
                case 'Timid': {this.setState({...state, statMods: "Speed Increase, Atk Decrease"}); break;}
                case 'Hasty': {this.setState({...state, statMods: "Speed Increase, Def Decrease"}); break;}
                case 'Jolly': {this.setState({...state, statMods: "Speed Increase, Sp Atk Decrease"}); break;}
                case 'Naive': {this.setState({...state, statMods: "Speed Increase, Sp Def Decrease"}); break;}
                case 'Serious': {this.setState({...state, statMods: "No change"}); break;}
                default: {this.setState({...state, statMods: "No nature selected"}); break;} 
            }
            this.setState({
                ...state,
                oldNature: (this.props.team==='team' ? this.props.teamModifiers.nature : this.props.opponentModifiers.nature)
            });
        }
    }
    render() {
        if ((this.props.team === 'team' && this.props.teamPokemon) || (this.props.opponentPokemon)) {
            
            return (
                <>
                    <Form onSubmit={this.updateStoreNature}>
                        <Input type='select' onChange={this.updateNature}>
                            <option>Select {()=>this.props.team==='team'?this.props.teamPokemon.name:this.props.opponentPokemon.name}'s nature </option>
                            <option>Hardy</option>
                            <option>Lonely</option>
                            <option>Brave</option>
                            <option>Adamant</option>
                            <option>Naughty</option>
                            <option>Bold</option>
                            <option>Docile</option>
                            <option>Relaxed</option>
                            <option>Impish</option>
                            <option>Lax</option>
                            <option>Timid</option>
                            <option>Hasty</option>
                            <option>Serious</option>
                            <option>Jolly</option>
                            <option>Naive</option>
                            <option>Modest</option>
                            <option>Mild</option>
                            <option>Quiet</option>
                            <option>Bashful</option>
                            <option>Rash</option>
                            <option>Calm</option>
                            <option>Gentle</option>
                            <option>Sassy</option>
                            <option>Careful</option>
                            <option>Quirky</option>
                        </Input>
                        <Input type='submit'/>
                    </Form>
                    <div>
                        <p>{this.state.statMods}</p>
                    </div> 
                </>
            )
        } else {
            return (
                <div/>
            )
        }
    }
}