import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import VolunteerOppsModal from "./VolunteerModal";
import {
  createOpportunity,
  deleteOpportunity,
  scanOpportunity,
  toggleOpportunity,
  updateOpportunity,
  updateOpportunity1,
  updateOpportunity2,
  updateOpportunity3,
  updateOpportunity4,
  updateOpportunity5,
  updateOpportunity6,
  updateOpportunityDescription,
  updateOpportunityLocation,
} from "../dynamoVolunteer";
import VolunteerCards from "./VolunteerCards";
import NavBarBS from "./NavBarBS";

export default function VolunteerOpps() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    day1: false,
    day2: false,
    day3: false,
    day4: false,
    day5: false,
    day6: false,
    location: "",
    isFilled: false,
  });

  const [opportunities, setOpportunities] = useState([]);
  const [show, setShow] = useState(false);
  const [editOpportunities, setEditOpportunities] = useState("");

  useEffect(() => {
    scanOpportunity().then(setOpportunities);
  }, []);

  async function handleAdd() {
    if (editOpportunities.id.length > 1) {
      //we had .id.length but it gave an error of being undefined.  So I took the .id.length out and it worked but then another error occurred, so I added it back, now it works properly.//
      await handleEditOpps();
      setForm({
        title: editOpportunities.title,
        description: editOpportunities.description,
        day1: editOpportunities.day1,
        day2: editOpportunities.day2,
        day3: editOpportunities.day3,
        day4: editOpportunities.day4,
        day5: editOpportunities.day5,
        day6: editOpportunities.day6,
        location: editOpportunities.location,
        isFilled: editOpportunities.isFilled,
      });
      setShow(false); //closing the modal//
      setOpportunities([]); //clear my opps list
      scanOpportunity().then(setOpportunities); //scanning then storing??????
      return;
    } else {
      console.log(editOpportunities);
      const item = {
        id: crypto.randomUUID(),
        title: form.title,
        description: form.description,
        day1: form.day1,
        day2: form.day2,
        day3: form.day3,
        day4: form.day4,
        day5: form.day5,
        day6: form.day6,
        location: form.location,
        isFilled: false,
      };

      await createOpportunity(item);
      setForm({
        title: "",
        description: "",
        day1: false,
        day2: false,
        day3: false,
        day4: false,
        day5: false,
        day6: false,
        location: "",
        isFilled: false,
      });
      setOpportunities((prev) => [...prev, item]);
      setShow(false);
    }
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

  async function handleEditOpps() {
    await updateOpportunity(editOpportunities.id, form.title);
    await updateOpportunityDescription(editOpportunities.id , form.description);
    await updateOpportunityLocation(editOpportunities.id, form.location);
    await updateOpportunity1(editOpportunities.id, form.day1);
    await updateOpportunity2(editOpportunities.id, form.day2);
    await updateOpportunity3(editOpportunities.id, form.day3);
    await updateOpportunity4(editOpportunities.id, form.day4);
    await updateOpportunity5(editOpportunities.id, form.day5);
    await updateOpportunity6(editOpportunities.id, form.day6);
    setEditOpportunities("");
  }
  function handleUpdateOpps(id) {
    setEditOpportunities(id);
  }

  return (
    <>
      <div className="VolOppsBackground" />
      <NavBarBS />
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
      <VolunteerCards
        opportunities={opportunities}
        title="Available Volunteer Opportunities!"
        noOppsText="No Opportunities Available"
        onDelete={handleDelete}
        onOppsToggle={handleToggle}
        onEditOpps={handleUpdateOpps}
        onShowModal={() => setShow(true)}
      />
    </>
  );
}
