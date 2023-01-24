import "./App.css";
import { Route, Routes } from "react-router-dom";
import Html from "./components/Html";
import Home from "./components/Home";
import Header from "./components/Header";
import Javascript from "./components/Javascript";
import Loop from "./components/topics/Loop";
import Condition from "./components/topics/Condition";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/js/*" element={<Javascript />}>
          <Route path="loop" element={<Loop />} />
          <Route path="condition" element={<Condition />} />
        </Route>
        <Route path="/html" element={<Html />} />
      </Routes>
    </div>
  );
}

export default App;
