import React, { Component } from 'react'
import TableHeader from './tableHeader'
import TableBody from './tableBody'
class Table extends Component {
  render() {
    const { columns, sortColumn, onSort, data, onLike, onDelete } = this.props
    return (
      <table className="styled-table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody
          data={data}
          onLike={onLike}
          onDelete={onDelete}
          columns={columns}
        />
      </table>
    )
  }
}

export default Table
