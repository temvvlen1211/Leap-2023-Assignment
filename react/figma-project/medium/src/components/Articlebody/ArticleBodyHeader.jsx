import { SiTwitter, SiFacebook, SiLinkedin, SiInstagram } from "react-icons/si";

export default function ArticleBodyHeader() {
  return (
    <section>
      <div className="d-flex justify-content-between my-3">
        <div className="d-flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY_BBq9EJopJ7s6xGctOMFLvDhY7LPCIesM18ezaj&s"
            alt="nuur zurag"
            width="50"
            height="50"
            className="my-1 rounded-circle object-fit-cover"
          />
          <div className="famale-about mx-3 my-1">
            <h5 className="famale-about-text ">Cassie Kozyrkov</h5>
            <span className="slim-nav-link">Dec 27,2022 · 9 min read</span>
          </div>
        </div>
        <div className="d-flex  ">
          <a className="slim-nav-link mx-3  " href="">
            <SiTwitter />
          </a>
          <a className="slim-nav-link mx-3" href="">
            <SiFacebook />
          </a>
          <a className="slim-nav-link mx-3" href="">
            <SiLinkedin />
          </a>
          <a className="slim-nav-link mx-3" href="">
            <SiInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
