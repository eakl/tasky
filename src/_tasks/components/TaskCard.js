'use strict'

import React from 'react'

import './TaskCard.css'

const taskModel = {
  name: String,
  created: Date,
  owner: String,
  member: [],
  target_date: Date,
  duration: 'Time',
  geo: '???',
  context: { },
  tags: [],
  cost_effort: '100%',
  benefit_result: '100%',
  rank: Number, // Based on 80/20 cost/benefit - effort/result
  weight_w: '100%' // weight (contribution in percent of the whole workload)
}

const TaskCard = ({ task }) => {
  return (
    <section className='twai-task-card'>
      <div className='twai-task-card__name'>
        {task.name}
      </div>

      <div className='twai-task-card__owner'>
        Owner: {task.owner}
      </div>

      <div className='twai-task-card__member'>
        {task.member}
      </div>

      <div className='twai-task-card__target-date'>
        Target Date: {task.target_date}
      </div>

      <div className='twai-task-card__duration'>
        {task.duration}
      </div>

      <div className='twai-task-card__cost-effort'>
        Cost: {task.cost_effort}
      </div>

      <div className='twai-task-card__benefit-result'>
        Benefit: {task.benefit_result}
      </div>
    </section>
  )
}

export default TaskCard
