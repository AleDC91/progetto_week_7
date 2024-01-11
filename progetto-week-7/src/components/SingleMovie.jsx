import React, { Component } from "react";
import "../styles/SingleMovie.css";
import InfoFilmComponent from "./InfoFilmComponent";


export default class SingleMovie extends Component {
  state = {
    isActive: false,
    timeoutId: null,

  };

  componentDidMount() {
    window.addEventListener("resize", this.props.handleResize);
    this.props.calculateMovieSize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.props.handleResize);
  }


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

 




  

  render() {
    return (
        <>
        <div
        style={{ minWidth: `${this.props.movieWidth}px`, minHeight: `${this.props.movieWidth *1.2}px`, backgroundColor: "transparent" }}
        className={`single-movie ${this.state.isActive ? "active" : ""}`}
       
        onMouseEnter={this.activateZoom}
        onMouseLeave={this.removeZoom}
        
        >
        
        <img className="img-fluid" src={this.props.movie.Poster !== "N/A" ? this.props.movie.Poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png" } alt={this.props.movie.Title}  />
        {this.state.isActive && <InfoFilmComponent movie={this.props.movie} />}
      </div>
      </>
    );
  }
}
