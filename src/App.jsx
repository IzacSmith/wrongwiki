import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Article from "./pages/Article";
import SearchResults from "./components/SearchResults";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Settings from "./pages/Settings";

const PROFILE_NAME_KEY = "wronghow-fake-profile";
const PROFILE_AVATAR_KEY = "wronghow-fake-profile-avatar";
const DEFAULT_PROFILE_AVATAR = "👤";

export default function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("wronghow-dark-mode") === "true"
  );
  const [reducedMotion, setReducedMotion] = useState(
    () => localStorage.getItem("wronghow-reduced-motion") === "true"
  );
  const [showRelatedArticles, setShowRelatedArticles] = useState(
    () => localStorage.getItem("wronghow-show-related-articles") !== "false"
  );
  const [profile, setProfile] = useState(() => {
    const displayName = localStorage.getItem(PROFILE_NAME_KEY);

    return displayName
      ? {
          displayName,
          avatar: localStorage.getItem(PROFILE_AVATAR_KEY) || DEFAULT_PROFILE_AVATAR,
        }
      : null;
  });

  function updateProfile(nextProfile) {
    if (nextProfile) {
      localStorage.setItem(PROFILE_NAME_KEY, nextProfile.displayName);
      localStorage.setItem(PROFILE_AVATAR_KEY, nextProfile.avatar);
    } else {
      localStorage.removeItem(PROFILE_NAME_KEY);
      localStorage.removeItem(PROFILE_AVATAR_KEY);
    }

    setProfile(nextProfile);
  }

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    document.documentElement.dataset.motion = reducedMotion ? "reduced" : "full";
    localStorage.setItem("wronghow-dark-mode", String(darkMode));
    localStorage.setItem("wronghow-reduced-motion", String(reducedMotion));
    localStorage.setItem(
      "wronghow-show-related-articles",
      String(showRelatedArticles)
    );
  }, [darkMode, reducedMotion, showRelatedArticles]);

  return (
    <>
      <ScrollToTop />
      <Header profile={profile} />

      <div className="page-transition" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home profile={profile} />} />
          <Route
            path="/article/:id"
            element={<Article showRelatedArticles={showRelatedArticles} />}
          />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route
            path="/settings"
            element={
              <Settings
                darkMode={darkMode}
                onDarkModeChange={setDarkMode}
                reducedMotion={reducedMotion}
                onReducedMotionChange={setReducedMotion}
                showRelatedArticles={showRelatedArticles}
                onShowRelatedArticlesChange={setShowRelatedArticles}
                profile={profile}
                onProfileChange={updateProfile}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}
