import { useNavigate } from "react-router-dom";

export default function SignOut({ setMe }) {
  const navigate = useNavigate();
  localStorage.removeItem("token");
  localStorage.removeItem("me");
  setMe(undefined);
  navigate("/signin");
}
