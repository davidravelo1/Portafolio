/* eslint-disable react/prop-types */
import { styled } from "styled-components"
import { Link } from "react-router-dom";
import 'animate.css'

const Section = styled.div`
    display: grid;
    grid-template-columns: repeat(5,20%);
    grid-template-rows: repeat(3,33%);
    gap: 0;
    background-color: #EFF1FA;
    opacity: 0.8;
    margin: 3rem 1rem;
    color: black;
    border-radius: 25px;
    padding: 0.5rem;
    box-shadow: 10px 5px 5px black;
`;

const PreVisualization = styled.img`
    display: block; 
    width: 95%;
    height: 300px;
    grid-column: 1/3;
    grid-row: 1/4;
    border: solid 3px;
    border-radius: 15px;
    box-shadow: 10px 5px 5px black;
`;

const Title_P = styled.h2`
    color: #536DFE;
    grid-column: 3/6;
`;

const Description = styled.p`
    grid-column: 3/6;
    grid-row: 2/3;
`;

const Btn = styled.button`
  width: 100px;
  height: 50px;
  text-align: center;
  padding: 10px;
  background-color: #BBDEFB;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  border: solid 2px;
  transition: transform ease-in 0.1s;
  @media only screen and (max-width: 769px) {
      margin-right: 15px;
    }
  &:hover{
    background-color: black;
    color: #BBDEFB;
    border: solid 3px #BBDEFB;
    font-size: 18px;
    transform: scale(0.9);
  }
`;

function Proyect(props) {
  return (
    <Section className="animate__animated animate__backInUp">
      <PreVisualization src={props.pre} />
      <Title_P>{props.title}</Title_P>
      <Description>{props.desc}</Description>
      <Btn><Link to="https://davidravelo1.github.io/Encriptador/">Visit site</Link></Btn>
    </Section>
  )
}

export default Proyect