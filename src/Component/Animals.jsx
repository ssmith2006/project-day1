import Image from "react-bootstrap/Image";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardBody } from "react-bootstrap";

export default function Animals({
  animals,
  title,
  onDelete,
  onAdoptToggle,
  onEditImage,
  nopets,
}) {
  if (animals.length === 0) return <h2>{nopets}</h2>;

  return (
    <div className="container text-center my-5">
      <h2>{title}</h2>

      <div className="d-flex flex-row gap-5 p-5">
        {animals.map((animal) => (
          <Card className="shadow-lg" style={{ width: "15rem" }} key={animal.id}>
            <Card.Body className="d-flex flex-column align-items-center text-center">
              <Card.Img
                src={animal.imageUrl}
                alt={animal.name}
                rounded
                fluid
                width={100}
              />

              <Button
                size="sm"
                variant="light"
                onClick={() => onEditImage(animal)}
              >
                Edit
              </Button>
              <div>
                <strong>{animal.name}</strong> - {animal.species}, age: {""}
                {animal.age}
              </div>
              <div>
                {animal.kidFriendly && "Kid-Friendly"}
                {!animal.kidFriendly && "Not Kid-Friendly"}
              </div>
              <div>
                {animal.vaccinated && "Vaccinated"}
                {!animal.vaccinated && "Not Vaccinated"}
              </div>
              <Button size="sm" onClick={() => onAdoptToggle(animal)}>
                {animal.adopted && "Make Available"}
                {!animal.adopted && "Adopt"}
              </Button>
              <Button
                onClick={() => onDelete(animal.id)}
                variant="danger"
                size="sm"
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
