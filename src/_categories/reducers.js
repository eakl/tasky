'use strict'

import * as t from './actionTypes'

const initialState = [
  {
    _id: 'kmhxer4y873y58mgxyumg487xt48',
    name: 'Lunch',
    notification: 10
  },
  {
    _id: 'hxjkehmhr438874y832xmrrekmfb',
    name: 'Travel',
    notification: 2
  },
  {
    _id: 'jkamzjmhfey483y8y38203xmejem',
    name: 'Meeting',
    notification: 0
  },
  {
    _id: 'zjdhzmfdmg874y87633xrkxxmh48',
    name: 'Flight',
    notification: 10
  }
]

export const categoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case t.LOAD:
      return state

    default:
      return state
  }
}
