import { useEffect, useState } from "react";
import "./App.css";
import AnimalModal from "./Component/AnimalModal";
import Button from "react-bootstrap/Button";
import { createAnimal, scanAnimals } from "./dynamo";
import Animals from "./Component/Animals";

function App() {
  const [form, setForm] = useState({
    name: "",
    species: "",
    age: "",
    imageUrl: "",
    kidFriendly: false,
    vaccinated: false,
  });

  const [animals, setAnimals] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    scanAnimals().then(setAnimals)
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  async function handleAdd() {
    if (!form.name || !form.species || !form.age) return;
    const item = {
      id: crypto.randomUUID(),
      name: form.name,
      species: form.species,
      kidFriendly: form.kidFriendly,
      vaccinated: form.vaccinated,
      age: form.age,
      imageUrl: form.imageUrl || "placeholder",
    };

    await createAnimal(item);

    setShow(false);
  }

  return (
    <>
      <h1>Fur-Ever Friends Rescue</h1>

      <Button variant="primary" onClick={() => setShow(true)}>
        Add Animal
      </Button>

      <AnimalModal
        show={show}
        onHide={() => setShow(false)}
        form={form}
        onSave={handleAdd}
        onChange={handleChange}
      />
      <Animals animals={animals} title="Ready For Adoption" />
    </>
  );
}

export default App;
