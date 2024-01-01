import "./App.css";
import { Routes, Route} from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Albums from "./Pages/Albums";
import AlbumDetail from "./Pages/AlbumDetail";
import Posts from "./Pages/Posts";
import PostDetail from "./Pages/PostDetail";
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/albumDetails/:id" element={<AlbumDetail />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/postDetails/:id" element={<PostDetail />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
