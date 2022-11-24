import React, { useEffect, useRef } from "react";
import Navibar from "./Navibar";
import { UAParser } from 'ua-parser-js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = ()=>{
    let a, b;

  var parser = new UAParser();
  let os = parser.getDevice();

  if (os.model == "iPhone") {
    a = "navup idesign";
    b = "idesign";
  } else {
    a = "fix navdown";
    b = "fix navdown"
  }
  const [funcdis, changefunc] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    changefunc(true)
    console.log(funcdis)
    if (funcdis == true){
      setInterval(() => {
        console.log('Interval triggered');
        changefunc(false)
      }, 5000);
    }
    else{
      setInterval(() => {
        console.log('else');
        changefunc(false)
      }, 5000);
    }
    
    e.preventDefault();
    
    emailjs.sendForm('service_hze6pd4', 'template_5lxlfqe', form.current, 'WzTRfHLdkCGT7i1hL')
    .then((result) => {
      console.log(result.text);
      alert("Your form is submitted, we will contact you in no time")
      e.target.reset()
    }, (error) => {
      console.log(error.text);
      alert("Something went wrong, Please try again later")
    });
  };
  useEffect(()=>{
    document.title = 'Contact'

  })

    return(
        <>
         <div className={a}>
        <Navibar  className={b} />
      </div>
      <div className="contactstart">
      <Form ref={form} className="formwidth" onSubmit={sendEmail}>
      <h2><span style={{borderBottom:"2px solid limegreen"}}>Contact Form</span></h2>
      <Form.Group className="mb-2" controlId="Name">
        <Form.Label>Your Name <span className="red">*</span></Form.Label>
        <Form.Control type="text" placeholder="Jashan" name="name" required/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Your Email <span className="red">*</span></Form.Label>
        <Form.Control type="email" placeholder="myemail@email.com" name="email" required/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="mobileno">
        <Form.Label>Mobile no.</Form.Label>
        <Form.Control type="number" placeholder="+91987456321" name="mobile"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="message">
        <Form.Label>Message for Developer <span className="red">*</span></Form.Label>
        <Form.Control type="text" placeholder="I want a website for my restaurant" name="message" required/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button disabled={funcdis} className="buttonbackgroundcontact"  type="submit">
        Submit
      </Button>
    </Form>
      </div>
        </>
    )
}
export default Contact;
