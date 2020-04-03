import { IState } from "../../../reducers";
import { updateTeamIndividual } from "../../../action-mappers/team-modifier-actions";
import { updateOpponentIndividual } from "../../../action-mappers/opponent-modifier-actions"
import { connect } from "react-redux";
import { IVSelectComponent } from "./IVSelectComponent";

const mapStateToProps = (state: IState) => {
    return {
        teamPokemon: state.pokemonState.myPokemon,
        opponentPokemon: state.pokemonState.opponent,
    };
};

const mapDispatchToProps = {
    updateTeamIndividual,
    updateOpponentIndividual
}

export default connect(mapStateToProps, mapDispatchToProps)(IVSelectComponent);