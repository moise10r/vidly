import React, { Component } from 'react'
import Like from './common/like'
import { Link } from 'react-router-dom'
import Input from './common/input'

class MovieTable extends Component {
  render() {
    const { allMovies, onSort, onDelete, onLike } = this.props
    return (
      <div>
        <Link
          to="/movies/new"
          className="btn btn-primary"
          style={{ marginBottom: '0px' }}
        >
          New Movie
        </Link>
        <table className="styled-table">
          <thead>
            <tr>
              <th onClick={() => onSort('title')} scope="col">
                Title
              </th>
              <th onClick={() => onSort('genre.name')} scope="col">
                Genre
              </th>
              <th onClick={() => onSort('numberInStock')} scope="col">
                Stock
              </th>
              <th onClick={() => onSort('dailyRentalRate')} scope="col">
                Rate
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allMovies.map((movie) => (
              <tr key={movie._id}>
                <td>
                  <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                </td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInstock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.like}
                    handleChangeColor={() => onLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default MovieTable
