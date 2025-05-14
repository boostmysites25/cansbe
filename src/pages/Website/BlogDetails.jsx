import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "../../assets/images/line.png";
import bannerImg from "../../assets/images/blogs-banner.webp";
import { BlogItem } from "./Blogs";
import { useQuery } from "@tanstack/react-query";
import { getBlogBySlug, getBlogs } from "../../utils/api";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { format } from "date-fns";

const BlogDetails = () => {
  const { title } = useParams();

  // Fetch the specific blog by slug
  const {
    data: blogData,
    isLoading: isBlogLoading,
    error: blogError,
  } = useQuery({
    queryKey: ["blog", title],
    queryFn: async () => {
      const response = await getBlogBySlug(title);
      return response.data.blog;
    },
    retry: 1,
    retryDelay: 1000,
  });

  // Fetch all blogs for the "Latest Blogs" section
  const { data: allBlogsData, isLoading: isAllBlogsLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await getBlogs();
      return response.data.blogs;
    },
  });

  if (isBlogLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex justify-center items-center">
          <LoadingSpinner />
        </div>
        <Footer />
      </>
    );
  }

  if (blogError || !blogData) {
    return <Navigate to="/blogs" />;
  }

  const blog = blogData;
  const latestBlogs =
    allBlogsData?.filter((item) => item._id !== blog._id) || [];

  // Format the publish date if available
  const formattedDate = blog.publishDate
    ? format(new Date(blog.publishDate), "MMMM dd, yyyy")
    : "";

  return (
    <>
      <Header />
      <div data-aos="fade-down" className="h-[50vh] md:h-[60vh]">
        <img
          loading="lazy"
          src={bannerImg}
          width="800"
          height="600"
          className="h-full object-cover w-full object-left md:object-top"
          alt="banner"
        />
      </div>
      <div className="bg-tertiary/5 relative text-primary_text">
        <div className="wrapper py-[5rem] relative z-10">
          <div className="flex flex-col gap-2 pb-[3rem] p-3 sm:p-5 bg-secondary/10 rounded-xl mb-[3rem]">
            <img
              data-aos="fade-up"
              src={blog.imageUrl}
              alt={blog.imageAlt || blog.title}
              className="w-full rounded-xl object-cover aspect-[4/3] max-h-[70vh]"
            />
            <div className="flex flex-col gap-2">
              <div
                data-aos="fade-up"
                className="flex justify-between items-center font-light mt-[0.8rem]"
              >
                <div className="rounded-2xl bg-primary text-white font-medium px-3 py-1 text-sm w-fit">
                  By {blog.author?.name || "Admin"}
                </div>
                {formattedDate && (
                  <div className="text-gray-600 text-sm">{formattedDate}</div>
                )}
              </div>
              <h4 data-aos="fade-up" className="heading mt-[1rem] pb-[1.5rem]">
                {blog.title}
              </h4>
              <div
                data-aos="fade-up"
                className="hyphen-auto leading-relaxed text-gray-800 border-t border-primary/30 pt-[2rem]"
              >
                <div
                  className="reset-html-content"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </div>
          </div>
          {latestBlogs.length > 0 && !isAllBlogsLoading && (
            <div className="pt-[3rem]">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-medium text-secondary">Latest Blogs</h2>
              </div>
              <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {latestBlogs.slice(0, 3).map((item) => (
                  <BlogItem key={item._id} blog={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
