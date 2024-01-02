import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

export default function AlbumDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [photoList, setphotoList] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + id)
      .then((data) => data.json())
      .then((data) => {
        console.log("data=>", data);
        setLoading(false);
        setphotoList(data);
        console.log("data", data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [id]);

  return (
    <Container>
      <h3>Albums Details</h3>
      <Row>
        {photoList.map((item, index) => (
          <Col key={`${index}`} className="bg-light border" xs="12" sm="4">
            <Card>
              <img alt="Sample" src={item.thumbnailUrl} />
              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {item.id}
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
                <Button color="primary">Click me</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {loading ? <Spinner color="primary">Loading...</Spinner> : null}
    </Container>
  );
}
