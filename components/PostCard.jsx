export default function PostCard({ post }) {
  return (
    <article className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      
      {/* Image wrapper with fixed ratio */}
      <div className="aspect-[16/9] w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 capitalize">
          {post.title}
        </h3>

        <p className="text-sm text-gray-500">
          {post.body.slice(0, 120)}...
        </p>
      </div>
    </article>
  );
}
