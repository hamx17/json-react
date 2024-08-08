import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showdetails } from "../Slice/detailsSlice";

const Read = () => {
  const dispatch = useDispatch();

  const { Items, loading, error } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showdetails());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {Items && Items.length > 0 ? (
        Items.map((ele) => (
          <div className="card" key={ele.id}>
            <div className="card-body">
              <h5 className="card-title">{ele.title}</h5>
           
         
              <p className="card-text">{ele.body}</p>
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        ))
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};

export default Read;