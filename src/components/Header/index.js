import React, { PureComponent } from 'react'
import HeaderStyled from './styledComponent.js'

export default class Header extends PureComponent {
  render() {
    return (
      <HeaderStyled>
        {this.props.title}
      </HeaderStyled>
    )
  }
}
