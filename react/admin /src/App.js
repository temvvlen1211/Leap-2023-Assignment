import "./styles/bootstrap.min.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Signin from "./pages/Signin";
import SignInError from "./pages/SignInError";
import Singup from "./pages/Singup";
import SigninSuccess from "./pages/SinginSuccess";
import SignOut from "./pages/Signout";
import Categories from "./pages/Categories";
import Article from "./pages/Article";
export default function App() {
  // const [me, setMe] = useState(undefined);

  const [menuShow, setMenuShow] = useState(false);

  // useEffect(() => {
  //   const myData = localStorage.getItem("me");
  //   if (myData !== "undefined") {
  //     setMe(JSON.parse(myData));
  //   }
  // }, []);

  // if (!me) {
  //   return (
  //     <Routes>
  //       <Route path="/signin" element={<Signin />} />
  //       <Route
  //         path="/signin/success"
  //         element={<SigninSuccess setMe={setMe} />}
  //       />
  //       <Route path="/signup" element={<Singup />} />
  //       <Route path="*" element={<SignInError />} />
  //     </Routes>
  //   );
  // }

  return (
    <>
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && "show"}`}>Test</div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/signout" element={<SignOut setMe={setMe} />} /> */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article" element={<Article />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
