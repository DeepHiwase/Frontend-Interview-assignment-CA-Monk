const API_BASE_URL = "http://localhost:3001";

export type Blog = {
  id: number | string;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
};

export const fetchBlogById = async (blogId: string): Promise<Blog> => {
  const response = await fetch(`${API_BASE_URL}/blogs/${blogId}`);
  
  if (!response.ok) {
    throw new Response("Blog not found", { status: 404 });
  }
  
  return response.json();
};

export const fetchAllBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(`${API_BASE_URL}/blogs`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  
  return response.json();
}; 