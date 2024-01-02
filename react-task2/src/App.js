import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Albums from "./Pages/Albums";
import AlbumDetail from "./Pages/AlbumDetail";
import Posts from "./Pages/Posts";
import PostDetail from "./Pages/PostDetail";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Albums />} />
        <Route exact path="/albumDetails/:id" element={<AlbumDetail />} />
        <Route exact path="/Posts" element={<Posts />} />
        <Route exact path="/postDetails/:id" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
