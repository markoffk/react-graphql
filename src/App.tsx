import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { NewsView } from "./views/news/NewsView";
import { MainPageTemplate } from "./atomic-components/templates/MainPageTemplate";
import { NewsListView } from "./views/news/list/NewsListView";
import { NewsDetailView } from "./views/news/[uuid]/NewsDetailView";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPageTemplate />}>
          <Route index element={<HomeView />} />
          <Route path="news" element={<NewsView />}>
            <Route index element={<NewsListView />} />
            <Route path=":uuid" element={<NewsDetailView />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
