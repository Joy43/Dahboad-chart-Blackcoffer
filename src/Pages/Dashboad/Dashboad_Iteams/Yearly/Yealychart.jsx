import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

function Yealychart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dashboad-server.vercel.app/variabledata"
      );
      setChartData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const prepareChartData = () => {
    // Extracting relevant data for the chart
    const labels = chartData.map(
      (entry) => `${entry.start_year}-${entry.end_year}`
    );
    const intensities = chartData.map((entry) => entry.intensity);
    const likelihoods = chartData.map((entry) => entry.likelihood);
    const relevances = chartData.map((entry) => entry.relevance);

    return {
      labels: labels,
      datasets: [
        {
          label: "Intensity",
          data: intensities,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
        {
          label: "Likelihood",
          data: likelihoods,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
        },
        {
          label: "Relevance",
          data: relevances,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    };
  };

  return (
    <div className="Yealychart">
      <h1 className="text-center mt-3  text-4xl font-extrabold sm:text-5xl text-[#36A2EB] mb-20 ">
        {" "}
        Visualized Yealy
      </h1>
      <div style={{ height: "500px", width: "1000px" }}>
        <Line
          data={prepareChartData()}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [{ stacked: true }],
              yAxes: [{ stacked: true }],
            },
          }}
        />
      </div>
    </div>
  );
}

export default Yealychart;
