import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import VolunteerOppsModal from "./VolunteerModal";
import {
  createOpportunity,
  deleteOpportunity,
  scanOpportunity,
  toggleOpportunity,
} from "../dynamoVolunteer";
import VolunteerOppsCards from "./VolunteerCards";
import NavBarBS from "./NavBarBS";

export default function VolunteerOpps() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    isFilled: false,
    timeSlots: "",
  });

  const [opportunities, setOpportunities] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    scanOpportunity().then(setOpportunities);
  }, []);

  async function handleAdd() {
    const item = {
      id: crypto.randomUUID(),
      title: form.title,
      description: form.description,
      date: form.date,
      location: form.location,
      isFilled: false,
      timeSlots: form.timeSlots
    };
    await createOpportunity(item);
    setOpportunities((prev) => [...prev, item]);
    setShow(false);
  }
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  async function handleDelete(id) {
    await deleteOpportunity(id);
    setOpportunities((prev) =>
      prev.filter((opportunity) => opportunity.id !== id)
    );
  }

  async function handleToggle(opportunity) {
    await toggleOpportunity(opportunity.id, !opportunity.isFilled);
    setOpportunities((prev) =>
      prev.map((o) =>
        o.id === opportunity.id ? { ...o, isFilled: !o.isFilled } : o
      )
    );
  }

  return (
    <>
    <NavBarBS/>
      <h1>Volunteer Opportunities</h1>
      <Button size="lg" variant="primary" onClick={() => setShow(true)}>
        Add New Opportunity
      </Button>

      <VolunteerOppsModal
        show={show}
        onHide={() => setShow(false)}
        form={form}
        onSave={handleAdd}
        onChange={handleChange}
      />
      <VolunteerOppsCards
        opportunities={opportunities}
        title="Available Volunteer Opportunities!"
        noOppsText="No Opportunities Available"
        onDelete={handleDelete}
        onOppsToggle={handleToggle}
      />
    </>
  );
}
