import React, { Component } from 'react'

class Movie extends Component {
  render() {
    const { numberStock, movie, id } = this.props
    return (
      <div>
        <div className="oneMovie">
          <span>{numberStock}</span>
          <button
            onClick={() => {
              this.props.handleIncrement(movie)
            }}
            className="btn2 btn btn-success"
          >
            Increment
          </button>

          <button
            onClick={() => {
              this.props.handleDecrement(movie)
            }}
            className="btn2 btn btn-primary"
            disabled={numberStock === 0 ? 'disabled' : ''}
          >
            Decrement
          </button>

          <button
            onClick={() => this.props.onDelete(id)}
            className="btn btn btn-danger m-2"
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default Movie
