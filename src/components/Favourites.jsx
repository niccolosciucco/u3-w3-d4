import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromFavouriteAction } from "../redux/actions";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem key={i} className="d-flex align-items-center">
                <StarFill
                  className="mr-2 text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(removeFromFavouriteAction(fav))}
                />
                <Link to={"/" + fav}>{fav}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
          {favourites.length === 0 && (
            <p className="mt-3">Your list is empty!</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
