import './assets/css/style.css';
import {Routes, Route, Router} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePages';
import NewsDatailPage from './pages/NewsDatailPage';
import NewsCategoriesPage from './pages/NewsCategoriesPage';
import NewsCategoryPage from './pages/NewsCategoryPage';
function App() {
 return (
 <>
<Header  />
 <main>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/post/:id" element={<NewsDatailPage />} />
<Route path="/categories" element={<NewsCategoriesPage />} />
<Route path="/category/post/:id" element={<NewsCategoryPage />} />
</Routes>
</main>
</>
);
}
export default App;
