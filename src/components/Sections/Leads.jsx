import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import lead from "../images/lead.png";
import download from "../assets/Img/imglead.png";
// import { BsArrowDown } from "react-icons/bs";
import "../Styles/generalStyle.css";

const Leading = function () {
  return (
    <div className="lead-page">
   
      <Row className="row lead">
        <Col className="lead-container order2" md={6}>
          <h3 className="lead-header header">About Initiative</h3>
          <h1>Revolutionize the Employment Landscape in the State of Jigawa.</h1>
          <div className="line lead-line"></div>
          <p className="lead-text">
           JYEES is a comprehensive scheme that focuses on nurturing the talents and abilities of the youth, ensuring they have the tools required to succeed in the competitive job market. The program offers a diverse range of vocational training programs, entrepreneurship development courses, and mentorship opportunities, catering to the diverse interests and aspirations of the young individuals.
          </p>
          <button id="read-btn" className="btn">
           Read More
          </button>
        </Col>
        <Col className="lead-img order1" md={6}>
          <img src={download} alt="Hero-img" />
        </Col>
      </Row>
    </div>
  );
};

export default Leading;
