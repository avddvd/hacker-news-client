import $ from 'jquery'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { APP_NAME } from '../config'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  TOP_STORIES_ROUTE,
  BEST_STORIES_ROUTE,
  JOB_STORIES_ROUTE,
  ASK_STORIES_ROUTE,
  SHOW_STORIES_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../routes'

const handleNavLinkClick = () => {
  $('body').scrollTop(0)
  $('.js-navbar-collapse').collapse('hide')
}

const Nav = () =>
  (
    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target=".js-navbar-collapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="js-navbar-collapse collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {[
            { route: TOP_STORIES_ROUTE, label: 'topstories' },
            { route: BEST_STORIES_ROUTE, label: 'beststories' },
            { route: ASK_STORIES_ROUTE, label: 'asktories' },
            { route: SHOW_STORIES_ROUTE, label: 'showstories' },
            { route: JOB_STORIES_ROUTE, label: 'jobstories' },
          ].map(link => (
            <li className="nav-item" key={link.route}>
              <NavLink to={link.route} className="nav-link" activeStyle={{ color: 'white' }} exact onClick={handleNavLinkClick}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
export default Nav
