import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosChart = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const chartData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    chartData();
  }, [url]);

  return { data, loading, error };
};

export default useAxiosChart;
