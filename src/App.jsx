import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { SearchBar, Gallery, Header } from "./components";
const API_KEY = "INSERT_API_KEY_HERE";

function App() {
  const [searchTerm, setSearchTerm] = useState("space");
  const [photos, setPhotos] = useState([]);
  const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${searchTerm}`;

  const fetchPhotos = async () => {
    try {
      const { data } = await axios.get(url);
      setPhotos(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [searchTerm]);

  return (
    <main className="main-page">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Gallery photos={photos} />
    </main>
  );
}

export default App;
