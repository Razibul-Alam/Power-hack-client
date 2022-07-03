import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'

const LoginRegistration = () => {
  const[checkedVal,setCheckedVal]=useState(false)
  const [userInfo,setUserInfo]=useState({
    name:'',email:'',password:''
  })
  // get checkbox value
  const getCheckBoxval=(e)=>{
 setCheckedVal(e.target.checked) 
}
// get all input
const handleChange=(e)=> setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

// submit user info
const handleSubmit=(e)=>{
  e.preventDefault()
console.log(userInfo)
  if(checkedVal){
axios.post(`https://nameless-wave-74906.herokuapp.com/api/registration`,userInfo)
.then(result=>{
alert('created successfully')
})
  }else{
    axios.post("https://nameless-wave-74906.herokuapp.com/api/login", userInfo)
  .then((res) => {
    if (res.data.insertedId) {
      alert("login successfully");
    }
  });
  }

}
    return (
        <>
        <div className='row d-flex justify-content-center mt-5'>
          <h3 className='text-center'>{checkedVal?'Create Account':'Please Login'}</h3>
        <div className='col-6 p-3'>
        <Form onSubmit={handleSubmit}>
  {checkedVal&&<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Enter Your Name" onChange={handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your name with anyone else.
    </Form.Text>
  </Form.Group>}
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   { !checkedVal&&<Form.Check type="checkbox" onChange={getCheckBoxval} label="Register (If you have no account)" />}
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
</div>
    </>
    );
};

export default LoginRegistration;