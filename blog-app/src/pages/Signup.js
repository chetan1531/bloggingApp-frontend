import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Card, CardBody, CardHeader, Col, Container,Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap'

import { signup } from '../services/user-service';
import Base from '../components/Base';

const Signup = () => {
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        about:''
    })
    const [error,setError]=useState({
        errors:{},
        isError:false
    })

    const handleChange=(event,property)=>{
    
        setData({...data,[property]:event.target.value})

    }
    
    const RestData=()=>{
        setData({
            name:'',
            email:'',
            password:'',
            about:''
        })
    }

    const HandleSubmit=(event)=>{
        event.preventDefault();
 
        if(error.isError){
          toast.error("Form data is invalid, correct all details then submit .");
          return;
        }

        signup(data).then((resp)=>{
          console.log(resp);
          console.log("success log");
          toast.success("User is registered successfully !! user id"+ resp.id);
          setData({
            name:'',
            email:'',
            password:'',
            about:''
          })
        }).catch((error)=>{
          console.log(error);
          console.log("Error log");
         
          setError({
            errors:error,
            isError:true
          })
        });
        //data validate
        //call server api for sending data

    };

  return (
    <Base>
      <Container>
      <Row className='mt-4'>
        <Col sm={{size:6,offset:3}}>
        <Card style={{backgroundColor:"#FBE8E4"}}>
       <CardHeader >
      <h3> Fill Information to Register !!</h3>
       </CardHeader>
       <CardBody>
        <Form onSubmit={HandleSubmit}>
      <FormGroup>
        <Label for='name' >Name</Label>
        <Input type='text' placeholder='Enter here' id='name' onChange={(e)=>handleChange(e,'name')} value={data.name} invalid={ error.errors?.response?.data?.name ? true:false }/>
        <FormFeedback>
          { error.errors?.response?.data?.name }
        </FormFeedback>   
      </FormGroup>

      <FormGroup>
        <Label for='email' >Email</Label>
        <Input type='email' placeholder='Enter your email' id='email' onChange={(e)=>handleChange(e,'email')} value={data.email} invalid={ error.errors?.response?.data?.email ? true:false }/>
        <FormFeedback>
          { error.errors?.response?.data?.email }
        </FormFeedback>   
      </FormGroup>

     

      <FormGroup>
        <Label for='password' >Password</Label>
        <Input type='password' placeholder='Enter password' id='password' onChange={(e)=>handleChange(e,'password')} value={data.password} invalid={ error.errors?.response?.data?.password ? true:false } />
        <FormFeedback>
          { error.errors?.response?.data?.password }
        </FormFeedback>   
      </FormGroup>

      <FormGroup>
        <Label for='about' >Write something about yourself</Label>
        <Input type='textarea' placeholder='Enter here' id='about' onChange={(e)=>handleChange(e,'about')} value={data.about} style={{height : "150px"}} invalid={ error.errors?.response?.data?.about ? true:false }/>
        <FormFeedback>
          { error.errors?.response?.data?.about }
        </FormFeedback>      
      </FormGroup>

      <Container className='text-center'>
        <Button color="dark"> Register</Button>
        <Button color="secondary" className='ms-2' onClick={RestData}>Reset</Button>
      </Container>
        </Form>
       </CardBody>

      </Card>

        </Col>
      </Row>
     
      </Container>
    </Base>
  )
}

export default Signup