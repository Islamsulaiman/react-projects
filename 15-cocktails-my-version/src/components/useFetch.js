import React, { useEffect, useState, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    let response = await fetch(url);
    let dataRes = response.json();
    setData(dataRes);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);
  return { data, loading };
};

export { useFetch };
