import { skills } from "../assets/data";
import { Flat } from "@alptugidin/react-circular-progress-bar";
const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress-box" key={index}>
            <div className="progress-circle">
              <Flat
                progress={percentage}
                text={title}
                showValue={false}
                showMiniCircle={false}
                sx={{
                  // strokeColor: "hsl(271, 76%, 53%)",
                  strokeColor: "var(--first-color)",
                  bgStrokeColor: "var(--container-color)",
                  barWidth: 7,
                  textFamily: '"Poppins", sans-serif',
                  textSize: "12px",
                  textColor: "var(--title-color)",
                  textWeight: "600",
                  loadingTime: 2000,
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
