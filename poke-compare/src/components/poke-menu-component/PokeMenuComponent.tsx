import React from 'react';
import PokemonSelectorComponent from '../pokemon-selector-component/PokemonSelectorContainer';
import { Row, Col, Container } from 'reactstrap';
import AbilitySelectComponent from '../poke-props-select-components/pokes-ability-select/AbilitySelectContainer';
import MoveSelectComponent from '../poke-props-select-components/pokes-move-select/MoveSelectContainer';
import NatureSelectComponent from '../poke-props-select-components/pokes-nature-select/NatureSelectContainer';
import PokeStatusComponent from '../poke-props-select-components/pokes-status-select/PokeStatusContainer';
import HealthSelectComponent from '../poke-props-select-components/pokes-health-select/HealthSelectContainer';
import LevelSelectComponent from '../poke-props-select-components/pokes-level-select/LevelSelectContainer';
import HappySelectComponent from '../poke-props-select-components/pokes-happy-select/HappySelectContainer';
import WeatherSelectComponent from '../poke-battle-components/pokes-weather-select/WeatherSelectContainer';
import IVSelectComponent from '../poke-props-select-components/pokes-iv-select/IVSelectContainer';
import EVSelectComponent from '../poke-props-select-components/pokes-ev-select/EVSelectContainer';
import StatModsComponent from '../poke-battle-components/poke-stat-component/StatModsContainer';

interface IMenuProps {
    teamPokemon: any,
    opponentPokemon: any
}

export class PokeMenuComponent extends React.Component<IMenuProps, any> {

    render() {
        return(
            <>
            <Container>
                <Row>
                    <Col>
                        <PokemonSelectorComponent buttonText='Choose your Pokémon!' team="team"/>
                        <LevelSelectComponent team="team" />
                        <HealthSelectComponent team="team" />
                        <IVSelectComponent team="team" />
                        <EVSelectComponent team="team" />
                        <AbilitySelectComponent team="team"></AbilitySelectComponent>
                        <MoveSelectComponent team="team"/>
                        <NatureSelectComponent team="team"/>
                        <PokeStatusComponent team="team" />
                        <HappySelectComponent team="team" />
                        <StatModsComponent team="team" />
                    </Col>
                    <Col>
                        <PokemonSelectorComponent buttonText='Choose opposing Pokémon!' team="opponent"/>
                        <LevelSelectComponent team="opponent" />
                        <HealthSelectComponent team="opponent" />
                        <IVSelectComponent team="opponent" />
                        <EVSelectComponent team="opponent" />
                        <AbilitySelectComponent team="opponent"></AbilitySelectComponent>
                        <MoveSelectComponent team="opponent"/>
                        <NatureSelectComponent team="opponent"/>
                        <PokeStatusComponent team="opponent" />
                        <HappySelectComponent team="opponent" />
                        <StatModsComponent team="opponent" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <WeatherSelectComponent />
                    </Col>
                </Row>
            </Container>
            <br/>
            </>
        )
    }
}