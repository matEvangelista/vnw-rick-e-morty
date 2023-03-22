import React from "react";
import axios from "axios";
import Card from "./component/CardPersonagem";
import { Button, ButtonContainer, CardContainer, Tudo } from "./styles";



let API;

export default class App extends React.Component {

  state = {
    info: [],
    numberPage: 1
  };

  pegarPersonagens = async () => {
    API = axios.create({
      baseURL: "https://rickandmortyapi.com/api/character?page=" + this.state.numberPage
    })
    const resposta = await API.get();
    const itensApi = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });
    this.setState({
      info: itensApi
    });
  };

  componentDidMount() {
    this.pegarPersonagens();
  }

  componentDidUpdate() {
    this.pegarPersonagens();
  }

  render() {
    return (

      <Tudo>
        <img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
          alt="Rick and Morty logo"
        />

        <ButtonContainer>
          <Button onClick={
            () => this.setState({ numberPage: this.state.numberPage - 1 })
          } disabled={this.state.numberPage === 1}>
            Anterior</Button>


          <Button onClick={
            () => this.setState({ numberPage: this.state.numberPage + 1 })
          } disabled={this.state.numberPage === 42}>
            Próximo</Button>
        </ButtonContainer>


        <CardContainer>
          {this.state.info.map((item) => (
            <Card name={item.name} species={item.species} image={item.image}
              gender={item.gender} status={item.status} episode={item.episode[0]} />
          ))}
        </CardContainer>


        <ButtonContainer>
          <Button onClick={
            () => this.setState({ numberPage: this.state.numberPage - 1 })
          } disabled={this.state.numberPage === 1}>
            Anterior</Button>


          <Button onClick={
            () => this.setState({ numberPage: this.state.numberPage + 1 })
          } disabled={this.state.numberPage === 42}>
            Próximo</Button>
        </ButtonContainer>
      </Tudo>
    );
  }
}
