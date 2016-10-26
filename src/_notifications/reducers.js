'use strict'

import * as t from './actionTypes'

const initialState = {}

export const categoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case t.ADD:
      return state

    case t.DELETE:
      return state

    case t.INCREASE:
      return state

    case t.DECREASE:
      return state

    default:
      return state
  }
}
