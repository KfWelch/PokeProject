import { IState } from "../../../reducers";
import { updateTeamLevel } from "../../../action-mappers/team-modifier-actions";
import { updateOpponentLevel } from "../../../action-mappers/opponent-modifier-actions"
import { connect } from "react-redux";
import { LevelSelectComponent } from "./LevelSelectComponent";

const mapStateToProps = (state: IState) => {
    return {
        teamPokemon: state.pokemonState.myPokemon,
        opponentPokemon: state.pokemonState.opponent,
        teamModifiers: state.modifiersTeamState,
        opponentModifiers: state.modifiersOpponentState
    };
};

const mapDispatchToProps = {
    updateTeamLevel,
    updateOpponentLevel
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelectComponent);