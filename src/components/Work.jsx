import { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import Managment from "./Managment";

const data = [
    "Web Design",
    "Development",
    "Managment",
    "Frameworks"
];
const Section = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;

`;
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between; 
    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
    
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 768px) {
        padding: 20px;
        justify-content: center;
    }
`;
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column; 
    gap: 20px;
    @media only screen and (max-width: 768px) {
        padding: 0;
    
    }
`;
const ListItem = styled.li`
   font-size: 100px;
   //font-weight: bold;
   cursor: pointer;
   color: transparent;
   -webkit-text-stroke: 1px white ; 
   position: relative; 
   @media only screen and (max-width: 768px) {
        font-size: 24px;
        color: white;
        -webkit-text-stroke: 0px ; 
    }
   &:after{
        content: "${(props)=>props.text}";
        position: absolute;
        top:0;
        left:0 ;
        color: #536DFE;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
   }

   &:hover{
        &:after{
            color: #8C9EFF;
            animation: moveText 0.5s linear both;

            @keyframes moveText{
                to{
                    width: 100%;
                }
            }
        }
   }
`;
const Right = styled.div`
    flex: 1;
    margin-left: 300px;
    @media only screen and (max-width: 768px) {
      margin: auto;
    }
`;
function Works() {
    const [work,setWork] = useState("Web Design")
    return (
        <Section id="work">
            <Container>
                <Left>
                    <List>
                        {data.map((item) => (
                            <ListItem key={item} text={item} onClick={()=>setWork(item)}>{item}</ListItem>
                            ))}
                    </List>
                </Left>
                <Right>
                    {work==="Web Design" ? (<WebDesign/>) : work==="Development" ? (<Development/>) : (<Managment/>) }
                </Right>
            </Container>
        </Section>   
    )
}
export default Works; 