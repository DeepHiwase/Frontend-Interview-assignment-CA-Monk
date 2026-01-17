// Node Modules
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
// Lib
import { blogQueryKey } from "@/routes/loaders/blogDetailLoader";
import { fetchBlogById } from "@/api/index";

const BlogDetailPage = () => {
  const { blogId } = useParams<{ blogId: string }>();
  

  const { data: blog, isLoading, isError, error } = useQuery({
    queryKey: blogQueryKey(blogId!),
    queryFn: () => fetchBlogById(blogId!),
    enabled: !!blogId,
  });

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container py-8">
        <p className="text-red-500">Error loading blog: {error?.message}</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container py-8">
        <p>Blog not found</p>
      </div>
    );
  }

  console.log("I am rendered")
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img 
        src={blog.coverImage} 
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-600 mb-4">{blog.content}</p>
    </div>
  );
};

export default BlogDetailPage;