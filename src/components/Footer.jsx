import "./Footer.css";
import linkedin from "../assets/linked-in.png";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import tiktok from "../assets/tiktok.png";
import watsapp from "../assets/watsapp.png";
import youtube from "../assets/youtube.png";

function Footer() {
  return (
    <footer class="footer">
      <div class="follow-us">
        <div class="follow-header">FOLLOW US</div>
        <div class="social-media">
          <a
            href="https://www.linkedin.com/company/refocusme/"
            target="_blank"
            title="LinkedIn"
          >
            <img src={linkedin} alt="linked-in" className="follow-img" />
          </a>
          <a
            href="https://instagram.com/refocus.education.id?igshid=YmMyMTA2M2Y="
            target="_blank"
            title="Instagram"
          >
            <img src={instagram} alt="instagram" className="follow-img" />
          </a>
          <a
            href="https://www.facebook.com/refocus.web.developer"
            target="_blank"
            title="Facebook"
            className="follow-img"
          >
            <img src={facebook} alt="facebook" className="follow-img" />
          </a>
          <a href="" target="_blank" title="Twitter">
            <img src={twitter} alt="twitter" className="follow-img" />
          </a>
          <a href="" target="_blank" title="WatsApp">
            <img src={watsapp} alt="watsapp" className="follow-img" />
          </a>
          <a
            href="https://www.tiktok.com/@refocus.education"
            target="_blank"
            title="Tiktok"
          >
            <img src={tiktok} alt="tiktok" className="follow-img" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC8dDKIblZi2zmazH0nRZY0A"
            target="_blank"
            title="Youtube"
          >
            <img src={youtube} alt="youtube" className="follow-img" />
          </a>
        </div>
      </div>
      <div class="trademark">
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
      </div>
    </footer>
  );
}

export default Footer;
