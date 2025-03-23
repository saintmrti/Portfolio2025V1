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
    <section id="about" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-2 pt-3 lg:mt-4 lg:pt-6">
        <div className="lg:col-span-2">
          <h1 className="text-3xl lg:text-5xl">
            Hi, this is <span className="text-primary">Saint</span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-secondary mt-1 lg:mt-2">
            Full Stack Engineer
          </h2>
          <div className="flex items-center mt-1 lg:mt-2">
            <GithubIcon className="w-8 h-8 lg:w-10 lg:h-10" />
            <Linkedin className="w-8 h-8 lg:w-10 lg:h-10" />
          </div>
          <div className="flex justify-between mt-14 lg:mt-20 lg:w-1/2">
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
        <div className="justify-self-center place-content-center lg:place-content-start h-[600px]">
          <Image
            src={Profile}
            alt="Saint's profile picture"
            width={300}
            className="rounded-full shadow-lg"
            priority
          />
        </div>
        <div className="lg:col-span-3">
          <div className="flex justify-evenly items-center">
            <button className="btn-primary text-sm lg:text-base">
              <EmailIcon className="mr-2 w-5 h-5" /> Contact Me
            </button>
            <button className="btn-primary text-sm lg:text-base">
              <DownloadIcon className="mr-2 w-5 h-5" /> Get Resume
            </button>
          </div>
        </div>
      </div>
      <div className="mt-14 pb-14 lg:mt-28 lg:mx-28 lg:px-28 lg:pb-28">
        <p className="lg:text-lg lg:pt-10">
          Speciliced in create web solutions to build the future. Working hand
          in hand with big companies and SME. With over three years of
          experience my focus is on development web applications using the
          latest technologies such as ReactJs, NextJs, TypeScript, Node.js, SQL.
        </p>
      </div>
      <WorldSVG className="absolute inset-x-0 top-14 lg:top-28 w-full h-auto lg:h-full object-cover z-[-1] opacity-25" />
    </section>
  );
};

export default About;
