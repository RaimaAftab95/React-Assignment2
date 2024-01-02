import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Spinner,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  Row,
} from "reactstrap";

export default function PostDetail() {
  // use hook useParams to get url id as param it may have more than one param

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [commentsList, setCommentsList] = useState([]);
  const [open, setOpen] = useState("1");

  const handleClick = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + id)
      .then((data) => data.json())
      .then((data) => {
        console.log("data=>", data);

        setLoading(false);
        setCommentsList(data);
        console.log("data", data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [id]);

  return (
    <Container>
      <Row>
        <h3>Comments on PostID: {`${id}`}</h3>
        <Accordion open={open} toggle={handleClick}>
          {commentsList.map((item, index) => (
            <AccordionItem key={`${index}`}>
              <AccordionHeader targetId={`${item.id}`}>
                {
                  <div>
                    <b>Name:</b> {item.name} , <b>Email: </b>
                    {item.email}
                  </div>
                }
              </AccordionHeader>
              <AccordionBody accordionId={`${item.id}`}>
                Comment: {item.body}
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </Row>
      {loading ? <Spinner color="primary">Loading...</Spinner> : null}
    </Container>
  );
}
