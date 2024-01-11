import React, { Component } from "react";
import SingleMovie from "./SingleMovie";
import "../styles/MoviesComponent.css";
import SlideButton from "./SlideButton";
import ErrorComponent from "./ErrorComponent";

export default class MoviesComponent extends Component {

state = {
    windowSize: window.innerWidth,
    movieWidth: 0,
    movieHeight: 0
}


calculateMovieSize = () => {
    const { innerWidth: inner } = window;
    let width, height;
if(inner > 1400) {
    width = inner / 8;
  }else if (inner > 1200) {
    width = inner / 7;
  } 
    else if (inner > 992) {
      width = inner / 6;
    } else if (inner > 768) {
      width = inner / 5;
    } else if (inner > 400) {
      width = inner / 3;
    } else {
      width = inner;
    }

    height = width / 3;

    this.setState({
      movieWidth: width,
      movieHeight: height
    });
    console.log(this.state)
  };

handleResize = () => {
    this.setState({ windowSize: window.innerWidth });
    this.calculateMovieSize();
    console.log(this.state.windowSize);
  };

  render() {
    return (
      <div className="movies d-flex" style={{ minHeight: `${this.state.movieWidth * 2.3}px` }}>
        <SlideButton direction="left" />
        {!this.props.isLoading &&
          this.props.movies.length === 0 &&
          this.props.errorMsg && <ErrorComponent className="mx-auto" />}
        {this.props.movies &&
          this.props.movies.map((movie) => (
            <SingleMovie
              key={movie.imdbID}
              movie={movie}
              isLoading={this.props.isLoading}
              movieWidth={this.state.movieWidth}
              movieHeight={this.state.movieHeight}
              windowSize={this.state.windowSize}  
              handleResize={this.handleResize}
              calculateMovieSize={this.calculateMovieSize}
            />
          ))}
        <SlideButton direction="right" />
      </div>
    );
  }
}
