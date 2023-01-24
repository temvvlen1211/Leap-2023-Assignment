import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Heading from "../components/Heading";
import DynamicModal from "../components/utils/DynamicModal";
import ArticleCreate from "../components/article/ArticleCreate";
import ArticleEdit from "../components/article/ArticleEdit";
import ArticleList from "../components/article/ArticleList";

export default function Article() {
  const [article, setArticle] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error(`aldaa garlaa`);
      });
  }, []);

  const afterSubmit = (category) => {
    modalClose();
    setArticle([...article, category]);
  };
  const modalClose = () => {
    setModalShow(false);
    setModalContent(<></>);
  };
  const showCreateModal = () => {
    setModalContent(<ArticleCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };

  const afterEdit = (category) => {
    modalClose();
    let newArticle = article.map((cat) => {
      if (cat.id === category.id) {
        return category;
      }
      return cat;
    });
    setArticle(newArticle);
  };

  const showEditModal = (category) => {
    setModalContent(<ArticleEdit category={category} afterEdit={afterEdit} />);
    setModalShow(true);
  };
  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Categories" handleShow={showCreateModal} />
        <ArticleList items={article} onEdit={showEditModal} />
      </div>
      <DynamicModal
        show={modalShow}
        handleClose={modalClose}
        title="Create category"
        content={modalContent}
      />
    </>
  );
}
