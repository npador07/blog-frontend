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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="max-w-screen-xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Latest Posts
          </h1>
          <p className="mt-2 text-gray-500 max-w-xl">
            Discover recent articles, updates, and insights curated just for you.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-screen-xl mx-auto px-6 py-10">
        {/* States */}
        {loading && (
          <p className="text-center text-gray-400 animate-pulse">
            Loading posts…
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 font-medium">
            {error}
          </p>
        )}

        {!loading && !error && posts.length === 0 && (
          <p className="text-center text-gray-500">
            No posts available.
          </p>
        )}

        {/* Posts Grid */}
        {!loading && !error && posts.length > 0 && (
          <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
