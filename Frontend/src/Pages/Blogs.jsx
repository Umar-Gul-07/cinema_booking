import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import TitleBar from './include/TitleBar';
import api from '../Utils/Axios';
import { Link } from 'react-router-dom';

const Blogs = ({ title }) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(5); // You can adjust this based on how many blogs you want per page

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs/"); // Assuming your endpoint to fetch blogs
        setBlogs(response.data);
        console.log(blogs)
        setFilteredBlogs(response.data); // Initially, show all blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Search filter function
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter blogs by title or description
    const filtered = blogs.filter((item) =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );

    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Helmet><title>{title}</title></Helmet>
      <TitleBar title={title} />

      <section className="blog-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-50 mb-lg-0">
              <article>
                {currentBlogs.length > 0 ? 
                  currentBlogs.map((item) => (
                    <div className="post-item" key={item.id}>
                      <div className="post-thumb">
                        <Link to="#">
                          <img src={item.image} alt="blog" />
                        </Link>
                      </div>
                      <div className="post-content">
                        <div className="post-header">
                          <h4 className="title">
                            <Link to="#">{item.title}</Link>
                          </h4>
                          <p>{item.description}</p>
                        </div>
                        <div className="entry-content">
                          <div className="left">
                            <span className="date">{item.published_date}</span>
                            <div className="authors">
                              <div className="thumb">
                                <Link to="#0">
                                  <img src="./assets/images/blog/author.jpg" alt="#0" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                  : <strong className="mb-5 text-center">
                      <p className="text-danger m-5">No blogs found.</p>
                    </strong>
                }
              </article>

              <div className="pagination-area text-center">
                {currentPage > 1 && (
                  <a href="#0" onClick={() => handlePageChange(currentPage - 1)}>
                    <i className="fas fa-angle-double-left" />
                    <span>Prev</span>
                  </a>
                )}

                {/* Dynamically generate page numbers */}
                {[...Array(Math.ceil(filteredBlogs.length / blogsPerPage))].map((_, index) => (
                  <a
                    href="#0"
                    key={index}
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </a>
                ))}

                {currentPage < Math.ceil(filteredBlogs.length / blogsPerPage) && (
                  <a href="#0" onClick={() => handlePageChange(currentPage + 1)}>
                    <span>Next</span>
                    <i className="fas fa-angle-double-right" />
                  </a>
                )}
              </div>
            </div>
            <div className="col-lg-4 col-sm-10 col-md-8">
              <aside>
                <div className="widget widget-search">
                  <h5 className="title">Search</h5>
                  <form className="search-form">
                    <input
                      type="text"
                      placeholder="Enter your Search Content"
                      value={searchQuery}
                      onChange={handleSearch}
                      required=""
                    />
                    <button type="submit">
                      <i className="flaticon-loupe" />
                      Search
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
