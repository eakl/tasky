'use strict'

import { combineReducers } from 'redux'

import categories from '../_categories'
import tasks from '../_tasks'

export default combineReducers({
  categories: categories.reducers.categoryReducer,
  tasks: tasks.reducers.taskReducer
})
