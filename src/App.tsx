import { HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReviewsList from "./pages/ReviewsList";
import ReviewPage from "./pages/ReviewPage";
import AboutPage from "./pages/AboutPage";
import Error404 from "./pages/Error404";
import { NavBar } from "./components/NavBar";
import { ReviewService } from "./domain/ReviewService";
import { ReviewServiceJson } from "./infrastructure/ReviewServiceJson";

const service: ReviewService = ReviewServiceJson;

export const App = () => {

  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/review"
            element={<ReviewsList reviewService={service} />}
          />
          <Route
            path="/review/:name"
            element={<ReviewPage reviewService={service} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </>
  );
};
