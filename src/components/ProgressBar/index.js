import React, { PureComponent } from 'react'
import ProgressBarStyled from './styledComponent.js'

export default class ProgressBar extends PureComponent {
  render() {
    return (
      <ProgressBarStyled>
        <div className="inner" style={{width: `${this.props.percent}%`}}/>
      </ProgressBarStyled>
    )
  }
}
