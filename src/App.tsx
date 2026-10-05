import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header, Footer } from './components/Layout';
import Home from './pages/Home';
import Tools from './pages/Tools';
import WhatShouldIEat from './pages/WhatShouldIEat';
import ProteinGuide from './pages/ProteinGuide';
import BuildMyPlate from './pages/BuildMyPlate';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import MealPlan from './pages/MealPlan';
import About from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-warm-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/what-should-i-eat" element={<WhatShouldIEat />} />
            <Route path="/tools/protein-guide" element={<ProteinGuide />} />
            <Route path="/tools/build-my-plate" element={<BuildMyPlate />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:slug" element={<RecipeDetail />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/:slug" element={<GuideDetail />} />
            <Route path="/21-day-plan" element={<MealPlan />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
