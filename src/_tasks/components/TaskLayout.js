'use strict'

import React from 'react'
import { connect } from 'react-redux'

import './TaskLayout.css'
import TaskCard from './TaskCard'

const TaskLayout = ({ task }) => {
  return (
    <section className='twai-task-layout'>
      <TaskCard task={task} />
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    task: state.tasks
  }
}

const ConnectedTaskLayout = connect(mapStateToProps)(TaskLayout)

export default ConnectedTaskLayout
