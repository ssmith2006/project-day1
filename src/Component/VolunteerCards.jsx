import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";

export default function VolunteerCards({
  title,
  opportunities,
  noOppsText,
  onOppsToggle,
  onDelete,
  onEditOpps,
  onShowModal,
}) {
  if (opportunities.length === 0) return <h2>{noOppsText}</h2>;

  return (
    <div className="container text-center my-5">
      <h2 className="fs-1 mySubheading">{title}</h2>
      <div className="d-flex flex-row gap-5 p-5">
        {opportunities.map((opportunity) => (
          <Card
            className="shadow-lg"
            style={{ width: "15rem" }}
            key={opportunity.id}
          >
            <Button
              className="m-2"
              size="sm"
              variant="dark"
              onClick={() => {
                onEditOpps(opportunity);
                onShowModal();
              }}
            >
              Edit
            </Button>

            <Card.Body className="d-flex flex-column align-items-center text-center">
              <div>
                <strong>{opportunity.title}</strong> <br />
                {opportunity.description}
                <p>Day(s):</p>
                <div className="d-flex align-content-center">
                  {opportunity.day1 && "Monday" }
                  {opportunity.day2 && "Tuesday"}
                  {opportunity.day3 && "Wednesday"}
                  {opportunity.day4 && "Thursday"}
                  {opportunity.day5 && "Friday"}
                  {opportunity.day6 && "Saturday"}
                </div>
                {opportunity.location}
              </div>

              <div>
                <Button className="m-2" size="sm" onClick={() => onOppsToggle(opportunity)}>
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
