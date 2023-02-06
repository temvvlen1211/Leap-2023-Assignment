import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CategoriesList from "../components/Categories/CategoriesList";
import Heading from "../components/Heading";
import DynamicModal from "../components/utils/DynamicModal";
import CategoriesCreate from "../components/Categories/CategoriesCreate";
import CategoriesEdit from "../components/Categories/CategoriesEdit";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Menus() {
  const [position, setPosition] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [menus, setMenus] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);
  const { id } = useParams;

  useEffect(() => {
    axios.get(" http://localhost:8000/menu-positions/ " + id).then((res) => {
      setPosition(res.data);
    });

    axios
      .get("http://localhost:8000/menus?positionId= " + id)
      .then((res) => {
        setMenus(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("aldaa garlaa");
      });
  }, [id]);

  const modalClose = () => {
    setModalShow(false);
    setModalContent(<></>);
  };

  const afterSubmit = (category) => {
    modalClose();
    // setCategories([...categories, category]);
  };

  const showCreateModal = () => {
    setModalContent(<CategoriesCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };

  const afterEdit = (category) => {
    modalClose();
    //     let newCategories = categories.map((cat) => {
    //       if (cat.id === category.id) {
    //         return category;
    //       }
    //       return cat;
    //     });
    //     setCategories(newCategories);
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
        <Heading
          title={`'${position?.name}'-Menus`}
          handleShow={showCreateModal}
        />
        <CategoriesList items={menus} onEdit={showEditModal} />
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
