import ArticleBodyHeader from "./ArticleBodyHeader";
import ArticleBodySection from "./ArticleBodySection";

export default function ArticleBody() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9  ">
          <ArticleBodyHeader />
          <ArticleBodySection />
        </div>
        <div className="col-sm-9"></div>
      </div>
    </div>
  );
}
