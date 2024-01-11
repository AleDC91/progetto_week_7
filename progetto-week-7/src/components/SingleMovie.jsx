import React, { Component } from "react";
import "../styles/SingleMovie.css";
import InfoFilmComponent from "./InfoFilmComponent";
import LoadingPlaceholderComponent from "./LoadingPlaceholderComponent";

export default class SingleMovie extends Component {
  state = {
    isActive: false,
    timeoutId: null,
    windowSize: window.innerWidth,
    movieWidth: 0,
    movieHeight: 0
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.calculateMovieSize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowSize: window.innerWidth });
    this.calculateMovieSize();
    console.log(this.state.windowSize);
  };

  activateZoom = () => {
    const timeoutId = setTimeout(() => {
      this.setState((prevState) => ({ isActive: !prevState.isActive }));
    }, 500);
    this.setState({ timeoutId });
  };

  removeZoom = () => {
    const { timeoutId } = this.state;

    // Annulla il timeout se è stato avviato
    if (timeoutId) {
      clearTimeout(timeoutId);
      this.setState({ timeoutId: null });
    }

    // Annulla l'attivazione se è già attiva
    if (this.state.isActive) {
      this.setState((prevState) => ({ isActive: !prevState.isActive }));
    }
  };

  calculateMovieSize = () => {
    const { innerWidth: inner } = window;
    let width, height;

    if (inner > 992) {
      width = inner / 6;
    } else if (inner > 768) {
      width = inner / 4;
    } else if (inner > 576) {
      width = inner / 3;
    } else {
      width = inner;
    }

    height = width / 3;

    this.setState({
      movieWidth: width,
      movieHeight: height
    });
  };




  

  render() {
    return (
        
        <div
        className={`single-movie ${this.state.isActive ? "active" : ""}`}
        onResize={() => this.handleResize()}
        onMouseEnter={this.activateZoom}
        onMouseLeave={this.removeZoom}
        style={{ width: `${this.state.movieWidth}px` }}
        >
        
        <img src={this.props.movie.Poster !== "N/A" ? this.props.movie.Poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png" } alt={this.props.movie.Title} />
        {this.state.isActive && <InfoFilmComponent movie={this.props.movie} />}
      </div>
          
    );
  }
}
