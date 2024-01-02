import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Spinner,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  Row,
  Button,
} from "reactstrap";

export default function Posts() {
  
  const navigate = useNavigate();
  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState("1");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        console.log("data", data);
        setLoading(false);
        setPostsList(data);
        console.log("data", data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handleClick = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const goToCommentsClick = (postID) => {
    navigate("/postDetails/" + postID);
  };

  return (
    
    <Container>
      <h3 className="mt-5">Posts List</h3>
      <Row>
        <Accordion open={open} toggle={handleClick}>
          {postsList.map((item, index) => (
            <AccordionItem key={`${index}`}>
              <AccordionHeader targetId={`${item.id}`}>
                {<b>{item.id + ". " + item.title}</b>}
              </AccordionHeader>
              <AccordionBody accordionId={`${item.id}`}>
                {item.body}
                <br />
                <Button
                  color="primary"
                  onClick={() => goToCommentsClick(item.id)}
                >
                  Comments
                </Button>
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </Row>
      {loading ? <Spinner color="primary">Loading...</Spinner> : null}
    </Container>
  );
}
