import React, { PureComponent } from 'react'
import ModalStyled from './styledComponent.js'

export default class ModalComponent extends PureComponent {
  render() {
    return (
      <ModalStyled onClick={() => this.props.onBackgroundClicked()}>
        {this.props.children}
      </ModalStyled>
    )
  }
}
