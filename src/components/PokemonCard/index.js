import React, { PureComponent } from 'react'
import ProgressBar from '../ProgressBar'
import PokemonCardStyled from './styledComponent.js'

import CuteImg from '../../asset/cute.png'

export default class PokemonCard extends PureComponent {
  getHp(){
    const hp = parseInt(this.props.pokemonData.hp)
    return hp > 100 ? 100 : hp
  }

  getStr(){
    const str = this.props.pokemonData.attacks ? this.props.pokemonData.attacks.length * 50 : 0
    return str > 100 ? 100 : str
  }

  getWeak(){
    const weak = this.props.pokemonData.weaknesses ? this.props.pokemonData.weaknesses.reduce((p, c) => {
      const cweak = c.value.replace(/[^0-9]/, '')
      return parseInt(cweak) + p
    }, 0) : 0
    const calculateWeak = weak * 100
    return calculateWeak > 100 ? 100 : calculateWeak
  }

  getDamage(){
    const damage = this.props.pokemonData.attacks ? this.props.pokemonData.attacks.reduce((p, c) => {
      const cdamage = c.damage.replace(/[^0-9]/, '')
      return cdamage ? parseInt(cdamage) + p : p
    }, 0) : 0
    return damage
  }

  getHappy(){
    const happy =  (this.getHp() / 10) + (this.getDamage() /10 ) + 10 - ((this.getWeak()) / 5)
    if(happy > 5){
      return 5
    }
    else if(happy < 1 || isNaN(happy)){
      return 1
    }
    else {
      return happy
    }
  }

  renderHappy(){
    let happys = []
    for (let i = 0; i < this.getHappy(); i++) {
      happys.push(<img src={CuteImg} />)
    }

    return (
      <div className="happy-container">
        {happys}
      </div>
    )
  }

  render() {
    const classname = this.props.mode === 'full' ? "full" : "half"
    return (
      <PokemonCardStyled className={classname}>
        <div className="pokemon-image-container">
          <img src={this.props.pokemonData.imageUrl} width="100%"/>
        </div>
        <div className="pokemon-detail-container">
          <div className="pokemon-name-container">
            {this.props.pokemonData.name}
          </div>
          <div className="pokemon-status-container">
            <div className="status">
              <div className="title">HP</div>
              <ProgressBar percent={this.getHp()} />
            </div>
            <div className="status">
              <div className="title">STR</div>
              <ProgressBar percent={this.getStr()} />
            </div>
            <div className="status">
              <div className="title">WEAK</div>
              <ProgressBar percent={this.getWeak()} />
            </div>
          </div>
          {this.renderHappy()}
        </div>
        <div className="delete-btn-container" onClick={() => this.props.onDeleteClicked()}>
          {this.props.btnText}
        </div>
      </PokemonCardStyled>
    )
  }
}
