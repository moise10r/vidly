import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovie'
import Genre from './genre'
import getGenre from '../services/genre'
import Pagination from './common/pagination'
import { paginate } from '../utils/pagination'
import MovieTable from './movieTable'
import SearchInput from './common/search'
import _ from 'lodash'

class Main extends Component {
  state = {
    movies: [],
    like: true,
    limit: 10,
    currentPage: 1,
    genre: [],
    sortColumn: {
      path: 'title',
      order: 'asc',
    },
    active: false,
    searchQuery: '',
    selectedGenre: null,
  }

  handleDeleteMovie = (movie) => {
    const newMovies = this.state.movies.filter((item) => movie._id !== item._id)
    this.setState({
      movies: newMovies,
    })
  }
  handleDelete = (movieId) => {
    const remainMovies = this.state.movies.filter((m) => m._id !== movieId)
    this.setState({
      movies: remainMovies,
    })
  }
  resetNumberInStock = () => {
    const movies = this.state.movies.map((m) => {
      m.numberInstock = 0
      return m
    })
    this.setState({
      movies,
    })
  }
  handleIncrement = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = { ...movie }
    movies[index].numberInstock++
    this.setState({
      movies,
    })
  }
  handleDecrement = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = { ...movie }
    movies[index].numberInstock--
    this.setState({
      movies,
    })
  }

  tag = React.createRef()
  handleChangeColor = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = { ...movies[index] }
    movies[index].like = !movies[index].like
    const user = this.state.active
      ? this.tag.current.classList.add('click')
      : this.tag.current.classList.remove('click')
    console.log(user)
    this.setState({ movies, active: !this.state.active })
  }

  handleGenre = (genre) => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1,
      searchQuery: '',
    })
  }
  OnchangePage = (page) => {
    console.log(page)
    this.setState({
      currentPage: page,
    })
  }

  componentDidMount() {
    const genre = [{ _id: '', name: 'All Movies' }, ...getGenre]
    this.setState({
      movies: getMovies,
      genre,
    })
    console.log('movies', this.state.movies)
    console.log('frist')
  }
  handleSort = (path) => {
    console.log(path)
    this.setState({
      sortColumn: {
        path,
        order: 'asc',
      },
    })
  }
  handleOneMovie = (movie) => {
    console.log(movie)
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 })
  }
  getPageData = () => {
    const {
      movies,
      selectedGenre,
      sortColumn,
      currentPage,
      limit,
      searchQuery,
    } = this.state

    let filtered = movies
    if (searchQuery) {
      filtered = movies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase()),
      )
    } else if (selectedGenre && selectedGenre._id) {
      filtered = movies.filter((m) => m.genre._id == selectedGenre._id)
    }
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
    const allMovies = paginate(sorted, currentPage, limit)
    return {
      data: allMovies,
      totalCount: filtered.length,
    }
  }
  render() {
    const {
      movies,
      genre,
      selectedGenre,
      currentPage,
      limit,
      searchQuery,
    } = this.state
    const { data, totalCount } = this.getPageData()
    return (
      <div
        className="main-container"
        style={{
          overflow: 'hidden',
          display: 'flex',
          marginTop: '30px',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div className="genre" style={{ marginRight: '20px' }}>
          <Genre
            genre={genre}
            movies={movies}
            selectedItem={selectedGenre}
            handleGenre={this.handleGenre}
          />
        </div>
        <div className="containers" style={{}}>
          {movies.length === 0 ? (
            <h3>There is no movie again</h3>
          ) : (
            <>
              <div>
                <h2>
                  Number of movies <span>{totalCount}</span>{' '}
                </h2>
                <SearchInput value={searchQuery} onChange={this.handleSearch} />
                <MovieTable
                  allMovies={data}
                  onLike={this.handleChangeColor}
                  onSort={this.handleSort}
                  onDelete={this.handleDeleteMovie}
                  OnehandleOneMovie={this.handleOneMovie}
                />
                <div>
                  <Pagination
                    OnchangePage={this.OnchangePage}
                    currentPage={currentPage}
                    itemsCount={movies.length}
                    pageSize={limit}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  changeClass(count) {
    return count === 0 ? 'main-hero-area-two' : 'main-hero-area-one'
  }
}

export default Main
