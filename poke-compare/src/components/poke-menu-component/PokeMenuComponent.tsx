import React from 'react';
import PokemonSelectorComponent from '../pokemon-selector-component/PokemonSelectorContainer';
import { Row, Col } from 'reactstrap';
import AbilitySelectComponent from '../poke-props-select-components/pokes-ability-select/AbilitySelectContainer';
import MoveSelectComponent from '../poke-props-select-components/pokes-move-select/MoveSelectContainer';
import NatureSelectComponent from '../poke-props-select-components/pokes-nature-select/NatureSelectContainer';
import PokeStatusComponent from '../poke-props-select-components/pokes-status-select/PokeStatusContainer';
import HealthSelectComponent from '../poke-props-select-components/pokes-health-select/HealthSelectContainer';
import LevelSelectComponent from '../poke-props-select-components/pokes-level-select/LevelSelectContainer';
import HappySelectComponent from '../poke-props-select-components/pokes-happy-select/HappySelectContainer';

interface IMenuProps {
    teamPokemon: any,
    opponentPokemon: any
}

export class PokeMenuComponent extends React.Component<IMenuProps, any> {

    render() {
        return(
            <>
            <Row>
                <Col>
                    <PokemonSelectorComponent buttonText='Choose your Pokémon!' team="team"/>
                    <LevelSelectComponent team="team" />
                    <HealthSelectComponent team="team" />
                    <AbilitySelectComponent team="team"></AbilitySelectComponent>
                    <MoveSelectComponent team="team"/>
                    <NatureSelectComponent team="team"/>
                    <PokeStatusComponent team="team" />
                    <HappySelectComponent team="team" />
                </Col>
                <Col>
                    <PokemonSelectorComponent buttonText='Choose opposing Pokémon!' team="opponent"/>
                    <LevelSelectComponent team="opponent" />
                    <HealthSelectComponent team="opponent" />
                    <AbilitySelectComponent team="opponent"></AbilitySelectComponent>
                    <MoveSelectComponent team="opponent"/>
                    <NatureSelectComponent team="opponent"/>
                    <PokeStatusComponent team="opponent" />
                    <HappySelectComponent team="opponent" />
                </Col>
            </Row>
            </>
        )
    }
}