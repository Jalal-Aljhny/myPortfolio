import PropTypes from "prop-types";
import parse from "html-react-parser";
const Resume = ({ icon, year, title, desc }) => {
  return (
    <div className="resume__item">
      <div>{icon}</div>
      <span>{year}</span>
      <h3>{title}</h3>
      <ul>{parse(desc)}</ul>
    </div>
  );
};

export default Resume;
Resume.propTypes = {
  icon: PropTypes.element,
  year: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
