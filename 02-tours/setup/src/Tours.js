import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <React.Fragment>
      <div className='container-fluid col-5 mt-5'>
        <div className='title '>
          <h2 className='fw-bold'>our tours</h2>
          <div className='underline'></div>
        </div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tours;
