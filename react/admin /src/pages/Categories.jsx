import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CategoriesList from "../components/Categories/CategoriesList";
import Heading from "../components/Heading";
import DynamicModal from "../components/utils/DynamicModal";
import CategoriesCreate from "../components/Categories/CategoriesCreate";
import CategoriesEdit from "../components/Categories/CategoriesEdit";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error(`aldaa garlaa`);
      });
  }, []);

  const afterSubmit = (category) => {
    modalClose();
    setCategories([...categories, category]);
  };
  const modalClose = () => {
    setModalShow(false);
    setModalContent(<></>);
  };
  const showCreateModal = () => {
    setModalContent(<CategoriesCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };

  const afterEdit = (category) => {
    modalClose();
    let newCategories = categories.map((cat) => {
      if (cat.id === category.id) {
        return category;
      }
      return cat;
    });
    setCategories(newCategories);
  };

  const showEditModal = (category) => {
    setModalContent(
      <CategoriesEdit category={category} afterEdit={afterEdit} />
    );
    setModalShow(true);
  };
  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Categories" handleShow={showCreateModal} />
        <CategoriesList items={categories} onEdit={showEditModal} />
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