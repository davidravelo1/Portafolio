import styled from "styled-components";
import MapChart from "./Map";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    @media (max-width: 1080px) {
     margin-top: 50px;
    }
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    @media (max-width: 1080px) {
     justify-content: center;
    }
`

const Form = styled.form`
   width: 500px;
   display: flex;
   flex-direction: column;
   gap: 25px;
   @media (max-width: 1080px) {
      width: 300px;
    }

`

const Title = styled.h1`
    font-weight: 300;
    margin: 0;
    @media  (max-width: 1080px) {
        margin-bottom: 0;
    }
`

const Input = styled.input`
    padding: 20px;
    background-color: lightgray;
    border: none;
    border-radius: 5px;
`

const TextArea = styled.textarea`
    padding: 20px;
    border: none;
    border-radius: 5px;
    background-color: lightgray;
`

const Button = styled.button`
   background-color: #BBDEFB;
   color: black;
   border: none;
   font-weight: bold;
   cursor: pointer;
   border-radius: 5px;
   padding: 20px;
`

const Right = styled.div`
    flex: 1;
    @media (max-width: 1080px) {
      display: none;
      margin-top: 10px;
    }
`;

function Contacts() {
    const ref = useRef()
    const [success, setSuccess] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q6lemam', 'template_wh6r58q', ref.current, 'rYttqkz9VfkuNXBuX')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Section id="contact">
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                        <Title>Contact Me</Title>
                        <Input placeholder="Name" name="name" />
                        <Input placeholder="Email" name="email" />
                        <TextArea placeholder="Write your message" name="" rows={10} />
                        <Button type="submit">Send</Button>
                        {success && 'Your message has been sent. thank you'}
                    </Form>
                </Left>
                <Right>
                    <MapChart />
                </Right>
            </Container>
        </Section>
    )
}
export default Contacts; 