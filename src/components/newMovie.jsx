import React, { Component } from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import getMovie from '../services/genre'
import saveMovie from '../services/fakeMovie'

class NewMovie extends Form {
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
    const genre = getMovie
    this.setState({
      genre,
      data: this.state.data,
    })
  }

  onSubmit = () => {
    saveMovie(this.state.data)
    this.props.history.push('/')
  }
  render() {
    return (
      <div style={{ width: '30%', margin: '50px auto' }}>
        <h2>Add Movie</h2>
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

export default NewMovie
