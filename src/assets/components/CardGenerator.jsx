import FantasyBooks from "../json/fantasy.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardGenerator = () => {
    return FantasyBooks.map((book) => {
        return (
            <Card style={{}}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="primary">Buy</Button>
                </Card.Body>
            </Card>
        );
    });
};
export default CardGenerator;
