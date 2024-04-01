import { personalInfo } from "../assets/data";
const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info__item" key={index}>
            <span>{title}</span>
            <span>{description}</span>
          </li>
        );
      })}
    </>
  );
};

export default Info;
