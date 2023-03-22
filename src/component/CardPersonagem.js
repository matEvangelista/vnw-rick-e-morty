import React, { Component } from "react";
import axios from "axios";
import { CardItSelf } from "../styles";

let API;

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            episodeName: ""
        }
    }

    pegarEpisodio = async () => {
        API = axios.create({
          baseURL: this.props.episode
        })
        const resposta = await API.get();
        const episode = `${resposta.data.episode} - ${resposta.data.name}`
        this.setState({
          episodeName: episode
        });
      };
    
    componentDidMount() {
        this.pegarEpisodio()
    }

    render() {
        return (
            <CardItSelf gender={this.props.gender} status={this.props.status}>
                <h2>{this.props.name}</h2>
                <img src={this.props.image} alt={this.props.name} />
                <h2>Species: {this.props.species}</h2>
                <h2>Gender: <span className="gender">{this.props.gender}</span></h2>
                <h2>Status: <span className="status">{this.props.status}</span></h2>
                <h2>First seen in: {this.state.episodeName}</h2>
            </CardItSelf>
        )
    }
}