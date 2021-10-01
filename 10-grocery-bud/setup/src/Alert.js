import React, { useEffect } from "react";

const Alert = ({ getAlert, type, msg }) => {
  useEffect(() => {
    const time = setTimeout(() => {
      getAlert();
    }, 3000);
    return () => clearTimeout(time);
  }, []);
  return (
    <>
      <p className={`alert alert-${type}`}>{msg}</p>
    </>
  );
};

export default Alert;
