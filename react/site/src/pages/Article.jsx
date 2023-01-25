import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/article/${id}`)
      .then((res) => setArticle(res.data));
  }, []);
  if (article === null) return <></>;
  return (
    <div className="container">
      <h1>{article.name}</h1>
      <img style={{ maxWidth: "100%" }} src={article.imageUrl} alt="" />
      <div>{article.text}</div>
    </div>
  );
}
