import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { TOAST_CONFIG } from "../utils/configs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Singup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const navigate = useNavigate();

  const submitSignup = () => {
    // STATUS INFO
    let status = 200;

    axios
      .post("https://demo-api-one.vercel.app/api/signin", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message, TOAST_CONFIG);
        localStorage.setItem("token", res.data.body);
        navigate("/signin/success");
      })
      .catch((e) => {
        const errorMsg = e.response.data.message || "alda garlaa";
        toast.error(errorMsg, TOAST_CONFIG);
      });
  };

  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                submitSignup();
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password repeat</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password repeat"
                  value={repassword}
                  onChange={(e) => setRepassword(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Link to={"/signin"}>
                  <Button
                    variant="outline-success"
                    type="button"
                    className="me-3"
                  >
                    Sign in
                  </Button>
                </Link>
                <Button variant="primary" type="submit">
                  Sign up
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
