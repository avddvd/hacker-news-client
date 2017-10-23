import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { HOME_PAGE_ROUTE } from '../../routes'

import Stories from '../stories'

const title = 'Top Stories'

const StoriesPage = ({ category }) =>
  (
    <div className="container mt-4">
      <Helmet title={title} />
      <div className="row">
        <div className="col-12">
          <h1>{title}</h1>
          <Stories category={category}/>
          <div><Link to={HOME_PAGE_ROUTE}>Go to the homepage</Link>.</div>
        </div>
      </div>
    </div>
  )

StoriesPage.propTypes = {
  category: PropTypes.string.isRequired,
}

export default StoriesPage
