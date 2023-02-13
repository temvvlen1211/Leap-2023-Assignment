import CategoryList from "../components/Categories/CategoriesList";
import Heading from "../components/Heading";
import CategoryCreate from "../components/Categories/CategoriesCreate";
import CategoryEdit from "../components/Categories/CategoriesEdit";
import { useModal } from "../contexts/ModalContext";
import { useCategories } from "../hooks/categories/";

export default function Categories() {
  const [categories, setCategories] = useCategories();
  const { setModalContent, setModalShow, setModalTitle } = useModal();
}
