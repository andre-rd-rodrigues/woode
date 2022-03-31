import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "components/Button/Button";
import styles from "./aboutus.module.scss";

function AboutUs() {
  let content = [
    {
      id: 1,
      subtitle: "ABOUT OUR COLLECTIONS",
      title: "Experience new way of designing",
      body: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet.",
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-1.jpg"
    },
    {
      id: 2,
      subtitle: "ABOUT OUR SHOP",
      title: "Experience the shop",
      body: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet.",
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-2.jpg"
    },
    {
      id: 3,
      subtitle: "ABOUT USED MATERIALS",
      title: "Experience wood-work items",
      body: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet.",
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-3.jpg"
    }
  ];
  let orderSection = (item) => {
    return {
      image: {
        order: item.id === 2 ? 2 : 1
      },
      text: {
        order: item.id === 2 ? 1 : 2
      }
    };
  };
  return (
    <div className={styles.aboutUs}>
      <div className={styles.jumbotron}></div>
      {content.map((item) => (
        <Container>
          <Row id="aboutUs_first_section">
            <Col
              className="text-center"
              sm={orderSection(item).image}
              md={orderSection(item).image}
              lg={orderSection(item).image}
            >
              <img src={item.src} alt="Experience Woode" />
            </Col>
            <Col
              className="d-flex justify-content-center flex-column align-items-center"
              sm={orderSection(item).text}
              md={orderSection(item).text}
              lg={orderSection(item).text}
            >
              <div id="aboutUs_first_section_text">
                <h6>{item.subtitle}</h6>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                {/* <Button /> */}
              </div>
            </Col>
          </Row>
        </Container>
      ))}
      <div className={styles.video}></div>
    </div>
  );
}

export default AboutUs;
