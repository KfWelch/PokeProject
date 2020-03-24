import { IState } from "../../reducers";
import { connect } from "react-redux";
import { PokemonSelectorComponent } from "./PokemonSelectorComponent";
import { getMyPokemon, getOpponentPokemon } from '../../action-mappers/pokemon-actions';


const mapStateToProps = (state: IState) => {
    return {
        myPokemon: state.pokemonState.myPokemon,
        opponent: state.pokemonState.opponent
    };
};

const mapDispatchToProps = {
    getMyPokemon,
    getOpponentPokemon
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSelectorComponent)