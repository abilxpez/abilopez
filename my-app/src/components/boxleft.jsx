import React, { Component } from 'react';
import styled from 'styled-components';
//import Button from 'react-bootstrap/Button';

const Outline = styled.div`
  display: flex; 
  margin: auto;
  width: 65%;
  height: auto;
`
const Left = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  padding: 60px;
  background-color: #ffffff;
  opacity: 0.6;
`
const Right = styled.div`
  flex: 50%;
  
`

export default class BoxLeft extends Component {
  render() {
    return (
        <div>
            <Outline>
              <Left>
                <div>
                <h1 style={{fontSize : 40 }}>{this.props.title}</h1>
                <h3 style={{fontSize : 20, lineHeight : 2.25, }}>{this.props.text}</h3>
                {/*<Button size='sm' variant="outline-secondary">Secondary</Button>*/}
                </div>
                
              </Left>
              <Right>
              <img src={this.props.imageURL} alt={this.props.alt} />
              </Right>
             </Outline>
        </div> 
    )
  }
}

