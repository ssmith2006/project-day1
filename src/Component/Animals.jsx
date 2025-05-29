import React from "react";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

export default function Animals({ animals, title }) {
  if (animals.length === 0) return <h2>All Pets have found a home!</h2>;

  return (
    <div>
      <h2>{title}</h2>

      <ListGroup>
        {animals.map((animal) => (
          <ListGroup.Item key={animal.id}>
            <Image
              src={animal.imageUrl}
              alt={animal.name}
              rounded
              fluid
              width={100}
            />
            <div>
              <strong>{animal.name}</strong>-{animal.species}, age{animal.age}
            </div>
            <div>
              {animal.kidFriendly && "Kid-Friendly"}
              {!animal.kidFriendly && "Not Kid-Friendly"}
            </div>
            <div>
              {animal.vaccinated && "Vaccinated"}
              {!animal.vaccinated && "Not Vaccinated"}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
