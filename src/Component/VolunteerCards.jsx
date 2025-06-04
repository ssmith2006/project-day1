import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function VolunteerOppsCards({
  title,
  opportunities,
  noOppsText,
  onOppsToggle,
  onDelete,
}) {
  if (opportunities.length === 0) return <h2>{noOppsText}</h2>;

  return (
    <div className="container text-center my-5">
      <h2 className="fs-1 mySubheading">{title}</h2>
      <div>
        {opportunities.map((opportunity) => (
          <Card
            className="shadow-lg"
            style={{ width: "15rem" }}
            key={opportunity.id}
          >
            <Card.Body className="d-flex flex-column align-items-center text-center">
              <div>
                <strong>{opportunity.title}</strong>, {opportunity.description},
                date: {""} {opportunity.date}, {opportunity.location},
              </div>
              <div>
                <Button size="sm" onClick={() => onOppsToggle(opportunity)}>
                  {opportunity.isFilled && "Filled"}
                  {!opportunity.isFilled && "Open"}
                </Button>
              </div>

              <Button
                onClick={() => onDelete(opportunity.id)}
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
