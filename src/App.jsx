
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import PostGrid from "./PostGrid";
import StatusMessage from "./StatusMessage";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch = post.title.toLowerCase().includes(search) || post.body.toLowerCase().includes(search);

    const matchesUser =
    selectedUserId === "" || post.userId === Number(selectedUserId);
    return matchesSearch && matchesUser;
  });
  

  return (
    
    
    <div className="app">
      <Header className="Header"
        title="MINI BLOG EXPLORER"
        subtitle="React Blog API"
        totalPosts={posts.length}
      />

      <div className="filter-container">
      <FilterBar
        users={posts}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <button onClick={fetchPosts}>
        Refresh Posts
      </button>
      </div>

     <StatusMessage
      loading={loading}
      error={error}
      posts={filteredPosts.length}
    />


    <PostGrid className = "cards" posts={filteredPosts}/>


    </div>
  );
}

export default App;
