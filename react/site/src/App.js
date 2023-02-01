import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Article from "./pages/Article";
// import ChatScreen from "./pages/ChatScreen";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/articles/:id" element={<Article />} />
        {/* <Route path="/chat" element={<ChatScreen />} /> */}
      </Routes>
    </>
  );
}

export default App;
