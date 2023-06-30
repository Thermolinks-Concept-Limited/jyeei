import textLogo from "../assets/Img/logo.png";
// import element from "../images/element.png";
const Footer = function () {
  return (
    <div className="footer">
      {/* <img src={element} alt="" className="element-footer-left" />
      <img src={element} alt="" className="element-footer-right" /> */}
      <div className="col-footer log">
        <p className="description">
         
          <img src={textLogo} alt="" className="imgLogo" />
           <span className="textLogo">Jigawa State Government</span>
        </p>
        <p className="description">
       (JYEES), a transformative initiative designed to revolutionize the employment landscape in the state of Jigawa.
        </p>
          <p>JigawaInitiative@info.ng</p>
          <p>08078000000</p>
          <p>Dutse, Jigawa State</p>
      </div>
      <div className="col-footer company">
             <h2>About</h2>
        <p>
          <a href="#">Initiative</a>
        </p>
        <p>
          <a href="#">How it works</a>
        </p>
        <p>
          <a href="#">Testimonials</a>
        </p>
        <p>
          <a href="#">Benefactors</a>
        </p>
      </div>
      <div className="col-footer region">
       <h2>Informations</h2>
        <p>
          <a href="#">Faqs</a>
        </p>
        <p>
          <a href="#">Help & Support</a>
        </p>
        <p>
          <a href="#">Programs</a>
        </p>
       
      </div>

      <div className="col-footer help">
          <h2>Get Updates</h2>
        <p>
          <a href="#">Email Address</a>
        </p>
     <form action="">
          <input type="text" />
          <button className="btn btn-primary">Submit</button>
     </form>
      </div>
      <p className="trademark">© Copyrights 2023   |   All right reserved</p>
    </div>
  );
};

export default Footer;
