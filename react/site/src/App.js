import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Article from "./pages/Article";
import ChatScreen from "./pages/ChatScreen";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </>
  );
}

export default App;
