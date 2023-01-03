import { Route, Routes } from 'react-router-dom';
import HomePage from './pages';
import NotFoundPage from './pages/404';
import GalleryPage from './pages/gallery';

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
};

export default App;
