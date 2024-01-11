import React, { Component } from "react";
import SingleMovie from "./SingleMovie";
import "../styles/MoviesComponent.css";
import SlideButton from "./SlideButton";
import LoadingPlaceholderComponent from "./LoadingPlaceholderComponent";

export default class MoviesComponent extends Component {
  render() {
    return (
      <div className="movies d-flex" >
        <SlideButton direction="left" />
        {this.props.movies.map(movie => <SingleMovie movie={movie} isLoading={this.props.isLoading}/>)}
        <SlideButton direction="right" />

      </div>
    );
  }
}
