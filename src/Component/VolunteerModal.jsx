import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function VolunteerOppsModal({
  show,
  onHide,
  form,
  onChange,
  onSave,
}) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add Volunteer Opportunites</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={form.title}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                value={form.description}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formDays">
              <Form.Label>Days</Form.Label>
              <Form.Check
                type="checkbox"
                label="Monday"
                name="day1"
                checked={form.day1}
                value={form.day1}
                onChange={onChange}
              />
              <Form.Check
                type="checkbox"
                label="Tuesday"
                name="days"
                checked={form.day2}
                value={form.day2}
                onChange={onChange}
              />
              <Form.Check
                type="checkbox"
                label="Wednesday"
                name="days"
                checked={form.day3}
                value={form.day3}
                onChange={onChange}
              />
              <Form.Check
                type="checkbox"
                label="Thursday"
                name="days"
                checked={form.day4}
                value={form.day4}
                onChange={onChange}
              />
              <Form.Check
                type="checkbox"
                label="Friday"
                name="days"
                checked={form.day5}
                value={form.day5}
                onChange={onChange}
              />
              <Form.Check
                type="checkbox"
                label="Saturday"
                name="days"
                checked={form.day6}
                value={form.day6}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                name="location"
                value={form.location}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formTimeSlots">
              <Form.Label>Time Slots:</Form.Label>
              <Form.Control
                name="timeSlots"
                value={form.timeSlots}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Filled"
                name="isFilled"
                checked={form.isFilled}
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
            Save Opportunity
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
