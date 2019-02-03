import React, { PureComponent } from 'react'
import SearchInputStyled from './styledComponent.js'

import SearchImg from '../../asset/search.png'

export default class SearchInput extends PureComponent {
  render() {
    return (
      <SearchInputStyled>
        <input
          type="text"
          placeholder="Find Pokemon"
          onChange={e => this.props.onChange(e.target.value)}
        />
        <div className="search-image-container">
          <img src={SearchImg} width="100%"/>
        </div>
      </SearchInputStyled>
    )
  }
}
