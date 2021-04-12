import React, { Component } from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import getGenres from '../services/genre'
import { getMovie, saveMovie } from '../services/fakeMovie'

class FormMovie extends Form {
  state = {
    data: {
      title: '',
      genreId: '',
      numberInstock: '',
      dailyRentalRate: '',
    },
    genre: [],
    errors: {},
  }
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required(),
    numberInstock: Joi.number().min(0).max(100).label('Number in Stock'),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label('Daily Rental Rate'),
  }
  componentDidMount() {
    const genre = getGenres
    this.setState({
      genre,
    })
    const movieId = this.props.match.params
    if (movieId.id === 'new') return
    const movie = getMovie(movieId.id)
    if (!movieId) return this.props.history.replace('/not-found')
    console.log(movie)
    this.setState({
      data: this.mapToViewModel(movie),
    })
  }
  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInstock: movie.numberInstock,
      dailyRentalRate: movie.dailyRentalRate,
    }
  }
  onSubmit = () => {
    this.props.history.push('/')
    saveMovie(this.state.data)
    console.log('add movie')
  }
  render() {
    return (
      <div style={{ width: '30%', margin: '50px auto' }}>
        <h2>Movie Form</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect('genreId', 'Genre', this.state.genre)}
          {this.renderInput('numberInstock', 'Number in Stock')}
          {this.renderInput('dailyRentalRate', 'Daily Rental Rate')}
          {this.renderButton('save')}
        </form>
      </div>
    )
  }
}

export default FormMovie
