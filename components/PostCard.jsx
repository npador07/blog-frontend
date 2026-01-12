export default function PostCard({ post }) {
  return (
    <article className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-2 capitalize">
        {post.title}
      </h3>
      <p className="text-sm text-gray-500">
        {post.body.slice(0, 120)}...
      </p>
    </article>
  );
}
