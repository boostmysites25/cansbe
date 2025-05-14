import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "../../assets/images/line.png";
import bannerImg from "../../assets/images/blogs-banner.webp";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../utils/api";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { format } from "date-fns";

const Blogs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await getBlogs();
      return response.data.blogs;
    },
  });

  const blogs = data || [];

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
      <div className="bg-secondary/5 relative text-primary_text">
        <div className="py-[5rem] flex flex-col gap-5 items-center wrapper">
          <div data-aos="fade-up" className="flex items-center gap-3">
            <LazyLoadImage
              src={line}
              alt="Decorative line"
              className="w-[3rem]"
            />
            <h2 className="font-medium text-secondary">Blogs</h2>
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="text-center py-10 text-red-500">
              {error.message || "Failed to load blogs. Please try again later."}
            </div>
          ) : (
            <>
              <h4
                data-aos="fade-up"
                className="heading-2 mx-auto font-semibold leading-tight text-primary text-center"
              >
                Insights and Innovations: Your Pathway to IT Excellence
              </h4>
              <div className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {blogs.map((blog) => (
                  <BlogItem key={blog._id} blog={blog} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;

// blog item
export const BlogItem = ({ blog }) => {
  // Format the publish date if available
  const formattedDate = blog.publishDate ? 
    format(new Date(blog.publishDate), 'MMM dd, yyyy') : '';

  return (
    <div
      data-aos="fade-up"
      className="bg-secondary/10 rounded-xl p-5 text-primary_text relative z-10 group"
    >
      <Link to={`/blogs/${blog.slug}`}>
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt || blog.title}
          width="600"
          height="400"
          className="bg-cover aspect-video w-full rounded-xl group-hover:opacity-85 transition-all duration-200"
        />
      </Link>
      <div className="flex justify-between items-center font-light mt-[0.8rem]">
        {blog.author?.name && (
          <div className="text-sm text-gray-600">
            By {blog.author.name}
          </div>
        )}
        {formattedDate && (
          <div className="text-sm text-gray-600">
            {formattedDate}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-[1rem]">
        <Link
          to={`/blogs/${blog.slug}`}
          className="text-xl hyphen-auto font-medium leading-tight line-clamp-2 text-ellipsis hover:text-tertiary transition-all duration-200"
        >
          {blog.title}
        </Link>
        <div
          dangerouslySetInnerHTML={{ __html: blog.excerpt }}
          className="text-[.9rem] leading-tight text-gray-700 line-clamp-4 text-ellipsis hyphen-auto"
        ></div>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <Link to={`/blogs/${blog.slug}`} className="primary-btn w-full">
          Read More
        </Link>
      </div>
    </div>
  );
};
