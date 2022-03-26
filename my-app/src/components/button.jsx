import React, { Component } from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    background-color: white;
    border: 2px solid #e7e7e7;
    color: black;
    padding: 16px 32px;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    &:hover {background-color: #e7e7e7;}
`
export default class Button extends Component {
    handleClick = () => {
        /* change to linking code */
        console.log('Click happened');
      }
      render() {
        return (
            <div>
            <StyledButton onClick={this.handleClick}>Click Me</StyledButton>
            </div>
            )
      }
  }
  