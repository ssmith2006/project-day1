import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


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
      <h2 className="fs-1 mySubheading">{title}</h2>

      <div className="d-flex flex-row gap-5 p-5">
        {animals.map((animal) => (
          <Card className="shadow-lg" style={{ width: "15rem" }} key={animal.id}>
            <Card.Body className="d-flex flex-column align-items-center text-center">
              <Card.Img
                src={animal.imageUrl}
                alt={animal.name}
                rounded="true"
                fluid="true"
                width={100}
              />

              <Button className="m-2"
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
              <Button className="m-2" size="sm" onClick={() => onAdoptToggle(animal)}>
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
