import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import Error404 from "./pages/Error404";
import { NavBar } from "./components/NavBar"

export const App: React.FC = (props) => {
  return (
    <>
      <Router basename="/my-blog">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/article/:name" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
};
