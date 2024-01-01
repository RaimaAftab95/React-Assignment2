import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Albums() {
  // hook to nevigate dont need to destructure we can call it directly
  const navigate = useNavigate();
  const [albumsList, setAlbumsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("  https://jsonplaceholder.typicode.com/albums")
      .then((data) => data.json())
      .then((data) => {
        console.log("data", data);
        setLoading(false);
        setAlbumsList(data);
        console.log("data", data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handleClick = (id) => {
    //alert(id);
    navigate("/albumDetails/" + id);
  };

  return (
    // instead of div we wrap in container
    <Container>
      <h3 className='mt-5'>Albums List</h3>
      <Row>
        {albumsList.map((item, index) => (
          <Col key={`${index}`} className="bg-light border" xs="12" sm="4">
            {/* <Link to={`/albumDetails/${item.id}`}> */}
            <Card onClick={() => handleClick(item.id)}>
              <img alt="Sample" src={`https://picsum.photos/300/20${index}`}   className="img-fluid"
              style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }} />
              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            {/* </Link> */}
          </Col>
        ))}
      </Row>
      {loading ? <Spinner color="primary">Loading...</Spinner> : null}
    </Container>
  );
}
