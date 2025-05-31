import { useEffect, useState } from "react";
import "./App.css";
import AnimalModal from "./Component/AnimalModal";
import Button from "react-bootstrap/Button";
import {
  createAnimal,
  deleteAnimal,
  scanAnimals,
  toggleAdoption,
  updateAnimalImage,
} from "./dynamo";
import Animals from "./Component/Animals";
import NavBarBS from "./Component/NavBarBS";

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
    scanAnimals().then(setAnimals);
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

  async function handleDelete(id) {
    await deleteAnimal(id);
    setAnimals((prev) => prev.filter((animal) => animal.id !== id));
  }

  async function handleToggle(animal) {
    await toggleAdoption(animal.id, !animal.adopted);
    setAnimals((prev) =>
      prev.map((a) => (a.id === animal.id ? { ...a, adopted: !a.adopted } : a))
    );
  }

  async function handleEditImage(animal) {
    const url = window.prompt("Enter new image URL", animal.imageUrl);
    if (!url) return;
    await updateAnimalImage(animal.id, url);
    setAnimals((prev) =>
      prev.map((a) => (a.id === animal.id ? { ...a, imageUrl: url } : a))
    );
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
      adopted: false,
      imageUrl: form.imageUrl || "",
    };

    await createAnimal(item);
    setAnimals((prev) => [...prev, item]);
    setShow(false);
  }

  const available = animals.filter((animal) => !animal.adopted);
  const adopted = animals.filter((animal) => animal.adopted);

  return (
    <>
      <div className="background" />
      <NavBarBS />
      <h1 className="d-flex justify-content-center mt-5 display-1 myheading ">
        Fur-Ever Friends Rescue
      </h1>
      <div className="d-flex justify-content-center mt-3">
        <Button
          className="d-flex align-items-center"
          size="lg"
          variant="primary"
          onClick={() => setShow(true)}
        >
          Add Animal
        </Button>
      </div>

      <AnimalModal
        show={show}
        onHide={() => setShow(false)}
        form={form}
        onSave={handleAdd}
        onChange={handleChange}
      />
      <div className="mx-auto p-2 mt-5">
        <Animals
          animals={available}
          title="Ready For Adoption!"
          nopets="No Pets Available"
          onDelete={handleDelete}
          onAdoptToggle={handleToggle}
          onEditImage={handleEditImage}
        />
      </div>

      <div className="mx-auto p-2 mt-5">
        <Animals
          animals={adopted}
          title="These Lovies have found a home!"
          nopets="Please adopt a pet today!"
          onDelete={handleDelete}
          onAdoptToggle={handleToggle}
          onEditImage={handleEditImage}
        />
      </div>
      <div>
        <footer className="d-flex justify-content-center">
          
            <p><strong>&copy; 2025 Lovie's Pet Center. All Rights Reserved.</strong> </p>
          
        </footer>
      </div>
    </>
  );
}

export default App;
