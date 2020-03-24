import { IState } from "../../../reducers";
import { updateTeamNature } from "../../../action-mappers/team-modifier-actions";
import { updateOpponentNature } from "../../../action-mappers/opponent-modifier-actions";
import { connect } from "react-redux";
import { NatureSelectComponent } from "./NatureSelectComponent";

const mapStateToProps = (state: IState) => {
    return {
        teamPokemon: state.pokemonState.myPokemon,
        opponentPokemon: state.pokemonState.opponent,
        teamModifiers: state.modifiersTeamState,
        opponentModifiers: state.modifiersOpponentState
    };
};

const mapDispatchToProps = {
    updateTeamNature,
    updateOpponentNature
}

export default connect(mapStateToProps, mapDispatchToProps)(NatureSelectComponent);