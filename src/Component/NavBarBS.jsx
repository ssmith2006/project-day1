
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBarBS() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand> <Link to={"/"}>
          Lovie's Pet Center Rescue Database</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end gap-3">
          <Navbar.Text>
            Signed in as: <a href="#login">Lovie Smith</a>
          </Navbar.Text>
          <div> <Link to={"/admin"}>Volunteer Opportunity Database</Link></div> 
           
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
