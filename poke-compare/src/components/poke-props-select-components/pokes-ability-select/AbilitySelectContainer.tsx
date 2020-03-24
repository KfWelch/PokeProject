import { IState } from "../../../reducers";
import { updateTeamAbility } from "../../../action-mappers/team-modifier-actions";
import { updateOpponentAbility } from "../../../action-mappers/opponent-modifier-actions";
import { connect } from "react-redux";
import { AbilitySelectComponent } from "./AbilitySelectComponent";

const mapStateToProps = (state: IState) => {
    return {
        teamPokemon: state.pokemonState.myPokemon,
        opponentPokemon: state.pokemonState.opponent,
        teamModifiers: state.modifiersTeamState,
        opponentModifiers: state.modifiersOpponentState
    };
};

const mapDispatchToProps = {
    updateTeamAbility,
    updateOpponentAbility
}

export default connect(mapStateToProps, mapDispatchToProps)(AbilitySelectComponent);