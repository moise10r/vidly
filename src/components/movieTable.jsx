import React, { Component } from 'react'
import Like from './common/like'

const MovieTable = ({ allMovies, onSort, onDelete, onLike }) => {
  return (
    <>
      <div className="alert alert-success alert-dismissible" role="alert">
        <a href="" className="close">
          Primary alert
        </a>
      </div>
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
              <td>{movie.title}</td>
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
    </>
  )
}

export default MovieTable
