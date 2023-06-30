import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import lead from "../images/lead.png";
// import download from "../images/chat.png";
// import { BsArrowDown } from "react-icons/bs";
import Img1 from "../assets/Img/1.png";
import Img2 from "../assets/Img/2.png";
import Img3 from "../assets/Img/3.png";
import Img4 from "../assets/Img/4.png";
import "../Styles/generalStyle.css";

const Sponsors = function () {
  return (
    <div className="sponsors">
   
      <h3 className="works-header header"> our <span className="span-greenb">Sponsors</span></h3>
<div>

  <Row>
<Col>
<img src={Img1} alt="" />
</Col>
<Col>
<img src={Img2} alt="" />
</Col>
<Col>
<img src={Img3} alt="" />
</Col>
<Col>
<img src={Img4} alt="" />
</Col>

  </Row>
</div>

    </div>


  );
};

export default Sponsors;
