import React, { PureComponent } from 'react'
import FooterStyled from './styledComponent.js'


export default class Footer extends PureComponent {
  render() {
    return (
      <FooterStyled>
        <div className="add-btn-container" onClick={() => this.props.onAddBtnClicked()}>+</div>
      </FooterStyled>
    )
  }
}
