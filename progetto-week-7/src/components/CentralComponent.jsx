import React, { Component } from "react";
import GalleryComponent from "./GalleryComponent";
import { OMDb_API_KEY, URL } from "../config/config";
import "../styles/CentralComponent.css";
import LoadingPlaceholderComponent from "./LoadingPlaceholderComponent";

export default class CentralComponent extends Component {
  state = {
    films: {
      harryPotter: [],
      lordOfTheRings: [],
      jasonBourne: [],
    },
    isLoading: false,
    errorMsg: "",
  };

  getMovies = (title) => {
    this.setState({ isLoading: true });
    fetch(`${URL}?apikey=${OMDb_API_KEY}&s=${encodeURIComponent(title)}`).then(
      (res) => {
        console.log(res);
        return res.json();
      }
    );
  };

  getHarryPotter = () => {
    this.setState({ isLoading: true });
    fetch(`${URL}?apikey=${OMDb_API_KEY}&s=harry%20potter`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) =>
        this.setState(
          (prevState) => ({
            ...prevState,
            films: { ...prevState.films, harryPotter: json.Search },
          }),
          () => console.log(this.state)
        )
      )
      .catch((err) => this.setState({ errorMsg: err.message }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  getLordOfTheRings = () => {
    this.setState({ isLoading: true });
    fetch(`${URL}?apikey=${OMDb_API_KEY}&s=lord%20of%20the%20rings`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) =>
        this.setState(
          (prevState) => ({
            ...prevState,
            films: { ...prevState.films, lordOfTheRings: json.Search },
          }),
          () => console.log(this.state)
        )
      )
      .catch((err) => this.setState({ errorMsg: err.message }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  jasonBourne = () => {
    this.setState({ isLoading: true });
    fetch(`${URL}?apikey=${OMDb_API_KEY}&s=jason%20bourne`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) =>
        this.setState(
          (prevState) => ({
            ...prevState,
            films: { ...prevState.films, jasonBourne: json.Search },
          }),
          () => console.log(this.state)
        )
      )
      .catch((err) => this.setState({ errorMsg: err.message }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.getHarryPotter();
    this.getLordOfTheRings();
    this.jasonBourne();
  }

  render() {
    return (
      <div className="central text-white px-4">
        <GalleryComponent
          title="Harry Potter"
          movies={this.state.films.harryPotter}
          isLoading={this.state.isLoading}
        />
        <GalleryComponent
          title="Il Signore degli Anelli"
          movies={this.state.films.lordOfTheRings}
          isLoading={this.state.isLoading}
        />
        <GalleryComponent
          title="JSON Bourne"
          movies={this.state.films.jasonBourne}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}
