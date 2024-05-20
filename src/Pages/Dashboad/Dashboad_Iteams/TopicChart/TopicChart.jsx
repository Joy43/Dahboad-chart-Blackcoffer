import { Pie } from "react-chartjs-2";

import { useState } from "react";
import useAxiosChart from "../../../../Hook/useAxiosChart";
const TopicChart = () => {
  const { data, loading, error } = useAxiosChart(
    "https://dashboad-server.vercel.app/chart"
  );
  const [selectedTopics, setSelectedTopics] = useState([]);
  // ---------loading chart----------
  if (loading)
    return (
      <div className="items-center justify-center">
        <span className="loading flex items-center loading-dots loading-lg text-center"></span>
      </div>
    );
  // -----------error handle------------
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

  const topics = [...new Set(data.map((item) => item.topic))];
  const filteredData =
    selectedTopics.length > 0
      ? data.filter((item) => selectedTopics.includes(item.topic))
      : data;

  const topicCounts = filteredData.reduce((acc, item) => {
    acc[item.topic] = (acc[item.topic] || 0) + 1;
    return acc;
  }, {});

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

  const handleTopicChange = (event) => {
    const { value } = event.target;
    setSelectedTopics(
      selectedTopics.includes(value)
        ? selectedTopics.filter((topic) => topic !== value)
        : [...selectedTopics, value]
    );
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-4xl font-extrabold sm:text-5xl text-[#36A2EB] mb-20">
        Topics Wise Filter Chart
      </h1>
      <div className="lg:flex gap-8 md:grid sm:grid">
        <div className="">
          {topics.map((topic) => (
            <label className="gap-2 flex m-2" key={topic}>
              <input
                type="checkbox"
                value={topic}
                onChange={handleTopicChange}
                checked={selectedTopics.includes(topic)}
              />
              {topic}
            </label>
          ))}
        </div>
        <div
          className="chart-container"
          style={{ width: "50%", height: "55%" }}
        >
          {" "}
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default TopicChart;
