
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Sup(){

    return(

        <div>

<h1 style={{textAlign: "center"}}>SIGN UP </h1>
<Form style={{marginTop: "5%",
 marginLeft:" 35%",
marginRight: "35%",
marginBottom: "30%" , fontWeight: "bolder"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>conform Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>mobileNumber</Form.Label>
        <Form.Control type="text" placeholder="mobileNumber" />
      </Form.Group>

   
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="male"
      />
      <Form.Check 
      
        type="switch"
        label="female"
        id="custom-switch"
      />
  
       
      <Button variant="primary" type="submit">
        Submit
      </Button>

      <a href={'/'}><h4>Go to Sing In Page</h4></a>
    </Form>

        </div>
    )
}

export default Sup;