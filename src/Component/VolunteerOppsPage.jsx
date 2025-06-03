import React, { useState } from "react";
import VolunteerOppsModal from "./VolunteerModal";
import { createOpportunity } from "../dynamoVolunteer";

export default function VolunteerOpps() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    isFilled: false,
  });

  const [opportunities, showOpportunities] = useState([]);
  const [show, setShow] = useState(false);

  async function handleAdd() {
    const item = {
      id: crypto.randomUUID(),
      title: form.title(),
      description: form.description(),
      date: form.date(),
      location: form.location(),
      isFilled: form.isFilled(),
    };
    await createOpportunity(item)
    setShow(false);
  }
  return (
    <>
      <h1>Volunteer Opportunities</h1>
      <VolunteerOppsModal show={show} />
    </>
  );
}
