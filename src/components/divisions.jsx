import { DivisionsList } from "../constants";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import Light from "./light";

const DivisionsComponent = function () {
  const slideInterval = 5000;
  const [activePic, setActivePic] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      activePic < 4 ? setActivePic((prev) => prev + 1) : setActivePic(0);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [activePic]);

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] mx-auto flex flex-col">
      <h2 className="text-xl lg:text-2xl text-white py-8 w-full">Divisions</h2>
      {DivisionsList.map(function (el, i) {
        return (
          <>
            <div key={i} className="w-full flex flex-col gap-5 mb-24">
              <div className="w-full flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full lg:w-[45%] flex flex-col  gap-3">
                  <h1 key={i} className="text-2xl lg:text-3xl text-primary">
                    0{i + 1} {el.name} Division
                  </h1>
                  <p className="text-base lg:text-xl  font-thin tracking-[1px] text-white4">
                    {el.introduction}
                  </p>

                  <div className="w-full flex flex-col items-start gap-4">
                    <h3 className="text-white2 text-xl tracking-[1px] font-[400] bg-[rgba(11,63,93,0.2)] py-1 px-2 rounded-md shadow-md">
                      Mission
                    </h3>
                    <div className="w-full ">
                      {el.mission.map(function (el, i) {
                        return (
                          <div
                            key={i}
                            className="text-base tracking-[1px] bg-[rgba(11,63,93,0.05)] px-2 py-2 rounded-lg"
                          >
                            <div className="w-full flex flex-col gap-1">
                              <span className="text-base lg:text-xl flex gap-2 text-white1 items-center">
                                {/* <span className="w-2 h-2 rounded-full bg-white"></span> */}
                                {i + 1} {el.heading}
                              </span>
                              <p className="text-white2">{el.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* TODO: FOR THE IMAGE PART */}
                <div className="w-full lg:w-[52%] relative h-80    lg:h-96 2xl:h-[34rem]">
                  <Light size={500} top={-100} left={undefined} right={-100} />

                  {Array.from({ length: 5 }, function (el, j) {
                    return (
                      <img
                        key={j}
                        src={`/div${i + 1}${j + 1}.jpg`}
                        alt="About"
                        className={
                          j === activePic
                            ? `w-[100%] h-full  object-cover  opacity-100 translate-x-0 absolute inset-0 transition-all duration-900 mb-10 `
                            : `w-[100%] h-full  object-cover  opacity-0 translate-x-full absolute inset-0 transition-all duration-900 mb-10`
                        }
                        onClick={() => setActivePic(j)}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="w-full flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full lg:w-[45%] flex flex-col  gap-3">
                  <div className="w-full flex flex-col items-start gap-4">
                    <h3 className="text-white2 text-xl tracking-[1px] font-[400] bg-[rgba(11,63,93,0.2)] py-1 px-2 rounded-md shadow-md">
                      Some Previous Roles
                    </h3>
                    <div className="w-full flex flex-col gap-2">
                      {el.previousRoles.map(function (el, i) {
                        return (
                          <div
                            key={i}
                            className="text-base tracking-[1px] bg-[rgba(11,63,93,0.05)] px-2 py-2 rounded-lg"
                          >
                            <div className="w-full flex flex-col gap-1">
                              <span className="text-base lg:text-xl flex gap-2 text-white1 items-center">
                                {/* <span className="w-2 h-2 rounded-full bg-white"></span> */}
                                {i + 1} {el.heading}
                              </span>
                              <p className="text-white2">{el.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* TODO: FOR THE IMAGE PART */}
                <div className="w-full lg:w-[52%] flex flex-col items-start gap-5">
                  <h3 className="text-white2 text-xl tracking-[1px] font-[400] bg-[rgba(11,63,93,0.2)] py-1 px-2 rounded-md shadow-md">
                    Frequently Asked Questions
                  </h3>

                  <div className="w-full flex flex-col gap-6">
                    {el.frequentlyAskedQuestions.map(function (el, i) {
                      return (
                        <Accordion
                          key={i}
                          className="bg-blue-600"
                          sx={{
                            backgroundColor: "rgba(11,63,93,0.05)", // Equivalent to bg-blue-600
                            color: "#FFFFFF", // Text color
                            "&.Mui-expanded": {
                              margin: "0", // Override default expanded spacing
                            },
                            border: "1px solid #6405a7",
                          }}
                        >
                          <AccordionSummary
                            expandIcon={
                              <ExpandMoreIcon className="text-white" />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className="bg-blue-600"
                            sx={{
                              backgroundColor: "rgba(11,63,93,0.1)",
                              color: "#ffffff",
                            }}
                          >
                            <Typography>{el.question}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>{el.answer}</Typography>
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      <div className="w-full lg:w-[45%]"></div>
    </div>
  );
};

export default DivisionsComponent;
