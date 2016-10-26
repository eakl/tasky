'use strict'

import * as t from './actionTypes'

export const addNotification = () => ({
  type: t.ADD
})

export const deleteNotification = () => ({
  type: t.DELETE
})

export const increaseNotification = () => ({
  type: t.INCREASE
})

export const decreaseNotification = () => ({
  type: t.DECREASE
})
