import { IState } from "../../../reducers";
import { updateTeamHappy } from "../../../action-mappers/team-modifier-actions";
import { updateOpponentHappy } from "../../../action-mappers/opponent-modifier-actions"
import { connect } from "react-redux";
import { HappySelectComponent } from "./HappySelectComponent";

const mapStateToProps = (state: IState) => {
    return {
        teamPokemon: state.pokemonState.myPokemon,
        opponentPokemon: state.pokemonState.opponent,
        teamModifiers: state.modifiersTeamState,
        opponentModifiers: state.modifiersOpponentState
    };
};

const mapDispatchToProps = {
    updateTeamHappy,
    updateOpponentHappy
}

export default connect(mapStateToProps, mapDispatchToProps)(HappySelectComponent);