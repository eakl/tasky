'use strict'

import React from 'react'

import './App.css'
import SearchBar from './_search/components/SearchBar'

const App = (props) => (
  <div className='twai-app'>
    <SearchBar />
    <div className='twai-main-view'>
      {props.children}
    </div>
  </div>
)

export default App
