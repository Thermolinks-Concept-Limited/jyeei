import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// import vector from "../images/Vector.png";
// import element from "../images/element.png";
import Img1 from "../assets/Img/item1.png";
import Img2 from "../assets/Img/item2.png";
import Info from "../assets/Img/item3.png";
// import info from "../images/info.png";
// import emergency from "../images/emergency.png";
// import tracking from "../images/tracking.png";

import "../Styles/generalStyle.css";
class Description extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="services">
        <div className="services-item">
     
        <h3 className="service-header">What the initiative for the <br /> jigawa people focuses</h3>
       
        <Row className="g-4">
          <Col>
            <Card className="card">
              <img
                className="service-frame"
                src={Img1}
                alt="Search for a doctor"
              />
              <Card.Body>
                <h5 className="card-title"><span className="span-green">Youth Target</span></h5>
                <p className="card-text">
               Under JYEES, young people in Jigawa will have access to state-of-the-art training facilities equipped with modern technology and learning resources.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <img
                className="service-frame"
                src={Img2}
                alt="online phamarcy"
              />
              <Card.Body>
                <h5 className="card-title"> <span className="span-yelow">Job Placement</span></h5>
                <p className="card-text">
                 Under JYEES, young people in Jigawa will have access to state-of-the-art training facilities equipped with modern technology and learning resources.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <img
                className="service-frame"
                src={Info}
                alt="consult a doctor"
              />
              <Card.Body>
                <h5 className="card-title"> <span className="span-blue">Empowerment</span></h5>
                <p className="card-text">
               Under JYEES, young people in Jigawa will have access to state-of-the-art training facilities equipped with modern technology and learning resources.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <img
                className="service-frame"
                src={Img1}
                alt="get detailed information"
              />
              <Card.Body>
                <h5 className="card-title"> <span className="span-green">Youth Target</span></h5>
                <p className="card-text">
               Under JYEES, young people in Jigawa will have access to state-of-the-art training facilities equipped with modern technology and learning resources.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <img
                className="service-frame"
                src={Img2}
                alt="Let's take care of your emergencies"
              />
              <Card.Body>
                <h5 className="card-title"><span className="span-yelow"> Empowerment</span></h5>
                <p className="card-text">
               Under JYEES, young people in Jigawa will have access to state-of-the-art training facilities equipped with modern technology and learning resources.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <img
                className="service-frame"
                src={Info}
                alt="We keep track of your medical history"
              />
              <Card.Body>
                <h5 className="card-title"><span className="span-blue">Job Placement</span></h5>
                <p className="card-text">
               Under JYEES, young people in Jigawa will have access to state-of-the-art training facilities equipped with modern technology and learning resources.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
       </div>
      </div>
    );
  }
}

export default Description;
