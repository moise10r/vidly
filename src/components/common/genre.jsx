import React, { Component } from 'react'
class Genre extends Component {
  render() {
    const {
      genre,
      handleGenre,
      selectedItem,
      textProperty,
      valueProperty,
    } = this.props
    return (
      <ul
        className="list-group"
        style={{
          backgroundColor: 'red',
          textAlign: 'center',
          width: '180px',
          cursor: 'pointer',
        }}
      >
        {genre.map((item) => (
          <li
            className={
              item === selectedItem
                ? 'list-group-item active '
                : 'list-group-item'
            }
            key={item[valueProperty]}
            onClick={() => handleGenre(item)}
          >
            <a>{item[textProperty]}</a>{' '}
          </li>
        ))}
      </ul>
    )
  }
}

Genre.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
}
export default Genre
