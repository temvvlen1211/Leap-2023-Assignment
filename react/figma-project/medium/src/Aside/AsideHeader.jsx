import { SiGooglemessages } from "react-icons/si";
import asideImg from "../images/asideImg.svg";
export default function AsideHeader() {
  return (
    <div>
      <div>
        <img src={asideImg} className="border my-4  rounded-circle" alt="" />
        <h4 className="female-about-text">Cassie Kozyrkov</h4>
        <p className="slim-nav-link">115K Followers</p>
        <p className="slim-nav-link">
          Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art,
          theatre, decision science. All views are my own. twitter.com/quaesita
        </p>
        <div className="d-flex">
          <button className="btn main-btn mx-1  ">Follow</button>
          <button className="btn main-btn">
            <SiGooglemessages />
          </button>
        </div>
      </div>
    </div>
  );
}
