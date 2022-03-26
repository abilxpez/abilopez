import React, { Component } from 'react';
import styled from 'styled-components';

const Outline = styled.div`
  display: flex; 
  margin: auto;
  width: 65%;
  height: auto;
`
const Left = styled.div`
  width: 50%;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 220px 60px 0px;
  background-color: #ffffff;
  opacity: 0.6;
  width: 50%;
`


export default class BoxRight extends Component {
  render() {
    return (
        <div>
            <Outline>
              <Left>
              <img src={this.props.imageURL} alt=""/>
              </Left>
              <Right>
                <div>
                <h1 style={{fontSize : 40 }}>{this.props.title}</h1>
                <h3 style={{fontSize : 20, lineHeight : 2.25, }}>{this.props.text}</h3>
                </div>
              </Right>
             </Outline>
        </div> 
    )
  }
}

