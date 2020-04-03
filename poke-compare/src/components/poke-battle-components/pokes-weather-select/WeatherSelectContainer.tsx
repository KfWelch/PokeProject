import { IState } from "../../../reducers";
import { updateTeamWeather } from "../../../action-mappers/team-modifier-actions";
import { updateOpponentWeather } from "../../../action-mappers/opponent-modifier-actions";
import { connect } from "react-redux";
import { WeatherSelectComponent } from "./WeatherSelectComponent";

const mapStateToProps = (state: IState) => {
    return {
        teamPokemon: state.pokemonState.myPokemon,
        opponentPokemon: state.pokemonState.opponent,
        teamModifiers: state.modifiersTeamState,
        opponentModifiers: state.modifiersOpponentState
    };
};

const mapDispatchToProps = {
    updateTeamWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherSelectComponent);