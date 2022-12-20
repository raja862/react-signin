
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './forgot.css';


function Apps(){


    return(
        <div className='color'>

        <h1 style={{textAlign: "center"}}>Forgotpassword</h1>

        <Form className='forg' style={{marginTop: "5%",
 marginLeft:" 35%",
marginRight: "35%",
marginBottom: "30%"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>mobileNumber</Form.Label>
        <Form.Control type="text" placeholder="mobilenumber" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button><br></br>

      <a href={'/'}><h4>Go to Sign In page</h4></a>


    </Form>
        
        </div>
    )
}
export default Apps