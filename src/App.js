
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App(){

    return(
        <div className='divclass'>
<iFrame className='gmail' src="https://embed.lottiefiles.com/animation/130013"></iFrame>   
<h2 className='sign'>SIGN IN</h2>    
    <Form className='gmailform'>
   
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label><h2>Email Address</h2></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-6" controlId="formBasicPassword">
        <Form.Label><h2>Password</h2></Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-6" controlId="formBasicCheckbox">
      </Form.Group>
    <a href={'/forgotpassword'}>Forgotpassword?</a><br></br>
      <Button variant="primary" type="submit">
        Sign in
      </Button><br></br>
      <a className='signup' href={'/createaccount'}><h3>Create Account (Sign up)</h3></a>
    </Form>
  

  </div>
    )
}

export default App;