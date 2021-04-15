import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Like from './common/like'
import Table from './common/table'
class MovieTable extends Component {
  columns = [
    {
      path: 'title',
      label: 'Title',
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: (movie) => (
        <Like
          liked={movie.like}
          handleChangeColor={() => this.props.onLike(movie)}
        />
      ),
    },
    {
      key: 'delete',
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn btn-danger"
        >
          {' '}
          Delete
        </button>
      ),
    },
  ]
  render() {
    const { allMovies, onDelete, onSort, onLike, sortColumn } = this.props

    return (
      <div>
        <Link
          to="/movies/new"
          className="btn btn-primary"
          style={{ marginBottom: '0px' }}
        >
          New Movie
        </Link>
        <Table
          onDelete={onDelete}
          onLike={onLike}
          sortColumn={sortColumn}
          data={allMovies}
          columns={this.columns}
          onSort={onSort}
        />
      </div>
    )
  }
}

export default MovieTable
