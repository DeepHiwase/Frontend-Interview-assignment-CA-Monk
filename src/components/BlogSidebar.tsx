// Node Modules
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
// Components
import { Badge } from "@/components/ui/badge";
// API
import { fetchAllBlogs } from "@/api";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const BlogSidebar = () => {
  const { data: blogs, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchAllBlogs,
  });

  // Get top 5 blogs (sorted by date, most recent first)
  const topBlogs = blogs
    ? [...blogs]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5)
    : [];

  if (isLoading) {
    return (
      <aside className="flex flex-col space-y-4 pr-6">
        <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="animate-pulse space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="flex gap-2">
                <div className="h-5 bg-gray-200 rounded w-16"></div>
                <div className="h-5 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  if (isError) {
    return (
      <aside className="flex flex-col space-y-4 pr-6">
        <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
        <p className="text-sm text-muted-foreground">Failed to load blogs</p>
      </aside>
    );
  }

  if (topBlogs.length === 0) {
    return (
      <aside className="flex flex-col space-y-4 pr-6">
        <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
        <p className="text-sm text-muted-foreground">No blogs available</p>
      </aside>
    );
  }

  return (
    <aside className="flex flex-col space-y-4 pr-6">
      <h2 className="text-xl font-semibold mb-4 text-foreground">Latest Posts</h2>
      <div className="space-y-6">
        {topBlogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.id}`}
            className="block group"
          >
            <article className="space-y-3 p-3 rounded-lg transition-all duration-200 hover:bg-accent/50 hover:shadow-sm border border-transparent hover:border-border">
              {/* Date */}
              <p className="text-xs text-muted-foreground font-medium">
                {formatDate(blog.date)}
              </p>

              {/* Title */}
              <h3 className="text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                {blog.title}
              </h3>

              {/* Categories */}
              <div className="flex flex-wrap gap-1.5">
                {blog.category.slice(0, 2).map((cat) => (
                  <Badge
                    key={cat}
                    variant="outline"
                    className="text-xs py-0 px-2 border-muted-foreground/30 text-muted-foreground"
                  >
                    {cat}
                  </Badge>
                ))}
                {blog.category.length > 2 && (
                  <Badge
                    variant="outline"
                    className="text-xs py-0 px-2 border-muted-foreground/30 text-muted-foreground"
                  >
                    +{blog.category.length - 2}
                  </Badge>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default BlogSidebar;
