// Node Modules
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
// Components
import { Badge } from "@/components/ui/badge";
// Lib
import { blogQueryKey } from "@/routes/loaders/blogDetailLoader";
import { fetchBlogById } from "@/api/index";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const BlogDetailPage = () => {
  const { blogId } = useParams<{ blogId: string }>();

  const { data: blog, isLoading, isError, error } = useQuery({
    queryKey: blogQueryKey(blogId!),
    queryFn: () => fetchBlogById(blogId!),
    enabled: !!blogId,
  });

  if (isLoading) {
    return (
      <article className="max-w-4xl mx-auto py-8 px-4">
        <div className="animate-pulse space-y-6">
          <div className="h-96 bg-muted rounded-lg"></div>
          <div className="space-y-4">
            <div className="h-10 bg-muted rounded w-3/4"></div>
            <div className="h-6 bg-muted rounded w-full"></div>
            <div className="h-6 bg-muted rounded w-5/6"></div>
            <div className="flex gap-2">
              <div className="h-6 bg-muted rounded w-20"></div>
              <div className="h-6 bg-muted rounded w-20"></div>
            </div>
            <div className="space-y-3 pt-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-4/5"></div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (isError) {
    return (
      <article className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center py-12">
          <p className="text-destructive">Error loading blog: {error?.message}</p>
        </div>
      </article>
    );
  }

  if (!blog) {
    return (
      <article className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Blog not found</p>
        </div>
      </article>
    );
  }

  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      {/* Cover Image */}
      <div className="mb-8">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-100 object-cover rounded-lg"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-foreground leading-tight">
        {blog.title}
      </h1>

      {/* Description */}
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        {blog.description}
      </p>

      {/* Date and Categories */}
      <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b">
        <time className="text-sm text-muted-foreground font-medium">
          {formatDate(blog.date)}
        </time>
        <div className="flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <Badge
              key={cat}
              variant="outline"
              className="text-xs py-1 px-3 border-muted-foreground/30 text-muted-foreground"
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-none">
        <div className="text-foreground leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>
      </div>
    </article>
  );
};

export default BlogDetailPage;