import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-slideshow-image";
import Button from "components/Button/Button";
import quotes from "assets/images/quotes.png";
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
  let sliderContent = [
    {
      id: 1,
      subtitle: "Kevin Sundström",
      title:
        "Scelerisque viverra mauris in aliquam sem. Ornareusisa suspendisse sed nis."
    },
    {
      id: 2,
      subtitle: "Otto Pettersson",
      title:
        "Urnanuque cursrra meturis in aliquam sem. Ornareusisa suspendisse eleifend."
    },
    {
      id: 3,
      subtitle: "Georgia Longdenberg",
      title:
        "Ornareusisa maece mauris in blandit sem. Oramesacisa turpisedisse ege sed."
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
      <Container>
        {content.map((item) => (
          <Row id="aboutUs_first_section" key={item.id}>
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
        ))}
      </Container>
      <div className={styles.video}></div>
      <div className={styles.comments}>
        <Fade autoplay arrows={false} duration={2000} className={styles.slider}>
          {sliderContent.map((slide) => (
            <div key={slide.id}>
              <p>{slide.subtitle}</p>
              <h3>{slide.title}</h3>
            </div>
          ))}
        </Fade>
        <img src={quotes} alt="Best comments" />
      </div>
    </div>
  );
}

export default AboutUs;
