import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailById } from "../Slice/detailsSlice";  // Ensure the correct path

const SearchById = () => {
  const [searchId, setSearchId] = useState('');
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.app);

  const handleSearch = () => {
    if (searchId) {
      dispatch(fetchDetailById(searchId));
    }
  };

  return (
    <div>


      <h1>search details by id number only</h1>
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Enter ID to search"
      />
      <button onClick={handleSearch}>Search</button>

    
      {item && (
        <div className="card" key={item.id}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.userId}</h6>
            <p className="card-text">{item.body}</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchById;