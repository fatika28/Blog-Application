import { Link } from 'react-router-dom'
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
     
        <h3>{title}</h3>
        {blogs.map((data) => (
          <div className="blog-preview" key={data.id}>
            <Link to={`/data/${data.id}`}>
            <h2>{data.title}</h2>
            <p> Written by {data.author}</p>
            </Link>
          </div>
        ))}{" "}
      </div>
   
  );
};

export default BlogList;
