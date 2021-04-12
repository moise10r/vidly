import React from 'react'
import _ from 'lodash'
import propTypes from 'prop-types'
const Pagination = ({ itemsCount, pageSize, OnchangePage, currentPage }) => {
  const pagesCount = itemsCount / pageSize
  if (pagesCount <= 1) return null
  const pages = _.range(1, pagesCount + 1)
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? 'page-item active' : 'page-item'}
            style={{ cursor: 'pointer' }}
          >
            <a onClick={() => OnchangePage(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  OnchangePage: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired,
}
export default Pagination
