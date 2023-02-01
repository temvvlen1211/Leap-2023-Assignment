import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

export default function CategoriesEdit({ afterEdit, category }) {
  const [name, setName] = useState(category?.name);
  const [description, setDescription] = useState(category?.description);

  const submit = () => {
    axios
      .put("http://localhost:8000/categories/" + category?.id, {
        name,
        description,
      })
      .then((res) => {
        toast.success("amjilttai zasagdlaa");
        afterEdit(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("aldaa garlaa");
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name of the category..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          as="textarea"
          rows={3}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
