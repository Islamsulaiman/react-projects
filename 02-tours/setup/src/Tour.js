import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  let [allInfo, setAllInfo] = useState(false);
  // let { id, name, info, image, price } = tour;
  let style = "width: 15px; height: 10px;";

  return (
    <>
      <div className='card mb-4 rounded shadow-lg border border-white'>
        <div>
          <img
            src={image}
            alt={name}
            className='rounded img-fluid '
            style={{
              width: "50rem",
              height: "20rem",
              overflow: "hidden",
              objectFit: "cover",
              maxHeight: "100%",
              maxWidth: "100%",
              objectPosition: "50% 60%",
            }}
          />
        </div>

        <footer>
          <div className=' d-flex justify-content-between m-3 mb-0'>
            <p className='fw-bold'>{name}</p>
            <p className='bg-info bg-gradient text-primary p-3 fw-bold'>
              {price}
            </p>
          </div>

          <p className='m-3 mb-0 mt-1'>
            {allInfo ? info : `${info.substring(0, 200)}...`}
            <button
              className='btn btn-link text-info m-1 ps-0 mt-0'
              onClick={() => {
                setAllInfo(!allInfo);
              }}
            >
              {allInfo ? "Read less" : "Read more"}
            </button>
          </p>
          <div className='d-flex justify-content-center m-4'>
            <button
              className='btn btn-outline-danger text-center m-0'
              onClick={() => removeTour(id)}
            >
              Not interested
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Tour;
