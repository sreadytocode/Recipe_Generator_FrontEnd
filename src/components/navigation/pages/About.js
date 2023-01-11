import React from "react";
import { teamData } from "./teamData/teamData";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

import Title from "../../reusable/Title";

const About = () => {
  return (
    <>
      <div className="about">
        <Title text={"Our Mission"} />
      </div>
      <section className=" bg-green-light p-6 text-white font-bold flex flex-col items-center p-8">
        <h3 className="text-4xl mb-6">
          Make meal times easier and reduce food waste to save the planet...
        </h3>
        <ul className="max-w-[800px] ml-4 text-xl">
          <li className="list-disc mb-2">
            <p>
              33% of food is wasted before it even reaches our plates - this can
              happen during harvesting, processing, transportation, storage and
              retail.
            </p>
          </li>
          <hr className="my-4"></hr>
          <li className="list-disc mb-2">
            <p>
              Food waste is a bigger cause of climate change than plastics -
              Methane, released into the atmosphere from food decomposing in
              landfill, has over 21 times more warming power than CO2.
            </p>
          </li>
          <hr className="my-4"></hr>
          <li className="list-disc mb-2">
            <p>
              Almost two-thirds of Scottish food waste comes from households -
              Scottish households throw away 630,000 tonnes of food waste every
              year.
            </p>
          </li>
          <hr className="my-4"></hr>
          <li className="list-disc mb-2">
            <p>
              Food waste costs Scotland over £1 billion a year... - ...that's
              roughly £470 per household.
            </p>
          </li>
        </ul>
        <h3 className="text-2xl mb-6 mt-8">
          Use our curated meal planner to get exactly the amount of ingredients
          you need for you weekly shopping.
        </h3>
      </section>
      <section className="mb-16">
        <h3 className="text-center mt-6 text-4xl">Meet the Team</h3>
        <div
          className="flex flex-wrap justify-center gap-10 mx-12 mt-10
      "
        >
          {teamData.map((teamMember) => {
            return (
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full mb-3 border-solid border-4 border-[#59BD8D]"
                  src={teamMember.img}
                  alt={teamMember.name}
                  width="200"
                  height="200"
                />
                <h2>{teamMember.name}</h2>
                <p>{teamMember.title}</p>
                <div className="flex gap-3 mt-4">
                  <a href={teamMember.github}>
                    <AiOutlineGithub size={30} />
                  </a>
                  <a href={teamMember.linkedIn}>
                    <AiFillLinkedin size={30} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
