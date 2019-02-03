import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 60px;
  background: #ec5656;
  .add-btn-container{
    display: flex;
    align-items: center;
    color: white;
    font-size: 4em;
    position: absolute;
    background: #ec5656;
    padding: 0 30px;
    top: -45px;
    border-radius: 50%;
    width: 100px;
    justify-content: center;
    right: calc(50% - 50px);
    cursor: pointer;
  }
`
