import { IState } from "../../../reducers";
import { updateTeamHealth } from "../../../action-mappers/team-modifier-actions";
import { updateOpponentHealth } from "../../../action-mappers/opponent-modifier-actions"
import { connect } from "react-redux";
import { HealthSelectComponent } from "./HealthSelectComponent";

const mapStateToProps = (state: IState) => {
    return {
        teamPokemon: state.pokemonState.myPokemon,
        opponentPokemon: state.pokemonState.opponent,
        teamModifiers: state.modifiersTeamState,
        opponentModifiers: state.modifiersOpponentState
    };
};

const mapDispatchToProps = {
    updateTeamHealth,
    updateOpponentHealth
}

export default connect(mapStateToProps, mapDispatchToProps)(HealthSelectComponent);