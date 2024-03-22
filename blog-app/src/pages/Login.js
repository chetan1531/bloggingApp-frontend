import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Card, CardBody, CardHeader, Col, Container, Row ,Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { loginUser } from '../services/user-service';
import Base from '../components/Base';
import { doLogin } from '../auth';


const Login = () => {

  const [loginDetails,setLoginDetails]=useState({
    username:'',
    password:''
  })

  const handleChange = (event,field)=>{
     let actualValue=event.target.value;
     setLoginDetails({
      ...loginDetails,
      [field]:actualValue
     })
  }

  const handleReset=()=>{
    setLoginDetails({
      username:'',
      password:''
    })
  }
  
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(loginDetails);

    if(loginDetails.username.trim()==='' || loginDetails.password.trim()===''){
      toast.error("Username or password is missing !!");
      return;
    }

    loginUser(loginDetails).then((data)=>{
      
      console.log(data);
      
      doLogin(data,()=>{
        console.log("login details is saved to localStorage");
      })
      
      toast.success("Login Success !!");
    }).catch(error=>{
      console.log(error);
      if(error.response.status===400 || error.response.status===404){
        toast.error(error.response.data.message);
      }else{
      toast.error("Something went wrong on server !!");
      }
    })
 }
  return (
    <Base>
   
     <Container >
        <Row className='mt-4' >
            <Col sm={{size:6,offset:3}}>
                <Card style={{backgroundColor:"#FBE8E4"}}>
                    <CardHeader>
                        <h3>Login Here  !!</h3>
                    </CardHeader>
                    <CardBody> 
                    <Form onSubmit={handleSubmit}>
                    <FormGroup>
                         <Label for='email' >Email</Label>
                         <Input type="text" id='email' value={loginDetails.username} 
                         onChange={(e)=>{
                          handleChange(e,'username')
                         }} />
                    </FormGroup>

                    <FormGroup>
                         <Label for='password' >Password</Label>
                         <Input type="password" id='password' value={loginDetails.password} 
                         onChange={(e)=>{
                          handleChange(e,'password')
                         }} />
                    </FormGroup>
                    <Container className="text-center">
                    
                    <Button color="dark">Login</Button>
                    <Button className="ms-2" color="secondary" onClick={handleReset}>Reset</Button>



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

export default Login