'use strict'

import * as t from './actionTypes'

export const addTask = () => ({
  type: t.ADD
})

export const deleteTask = () => ({
  type: t.DELETE
})

export const moveNotification = () => ({
  type: t.MOVE
})
