import React, { Component } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
class TableHeader extends Component {
  raiseSort = (path) => {
    const { sortColumn, onSort } = this.props
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
    } else {
      sortColumn.path = path
      sortColumn.order = 'asc'
    }
    onSort(sortColumn)
  }
  renderSortIcon = (column) => {
    const { sortColumn } = this.props
    if (column.path !== sortColumn.path) return null
    if (sortColumn.order === 'asc') return <FaArrowDown />
    return <FaArrowUp />
  }
  render() {
    const { columns } = this.props
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <td
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              scope="col"
            >
              {column.label}
              {this.renderSortIcon(column)}
            </td>
          ))}
          <td></td>
          <td></td>
        </tr>
      </thead>
    )
  }
}

export default TableHeader
