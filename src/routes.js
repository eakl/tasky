'use strict'

import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './App'
import c  from './_categories'
import t from './_tasks'

const routes = (
  <Route path='/' component={App}>
    <Route path='categories' component={c.MainCategoryLayout}>
      <IndexRoute component={t.TaskCard} /> //  path='task'
    </Route>
  </Route>
)

export default routes
