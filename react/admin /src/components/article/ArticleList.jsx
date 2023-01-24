import { useState } from "react";
import { SlPencil, SlTrash } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListItem = ({ item, index, onEdit }) => {
  const [deleted, setDeleted] = useState(false);

  const navigate = useNavigate();

  const deleteItem = () => {
    let statusCode;
    fetch("https://demo-api-one.vercel.app/api/articles", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ id: item.id }),
    })
      .then((res) => {
        statusCode = res.status;
        return res.json();
      })
      .then((data) => {
        if (statusCode === 200) {
          toast.success("amjilttai ustagalaa");
          setDeleted(true);
        } else {
          if (statusCode === 403 || statusCode === 401) {
            navigate("/signout ");
          }
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("aldaa garlaa");
      });
  };

  if (deleted) return <></>;
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td>
        <img src={item.imageUrl} width={100} height={100} alt="" />
      </td>
      <td>{item.description}</td>
      <td>{item.text}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => {
            onEdit(item);
          }}
        >
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteItem}>
          <SlTrash />
        </button>
      </td>
    </tr>
  );
};

export default function ArticleList({ items, onEdit }) {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Description</th>
          <th>Text</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <ListItem
            item={item}
            index={index + 1}
            key={`list-item-${index}`}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}
