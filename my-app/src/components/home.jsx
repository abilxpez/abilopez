import React from "react";
//import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import image1 from '../assets/pic.jpg';


//import BoxLeft from './boxleft';
//import BoxRight from './boxright';
//import Button from './button';



/*
const StyledButton = styled(Button)`
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
*/


function Home() {
  return (
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded"
              src={image1}
              alt="Flowers"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About Abi</h1>
            <p>
            Abi Lopez is a Lynwood alum - she attended Washington Elementary School, Hosler Middle School, and graduated from Lynwood High School, Class of 2018. Abi is currently a junior at Stanford University studying Electrical Engineering with a minor in Human Rights. In high school, she was very involved as the 2nd Annual Director of the Girls STEM Conference, and as president and founder of the Society of Women Engineers and Service Knights. At Stanford, she organizes political discussions with Stanford in Government as well as codes the website for Stanford’s school newspaper, The Daily. Abi hopes to work at the intersection of human rights and engineering, working on immigration policy research or expanding renewable energy. 

            </p>
            <Button variant="outline-secondary" href="/about">Read Bio</Button>
          </div>
          
        </div>
      </div>
  );
}

export default Home;


/*<div>
            <BoxLeft title="About the Artist" text="“Kauppila's fascination with birds began with her childhood in rural Vermont. They represented to her a kind of freedom that humans could only emulate and watch from afar. This awe for the natural world led her in part to gravitate towards classical Chinese ink painting, incorporating its line and form as well as mastering it as a medium…”"
              imageURL={image1} ></BoxLeft>

            <BoxRight title="About the Artist" text="“Kauppila's fascination with birds began with her childhood in rural Vermont. They represented to her a kind of freedom that humans could only emulate and watch from afar. This awe for the natural world led her in part to gravitate towards classical Chinese ink painting, incorporating its line and form as well as mastering it as a medium…”"
              imageURL={image1} ></BoxRight>
            <div>
              <Button></Button>
            </div>
          </div> */