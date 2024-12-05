import { Button } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Light from "./light";

const testimonials = [
  {
    name: "Emma J. - Full Stack Engineer",
    idea: "Being part of this club has been a transformative experience. The teamwork and collaboration among the developers are unmatched, and I've gained invaluable knowledge and skills while working on exciting projects. It’s truly a place to grow and thrive!",
  },
  {
    name: "Liam P. - CyberSecurity Expert",
    idea: "What sets this club apart is its commitment to excellence and creativity. Every project is handled with professionalism and a strong sense of teamwork. Joining this club was one of the best decisions of my career!",
  },
  {
    name: " Sofia M. - Data analysist",
    idea: "This club is not just a group; it’s a community where innovation thrives. The developers are incredibly talented, and the support system is amazing. It’s inspiring to work alongside such a passionate and dedicated team!",
  },
];

const imagePaths = ["p1.jpeg", "p2.jpeg", "p3.jpeg"];

let change;

const Testimonials = function () {
  const [center, setCenter] = useState(0);
  const [left, setLeft] = useState(1);
  const [right, setRight] = useState(2);

  return (
    <div
      className="w-[100%] gradient1 flex flex-col items-center h-screen justify-evenly relative mb-14"
      id="testimonial"
    >
      <Light size={500} left={undefined} right={-100} top={-50} />
      <h2 className="text-4xl text-white font-light tracking-[2px] w-[90%] ">
        Our Former Students Members Testimonials
      </h2>

      <div className="w-[90%] flex flex-col md:flex-row md:justify-evenly justify-evenly items-center h-[85%] ">
        <div className="w-[100%]  md:w-[50%] h-[50%] flex items-center relative">
          {imagePaths.map((el, ind) => {
            return (
              <img
                key={ind}
                src={`/${el}`}
                alt="testimonial"
                onClick={() => {
                  if (center !== ind) {
                    if (ind === left) {
                      change = left;
                      setLeft(center);
                      setCenter(change);
                    } else if (ind === right) {
                      change = right;
                      setRight(center);
                      setCenter(change);
                    }
                  }
                }}
                className={`${
                  center === ind &&
                  "w-[43%] absolute top-0 left-[50%] translate-x-[-50%] z-10 transition-all duration-500 custom-shadow1 sm:w-[40%] md:w-[70%] lg:w-[50%] xl:w-[40%]"
                } ${
                  left === ind &&
                  "w-[43%] absolute top-10 left-0 rotate-[-10deg] transition-all duration-500 grayscale sm:w-[40%] md:w-[70%] lg:w-[50%] xl:w-[40%]"
                } ${
                  right === ind &&
                  "w-[43%] absolute top-10 right-0 rotate-[10deg] transition-all duration-500 grayscale sm:w-[40%] md:w-[70%] lg:w-[50%] xl:w-[40%]"
                }`}
              />
            );
          })}
        </div>

        <div className="w-[100%] flex flex-col md:w-[45%] p-5 gap-5 gradient2 custom-shadow1">
          <span className="xl:text-2xl tracking-[2px] text-white font-bold animate-testNameAnimation text-xl">
            {testimonials[center].name}
          </span>
          <p className="xl:text-xl tracking-[2px] text-gray-500 animate-testIdeaAnimation text-base">
            {testimonials[center].idea}
          </p>

          <div className="w-[100%] flex justify-between ">
            <Button
              variant="outlined"
              size="lg"
              onClick={() => {
                if (center > 0) {
                  setCenter((curr) => curr - 1);
                  if (center === 2) {
                    setRight(0);
                    setLeft(2);
                  } else {
                    setRight(1);
                    setLeft(2);
                  }
                }
              }}
            >
              {<ArrowBackIosIcon variant="outlined" sx={{ color: "green" }} />}
            </Button>
            <Button
              variant="outlined"
              size="lg"
              onClick={() => {
                if (center < 2) {
                  setCenter((curr) => curr + 1);
                  if (center === 1) {
                    setRight(1);
                    setLeft(0);
                  } else {
                    setRight(2);
                    setLeft(0);
                  }
                }
              }}
            >
              {
                <ArrowForwardIosIcon
                  variant="outlined"
                  sx={{ color: "green" }}
                />
              }
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
