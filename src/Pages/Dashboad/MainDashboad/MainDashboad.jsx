import { useState } from "react";
import useAxiosChart from "../../../../Hook/useAxiosChart";
import FilterComponent from "../FilterComponent/FilterComponent";

const MainDashboard = () => {
  const { data, loading, error } = useAxiosChart("http://localhost:5000/chart");

  const [selectedSectors, setSelectedSectors] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedPESTs, setSelectedPESTs] = useState([]);
  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedSWOTs, setSelectedSWOTs] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  if (loading) {
    return (
      <div className="items-center justify-center">
        <span className="loading flex items-center loading-dots loading-lg text-center"></span>
      </div>
    );
  }

  if (error) {
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
          <span>Error: {error.message}</span>
        </div>
      </div>
    );
  }

  const filters = {
    sectors: data ? [...new Set(data.map((item) => item.sector))] : [],
    regions: data ? [...new Set(data.map((item) => item.region))] : [],
    PESTs: data ? [...new Set(data.map((item) => item.PEST))] : [],
    sources: data ? [...new Set(data.map((item) => item.source))] : [],
    SWOTs: data ? [...new Set(data.map((item) => item.SWOT))] : [],
    countries: data ? [...new Set(data.map((item) => item.country))] : [],
    cities: data ? [...new Set(data.map((item) => item.city))] : [],
  };

  const handleChange = (setter, value) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const filteredData = data
    ? data.filter(
        (item) =>
          (selectedSectors.length === 0 ||
            selectedSectors.includes(item.sector)) &&
          (selectedRegions.length === 0 ||
            selectedRegions.includes(item.region)) &&
          (selectedPESTs.length === 0 || selectedPESTs.includes(item.PEST)) &&
          (selectedSources.length === 0 ||
            selectedSources.includes(item.source)) &&
          (selectedSWOTs.length === 0 || selectedSWOTs.includes(item.SWOT)) &&
          (selectedCountries.length === 0 ||
            selectedCountries.includes(item.country)) &&
          (selectedCities.length === 0 || selectedCities.includes(item.city))
      )
    : [];

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-4xl font-extrabold sm:text-5xl text-[#36A2EB] mb-20">
        Filtered Data Dashboard
      </h1>
      <div className="lg:flex gap-8 md:grid sm:grid">
        <FilterComponent
          title="Sectors"
          options={filters.sectors}
          selectedOptions={selectedSectors}
          handleChange={(value) => handleChange(setSelectedSectors, value)}
        />
        <FilterComponent
          title="Regions"
          options={filters.regions}
          selectedOptions={selectedRegions}
          handleChange={(value) => handleChange(setSelectedRegions, value)}
        />
        <FilterComponent
          title="PESTs"
          options={filters.PESTs}
          selectedOptions={selectedPESTs}
          handleChange={(value) => handleChange(setSelectedPESTs, value)}
        />
        <FilterComponent
          title="Sources"
          options={filters.sources}
          selectedOptions={selectedSources}
          handleChange={(value) => handleChange(setSelectedSources, value)}
        />
        <FilterComponent
          title="SWOTs"
          options={filters.SWOTs}
          selectedOptions={selectedSWOTs}
          handleChange={(value) => handleChange(setSelectedSWOTs, value)}
        />
        <FilterComponent
          title="Countries"
          options={filters.countries}
          selectedOptions={selectedCountries}
          handleChange={(value) => handleChange(setSelectedCountries, value)}
        />
        <FilterComponent
          title="Cities"
          options={filters.cities}
          selectedOptions={selectedCities}
          handleChange={(value) => handleChange(setSelectedCities, value)}
        />
      </div>
      <div className="filtered-data-display mt-8">
        <h2 className="text-2xl font-bold mb-4">Filtered Data</h2>
        <ul>
          {filteredData.map((item, index) => (
            <li key={index} className="mb-2">
              <div>Sector: {item.sector}</div>
              <div>Region: {item.region}</div>
              <div>PEST: {item.PEST}</div>
              <div>Source: {item.source}</div>
              <div>SWOT: {item.SWOT}</div>
              <div>Country: {item.country}</div>
              <div>City: {item.city}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainDashboard;
