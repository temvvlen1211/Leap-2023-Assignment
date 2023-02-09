import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignOut({ setMe }) {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("me");
    setMe(undefined);
    navigate("/signin");
  }, []);

  return (
    <div className="w-100 m-vh-100 d-flex align-items-center justify-content-center"></div>
  );
}
