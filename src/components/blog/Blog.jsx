import "./blog.css";

const Blog = ({ blogImage }) => {
  return (
    <div>
      <div className="blog-card">
        <div className="blog-img">
          <img src={blogImage} alt="img" />
        </div>
        <div className="blog-card-text">
          <p>Welcome to the future of IELTS speaking preparation!</p>
          <h6>12.12.2023 </h6>
        </div>
      </div>
    </div>
  );
};

export default Blog;
