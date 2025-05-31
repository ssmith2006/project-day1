import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import Form from "react-bootstrap/Form";

export default function AnimalModal({ show, onHide, form, onChange, onSave }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add New Animal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={form.name} onChange={onChange} />
            </Form.Group>
            <Form.Group controlId="formSpecies">
              <Form.Label>Species</Form.Label>
              <Form.Control
                name="species"
                value={form.species}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control name="age" value={form.age} onChange={onChange} />
            </Form.Group>
            <Form.Group controlId="formImageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="imageUrl"
                value={form.imageUrl}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Kid-Friendly"
                name="kidFriendly"
                checked={form.kidFriendly}
                onChange={onChange}
              ></Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Vaccinated"
                name="vaccinated"
                checked={form.vaccinated}
                onChange={onChange}
              ></Form.Check>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onSave}>
            Save Animal
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
