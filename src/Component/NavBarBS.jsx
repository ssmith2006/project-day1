
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBarBS() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          Lovie's Pet Center Rescue Database
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Lovie Smith</a>
          </Navbar.Text>
          <div> <Link to={"/admin"}>Volunteer Opportunity Database</Link></div> 
           
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
