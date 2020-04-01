import React, {useState, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PaginatedPosts} from './components/paginatedPosts';

const App = () =>{

  const [postsPerPage, setPostsPerPage] = useState(10);

  const handleChange = (e:ChangeEvent<HTMLSelectElement>) =>{
    const val = e.target.value;
    setPostsPerPage(parseInt(val));
  }

  return (
    <React.Fragment>
      <div className="container fluid">
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h2>React Pagination</h2>
          </div>
            <div className="p-2">
              <h6>Posts per page</h6>
            </div>

          <div className="p-2">
            <select className="custom-select sm" value={postsPerPage} onChange={handleChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>

        <PaginatedPosts noOfPostsPerPage={postsPerPage} />
      </div>
    </React.Fragment>
  );
}




export default App;
