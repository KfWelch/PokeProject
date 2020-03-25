import { IState } from "../../../reducers";
import { updateTeamStatus } from "../../../action-mappers/team-modifier-actions";
import { updateOpponentStatus } from "../../../action-mappers/opponent-modifier-actions"
import { connect } from "react-redux";
import { PokeStatusComponent } from "./PokeStatusComponent";

const mapStateToProps = (state: IState) => {
    return {
        teamPokemon: state.pokemonState.myPokemon,
        opponentPokemon: state.pokemonState.opponent,
        teamModifiers: state.modifiersTeamState,
        opponentModifiers: state.modifiersOpponentState
    };
};

const mapDispatchToProps = {
    updateTeamStatus,
    updateOpponentStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeStatusComponent);