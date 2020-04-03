import { IState } from "../../../reducers";
import { connect } from "react-redux";
import { StatModsComponent } from "./StatModsComponent";

const mapStateToProps = (state: IState) => {
    return {
        teamPokemon: state.pokemonState.myPokemon,
        opponentPokemon: state.pokemonState.opponent,
    };
};

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(StatModsComponent);