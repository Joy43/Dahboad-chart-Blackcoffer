import { useState } from "react";
import { PolarArea } from "react-chartjs-2";
import useAxiosChart from "../../../../Hook/useAxiosChart";

const Sourcefilter = () => {
  const { data, loading, error } = useAxiosChart(
    "https://dashboad-server.vercel.app/chart"
  );
  const [selectedCountry, setSelectedCountry] = useState([]);

  // Loading state
  if (loading) {
    return (
      <div className="items-center justify-center">
        <span className="loading flex items-center loading-ring loading-lg text-center"></span>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
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
        <span>Error: {error.message}</span>
      </div>
    );
  }

  // Get unique countries
  const countries = [...new Set(data.map((item) => item.source))];

  // Filter data based on selected countries
  const filteredCountryData =
    selectedCountry.length > 0
      ? data.filter((item) => selectedCountry.includes(item.source))
      : data;

  // Count topics
  const topicCounts = filteredCountryData.reduce((acc, item) => {
    acc[item.source] = (acc[item.source] || 0) + 1;
    return acc;
  }, {});

  // Prepare chart data
  const chartData = {
    labels: Object.keys(topicCounts),
    datasets: [
      {
        label: "Topics",
        data: Object.values(topicCounts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  // Handle country selection
  const handleCountryChange = (event) => {
    const { value } = event.target;
    setSelectedCountry(
      selectedCountry.includes(value)
        ? selectedCountry.filter((source) => source !== value)
        : [...selectedCountry, value]
    );
  };

  // Render component
  return (
    <div className="">
      <h1 className="text-center  mt-4 p-2 text-4xl shadow-lg font-extrabold sm:text-5xl text-[#36A2EB] mb-20">
        Source Wise Filter Chart
      </h1>
      <div className="flex gap-4 m-4">
        <div className="country-filters">
          {countries.map((source) => (
            <label className="flex gap-2" key={source}>
              <input
                type="checkbox"
                value={source}
                onChange={handleCountryChange}
              />
              {source}
            </label>
          ))}
        </div>
        <div
          className="chart-container"
          style={{ width: "50%", height: "50%" }}
        >
          <PolarArea data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Sourcefilter;
