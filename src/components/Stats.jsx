import { stats } from "../assets/data";
import parse from "html-react-parser";
const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div className="status__box" key={index}>
            <h3>{no}</h3>
            <p>{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Stats;
