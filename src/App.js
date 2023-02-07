import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CoJam from "./pages/co-jam";
import CoJam1 from "./pages/co-jam1";
import CoJam2 from "./pages/co-jam2";
import CoJam3 from "./pages/co-jam3";
import CoJam4 from "./pages/co-jam4";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/cojam":
        title = "";
        metaDescription = "";
        break;
      case "/cojam1":
        title = "";
        metaDescription = "";
        break;
      case "/cojam2":
        title = "";
        metaDescription = "";
        break;
      case "/cojam3":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CoJam />} />

      <Route path="/cojam" element={<CoJam1 />} />

      <Route path="/cojam1" element={<CoJam2 />} />

      <Route path="/cojam2" element={<CoJam3 />} />

      <Route path="/cojam3" element={<CoJam4 />} />
    </Routes>
  );
}
export default App;
