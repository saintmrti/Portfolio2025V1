import React from "react";
import Image from "next/image";
import Profile from "../../public/images/profile.jpg";
import WorldSVG from "../../public/svgs/WorldSVG.svg";
import GithubIcon from "../../public/svgs/github-mark.svg";
import Linkedin from "../../public/svgs/linkedin.svg";
import DownloadIcon from "../../public/svgs/Download.svg";
import EmailIcon from "../../public/svgs/email.svg";
import AchievementCard from "../components/about/AchievementCard";

const About = () => {
  return (
    <section id="about">
      <WorldSVG className="absolute inset-x-0 top-28 w-full h-full object-cover z-0 opacity-25" />
      <div className="container mx-auto p-10 grid grid-cols-3 pt-24 relative z-2">
        <div className="col-span-2">
          <h1 className="text-5xl">
            Hi, this is <span className="text-primary">Saint</span>
          </h1>
          <h2 className="text-2xl text-secondary mt-2">Full Stack Engineer</h2>
          <div className="flex items-center mt-2">
            <GithubIcon className="w-10 h-10" />
            <Linkedin className="w-10 h-10" />
          </div>
          <div className="flex justify-between mt-20 w-1/2">
            <AchievementCard
              title="Years"
              description="Experience"
              quantity={3}
            />
            <AchievementCard title="Done" description="Projects" quantity={6} />
            <AchievementCard
              title="Years"
              description="Experience"
              quantity={3}
            />
          </div>
        </div>
        <Image
          src={Profile}
          alt="Saint's profile picture"
          width={300}
          className="rounded-full shadow-lg"
          priority
        />
        <div className="col-span-3">
          <div className="flex justify-evenly items-center mt-36">
            <button className="btn-primary">
              <EmailIcon className="mr-2 w-5 h-5" /> Contact Me
            </button>
            <button className="btn-primary">
              <DownloadIcon className="mr-2 w-5 h-5" /> Get Resume
            </button>
          </div>
        </div>
      </div>
      <div className="mt-28 mx-28 px-28 pb-28">
        <p className="text-lg pt-10">
          Speciliced in create web solutions to build the future. Working hand
          in hand with big companies and SME. With over three years of
          experience my focus is on development web applications using the
          latest technologies such as ReactJs, NextJs, TypeScript, Node.js, SQL.
        </p>
      </div>
    </section>
  );
};

export default About;
