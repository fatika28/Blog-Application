import { useHistory, useParams } from "react-router-dom";
import UseFetch from "./useFetch";
const BlogDetail = () => {
 
    const { id } = useParams();
    const { data, error, isPending } = UseFetch('http://localhost:8000/data/' + id);
    const history =useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/data/' + data.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) }
  
    return (
      <div className="blog-details">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { data && (
          <article>
            <h2>{ data.title }</h2>
            <p>Written by { data.author }</p>
            <div>{ data.body }</div>
            <button onClick={handleDelete}>delete</button>
          </article>
        )}
      </div>
    );
};

export default BlogDetail;
