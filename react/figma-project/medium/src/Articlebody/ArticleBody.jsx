import Aside from "../Aside/Aside";
import HelpMenu from "../Aside/HelpMenu";
import ArticleBodyHeader from "./ArticleBodyHeader";
import ArticleBodySection from "./ArticleBodySection";

export default function ArticleBody() {
  return (
    <div className="container">
      <div className="row justify-content-evenly">
        <div className="col-sm-8 px-5 ">
          <ArticleBodyHeader />
          <ArticleBodySection />
        </div>
        <div className="col-sm-4 position-relative">
          <Aside />
        </div>
      </div>
    </div>
  );
}
