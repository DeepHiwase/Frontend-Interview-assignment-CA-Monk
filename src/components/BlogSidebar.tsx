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

  // Get all blogs sorted by date (most recent first)
  const sortedBlogs = blogs
    ? [...blogs].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    : [];

  if (isLoading) {
    return (
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
        {/* Mobile: horizontal scroll, Desktop: vertical */}
        <div className="flex md:flex-col gap-2 md:gap-6 overflow-x-auto md:overflow-x-visible md:overflow-y-auto md:max-h-[calc(100vh-250px)] md:pr-2 pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 custom-scrollbar mask-fade-horizontal">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse shrink-0 w-[280px] md:w-auto space-y-2"
            >
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
              <div className="flex gap-2">
                <div className="h-5 bg-muted rounded w-16"></div>
                <div className="h-5 bg-muted rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
        <p className="text-sm text-muted-foreground">Failed to load blogs</p>
      </div>
    );
  }

  if (sortedBlogs.length === 0) {
    return (
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
        <p className="text-sm text-muted-foreground">No blogs available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        Latest Posts
      </h2>
      {/* Scrollable container - horizontal on mobile, vertical on desktop */}
      <div className="relative">
        {/* Mobile: horizontal scroll with right fade, Desktop: vertical scroll with bottom fade */}
        <div className="flex md:flex-col gap-2 md:gap-6 overflow-x-auto md:overflow-x-visible md:overflow-y-auto md:max-h-[calc(100vh-250px)] md:pr-2 pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 custom-scrollbar mask-fade-horizontal">
          {sortedBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.id}`}
              className="block group flex-shrink-0 w-[280px] md:w-auto"
            >
              <article className="space-y-3 p-3 rounded-lg transition-all duration-200 hover:bg-accent/50 hover:shadow-sm border border-transparent hover:border-border h-full">
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
      </div>
    </div>
  );
};

export default BlogSidebar;
