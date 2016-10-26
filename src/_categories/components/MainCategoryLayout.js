'use strict'

import React from 'react'
import { connect } from 'react-redux'

import './MainCategoryLayout.css'
import CategoryBox from './CategoryBox'

const MainCategoryLayout = ({ children, categories, task }) => {
  const child = React.cloneElement(children, { task })

  return (
    <section className='twai-category-layout'>
      {categories.map((x) => (
        <CategoryBox key={x._id} name={x.name} notification={x.notification} />
      ))}
      {child}
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    task: state.tasks
  }
}

const ConnectedMainCategoryLayout = connect(mapStateToProps)(MainCategoryLayout)

export default ConnectedMainCategoryLayout
