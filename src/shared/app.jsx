import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import { APP_NAME } from './config'
import Nav from './component/nav'
import HomePage from './component/page/home'
import HelloPage from './component/page/hello'
import HelloAsyncPage from './component/page/hello-async'
import NotFoundPage from './component/page/not-found'
import StoriesPage from './component/page/stories-page'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  TOP_STORIES_ROUTE,
  BEST_STORIES_ROUTE,
  JOB_STORIES_ROUTE,
  ASK_STORIES_ROUTE,
  SHOW_STORIES_ROUTE,
} from './routes'

const App = () =>
  (
    <div style={{ paddingTop: 54 }}>
      <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
      <Nav />
      <Switch>
        <Route path={TOP_STORIES_ROUTE} render={() => <StoriesPage category="top" />} />
        <Route path={BEST_STORIES_ROUTE} render={() => <StoriesPage category="best" />} />
        <Route path={SHOW_STORIES_ROUTE} render={() => <StoriesPage category="show" />} />
        <Route path={ASK_STORIES_ROUTE} render={() => <StoriesPage category="ask" />} />
        <Route path={JOB_STORIES_ROUTE} render={() => <StoriesPage category="job" />} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
export default App
