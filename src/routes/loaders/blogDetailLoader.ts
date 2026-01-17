// Lib
import { queryClient } from "@/lib/queryClient";
import { fetchBlogById } from "@/api";
// Types
import type { LoaderFunction } from "react-router";

export const blogQueryKey = (blogId: string) => ["blogs", blogId] as const;

const blogDetailLoader: LoaderFunction = async ({ params }) => {
  const { blogId } = params as { blogId: string };

  const blog = await queryClient.fetchQuery({
    queryKey: blogQueryKey(blogId),
    queryFn: () => fetchBlogById(blogId),
  });

  return { blog };
};

export default blogDetailLoader;