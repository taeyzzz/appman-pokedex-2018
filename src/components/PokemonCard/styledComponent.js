import styled from 'styled-components';

export default styled.div`
  height: 177px;
  margin: 10px;
  background: #f3f4f7;
  display: flex;
  padding: 14px;
  position: relative;
  &.full {
    width: calc(100% - 20px);
  }
  &.half{
    width: calc(50% - 20px);
  }
  &:hover{
    transition: 0.2s;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    .delete-btn-container{
      display: block;
      cursor: pointer;
      position: absolute;
      font-size: 2em;
      color: red;
      top: 5px;
      right: 15px;
    }
  }
  .pokemon-image-container{
    width: 30%;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .pokemon-detail-container{
    width: 70%;
    margin-left: 10px;
    .pokemon-name-container{
      font-size: 1.5em;
    }
    .pokemon-status-container{
      .status{
        display: flex;
        margin-bottom: 8px;
        .title{
          width: 80px;
          font-size: 0.8em;
        }
      }
    }
  }
  .happy-container{
    display: flex;
    img{
      width: 20px;
      height: 20px;
      margin: 3px;
    }
  }
  .delete-btn-container{
    display: none;
    font-size: 2em;
    color: red;
    top: 5px;
    right: 15px;
  }
`
