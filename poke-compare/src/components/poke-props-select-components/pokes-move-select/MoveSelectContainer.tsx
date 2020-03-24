import { IState } from "../../../reducers";
import { updateTeamMove } from "../../../action-mappers/team-modifier-actions";
import { updateOpponentMove } from "../../../action-mappers/opponent-modifier-actions";
import { connect } from "react-redux";
import { MoveSelectComponent } from "./MoveSelectComponent";

const mapStateToProps = (state: IState) => {
    return {
        teamPokemon: state.pokemonState.myPokemon,
        opponentPokemon: state.pokemonState.opponent,
        teamModifiers: state.modifiersTeamState,
        opponentModifiers: state.modifiersOpponentState
    };
};

const mapDispatchToProps = {
    updateTeamMove,
    updateOpponentMove
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveSelectComponent);