'use strict'

import moment from 'moment'

import * as t from './actionTypes'

const initialState = {
  name: 'Meeting with Friends',
  created: moment().format('YYYY-MM-DD'),
  owner: 'Elias',
  member: ['Thibaut', 'Hadrien', 'Paul', 'Hugo'],
  target_date: moment().add(7, 'days').format('YYYY-MM-DD'),
  duration: moment.duration(1, 'hour').humanize(true),
  geo: 'Paris',
  context: { },
  tags: ['fun', 'resto', 'drinks'],
  cost_effort: '10%',
  benefit_result: '30%',
  rank: 3,
  weight_w: '5%'
}

export const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case t.ADD:
      return state

    case t.DELETE:
      return state

    case t.MOVE:
      return state

    default:
      return {
        ...state,
        target_date: state.target_date.toString(),
        duration: state.duration.toString()
      }
  }
}
