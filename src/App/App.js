import Home from "pages/Home/Home";
import { Route, Routes } from "react-router";
import "react-slideshow-image/dist/styles.css";
import "styles/global.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
