import './footer.css';

function Footer() {
  return (
    <div>
      <div class="footer">
        <div class="footer-flex">
          <div class="links">
            <div class="link-head">
              <img src={require('./prism.png')}></img>eIndustries
            </div>
            <div class="link-pra">
              Founded in the year 2004, "Prism Calibration center", have earned tremendous fame in offering Calibration, Validation, Environment Audit, Instant Supply and Work Optimization. We have also gained appreciation in trading Measuring Instruments, Work Optimization Tools and Infrared Guns.
            </div>
            <div class="link-img">
              <div class="link-img1"> <img src={require('./eco.png')}></img></div>
              <div class="link-img1"><img src={require('./eco1.png')}></img></div>
              <div class="link-text"><span>NABL & GPCB</span>
                Approved
                Calibration and Environmental
                Testing Lab
              </div>
            </div>
          </div>
          <div class="gallary">
            <div class="gallary-head">Quick Links</div>
            <div class="gallary-flex">
              <div class="gallry-box">
                <div class="gallary">Home</div>
                <div class="gallary">about us</div>
                <div class="gallary">Group of Companies</div>
                <div class="gallary">our businesss</div>
                <div class="gallary">gallery</div>
                <div class="gallary">awards</div>
                <div class="gallary">carrier</div>
                <div class="gallary">blogs </div>
              </div>
              <div class="gallry-box">
                <div class="gallary">Industrial Pathshala</div>
                <div class="gallary">Testimonials</div>
                <div class="gallary">Franchise Partner</div>
                <div class="gallary">Feedback Form</div>
                <div class="gallary">News</div>
                <div class="gallary">download</div>
                <div class="gallary">Franchisee</div>
                <div class="gallary">Contact Us</div>
              </div>
            </div>
          </div>
          <div class="footer-cont">
            <div class="gallary-head">Contact</div>
            <div class="cont">
              <i class="fa-brands fa-telegram"></i><b>Get direction on the maps</b>
            </div>
            <div class="cont">
              F 101 Rudraksh Complex 2, Phase 3, GIDC, Vatva, Nr. Jasoda Nagar Cross Road, Ahmedabad, 382445, Gujarat
            </div>
            <div class="cont">
              <i class="fa-brands fa-telegram"></i>+91-78789 91188
            </div>
            <div class="cont">
              <i class="fa-brands fa-telegram"></i>+91 12345 67890
            </div>
            <div class="cont">
              <i class="fa-brands fa-telegram"></i>info@prismcalibration.com
            </div>
            <div class="cont">
              FOLLOW US: <i class="fa-brands fa-instagram"></i><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-linkedin"></i><i class="fa-brands fa-pinterest"></i><i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="footer-end">
          <div class="policy">
            Copyright 2022 by <span>Prism / eIndustries</span>
          </div>
          <div class="policy">
            <div class="map">Privacy Policy</div>
            <div class="map">Terms of Service</div>
            <div class="map">Purchaser Policy</div>
            <div class="map">Sitemap</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
