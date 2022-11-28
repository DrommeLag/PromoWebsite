import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EventCard({ title, image, date }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <h6 className="mb-5">{date}</h6>
        <Button variant="warning" className="float-end">
          Детальніше
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
