import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';

interface IPokemonProps {
    pokemon: any
}

export class PokemonCardComponent extends React.PureComponent<IPokemonProps> {
    render() {
        if (this.props.pokemon) {
            return (
                <Card>
                    <CardImg top width='100px' src={this.props.pokemon.sprites.front_default} />
                    <CardBody>
                        <CardTitle>{this.props.pokemon.id}</CardTitle>
                        <CardSubtitle>{this.props.pokemon.name}</CardSubtitle>
                        <CardText>{`${this.props.pokemon.types[0].type.name}` + (this.props.pokemon.types[1] ?  ' and ' + this.props.pokemon.types[1].type.name : '' )}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div/>
            )
        }
    }
}