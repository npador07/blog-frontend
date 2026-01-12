import { useEffect, useState } from "react";
import PostCard from "/components/PostCard";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch("/posts.json");

        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError("Unable to load posts.");
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>

        {/* States */}
        {loading && <p className="text-gray-500">Loading posts...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && posts.length === 0 && (
          <p className="text-gray-500">No posts available.</p>
        )}

        {/* Posts Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </div>
    </main>
  );
}
