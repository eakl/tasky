'use strict'

import React, { Component } from 'react'

import './SearchBar.css'

export default class SearchBar extends Component {
  constructor() {
    super()

    this.state = {
      term: ''
    }

    this.TextChange = this.TextChange.bind(this)
    this.TextClear = this.TextClear.bind(this)
  }

  TextChange(e) {
    const text = e.target.value
    console.log(text)
    this.setState({ term: text })
  }

  TextClear() {
    this.setState({ term: '' })
  }

  render() {
    return (
      <form className='twai-search-bar'>
        <input
          type='search'
          value={this.state.term}
          onChange={this.TextChange}
          onBlur={this.TextClear}
        />
      </form>
    )
  }
}
