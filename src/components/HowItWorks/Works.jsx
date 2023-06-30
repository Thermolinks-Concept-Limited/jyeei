import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import vector from "../images/Vector.png";
// import element from "../images/element.png";
// import search from "../images/Search.png";
// import pharmacy from "../images/pharmacy.png";
// import consult from "../images/consult.png";
// import info from "../images/info.png";
// import emergency from "../images/emergency.png";
// import tracking from "../images/tracking.png";
class Works extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="works">
        {/* <img
          className="vector-services"
          src={vector}
          alt="this is vector img"
        /> */}
        {/* <img
          className="element-services"
          src={element}
          alt="this is vector img"
        /> */}
        <h3 className="works-header header">How it will work</h3>
        <div className="line"></div>
        <p className="works-text">
      With its holistic approach and unwavering commitment to youth development, the Jigawa Youth Employability Empowerment Scheme (JYEES) holds the promise of transforming lives, uplifting communities, and positioning Jigawa as a beacon of youth empowerment in Nigeria. By investing in the potential of the youth.
        </p>
        
       
      </div>
    );
  }
}

export default Works;
