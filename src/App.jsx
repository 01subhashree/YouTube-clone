import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import ChannelDetail from "./pages/channelPage/ChannelDetail";
import SearchFeed from "./components/searchBar/searchFeed/SearchFeed";
import VideoDetail from "./pages/videoPage/VideoDetail";
import Shorts from "./pages/shorts/Shorts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/shorts" element={<Shorts />} />
      </Routes>
    </div>
  );
}

export default App;
