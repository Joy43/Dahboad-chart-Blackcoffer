import Chartpie from "../../../assets/images/chart graph nbg.gif";
import Chartbar from "../../../assets/images/Graph and chart.gif";
const Home = () => {
  return (
    <div className="lg:flex  gap-4 flex-row sm:grid">
      <div className=" lg:basis-1/2">
        <img src={Chartpie} alt="" />
      </div>
      <div className="basis-1/2 sm:grid">
        <img src={Chartbar} alt="" />
      </div>
    </div>
  );
};

export default Home;
