'use strict'

import React from 'react'
import { Link } from 'react-router'

import './CategoryBox.css'
import NotificationBadge from '../../_notifications/components/NotificationBadge'

const CategoryBox = ({ name, notification }) => {
  const notificationShow = notification > 0 ? true : false

  return (
    <Link to='/categories/:id' className='twai-category-box'>
      {(notificationShow ? <NotificationBadge notification={notification} /> : undefined)}
      {name}
    </Link>
  )
}

export default CategoryBox
