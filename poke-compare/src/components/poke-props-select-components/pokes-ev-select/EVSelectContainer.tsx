import { IState } from "../../../reducers";
import { updateTeamEffort } from "../../../action-mappers/team-modifier-actions";
import { updateOpponentEffort } from "../../../action-mappers/opponent-modifier-actions"
import { connect } from "react-redux";
import { EVSelectComponent } from "./EVSelectComponent";

const mapStateToProps = (state: IState) => {
    return {
        teamPokemon: state.pokemonState.myPokemon,
        opponentPokemon: state.pokemonState.opponent,
    };
};

const mapDispatchToProps = {
    updateTeamEffort,
    updateOpponentEffort
}

export default connect(mapStateToProps, mapDispatchToProps)(EVSelectComponent);