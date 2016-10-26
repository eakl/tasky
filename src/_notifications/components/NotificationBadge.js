'use strict'

import React from 'react'

import './NotificationBadge.css'

const NotificationBadge = ({ notification }) => (
  // What about if there are 10000 notifs?
  <section className='twai-notification-badge'>
    {notification}
  </section>
)

export default NotificationBadge
