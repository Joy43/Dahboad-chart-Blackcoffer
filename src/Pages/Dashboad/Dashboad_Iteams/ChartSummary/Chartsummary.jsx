import { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import useAxiosChart from "../../../../Hook/useAxiosChart";

Chart.register(...registerables);

const Chartsummary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useAxiosChart(
    `https://dahboad-chart-blackcoffer.vercel.app/chart?page=${currentPage}&limit=20`
  );
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (data) {
      const topics = data.map((item) => item.topic);
      const intensities = data.map((item) => item.intensity);

      // Define a set of colors
      const colors = [
        "rgba(75, 192, 192, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
      ];

      // Extend colors if there are more topics than colors
      const backgroundColors = topics.map(
        (_, index) => colors[index % colors.length]
      );
      const borderColors = topics.map((_, index) =>
        colors[index % colors.length].replace("0.6", "1")
      );

      const chartConfig = {
        labels: topics,
        datasets: [
          {
            label: "Intensity",
            data: intensities,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      };

      setChartData(chartConfig);
    }
  }, [data]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (loading)
    return (
      <div className="items-center justify-center">
        <span className="loading flex items-center loading-dots loading-lg text-center"></span>
      </div>
    );
  if (error)
    return (
      <div>
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span> Error: {error.message}</span>
        </div>
      </div>
    );

  return (
    <div>
      <div className="m-2">
        <h2 className="text-center  text-4xl font-extrabold sm:text-5xl text-[#36A2EB] mb-20">
          Chart Summary
        </h2>
      </div>
      {chartData.labels && (
        <>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />

          <div className="flex justify-between m-4">
            <button
              type="button"
              onClick={handlePrevPage}
              className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
            >
              <div className="flex flex-row align-middle">
                <svg
                  className="w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="ml-2">Prev</p>
              </div>
            </button>
            {/* -------next */}
            <button
              type="button"
              onClick={handleNextPage}
              className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
            >
              <div className="flex flex-row align-middle">
                <span className="mr-2">Next</span>
                <svg
                  className="w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Chartsummary;
