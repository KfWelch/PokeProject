import React, { SyntheticEvent } from 'react';
import { Form, Input } from 'reactstrap';
import { state } from '../../../reducers';

interface IWeatherState {
    weather: string,
}

interface IWeatherProps {
    teamPokemon: any,
    opponentPokemon: any,
    teamModifiers: any,
    opponentModifiers:any,
    updateTeamWeather: (weather: string) => void
}
export class WeatherSelectComponent extends React.Component<IWeatherProps, IWeatherState> {
    constructor(props: any) {
        super(props);
        this.state = {
            weather: '',
        };
    }

    updateWeather = (event: any) => {
        this.setState({
            ...this.state,
            weather: event.target.value
        })
    }

    updateStoreWeather = (event: SyntheticEvent) => {
        event.preventDefault();
        this.props.updateTeamWeather(this.state.weather);
    }
   
    render() {
        if (this.props.teamPokemon || this.props.opponentPokemon) {
            
            return (
                <>
                    <Form onSubmit={this.updateStoreWeather}>
                        <Input type='select' onChange={this.updateWeather}>
                            <option>Normal</option>
                            <option>Sunny</option>
                            <option>Raining</option>
                            <option>Hail</option>
                            <option>Sandstorm</option>
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