import { HERO_CONTENT } from "./constants";
import profilePic from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-40">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 mt-20 ml-8 text-5xl lg:text-8xl font-thin tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
              Jagruthi Pulumati
            </h1>
            <span className="ml-8 text-2xl lg:text-3xl bg-gradient-to-r from-pink-200 via-slate-400 to-purple-100 bg-clip-text text-transparent tracking-tight">
              Web Developer | Aspiring Coder | CS & AI Student
            </span>
            <p className="my-2 max-w-4xl py-6 font-light tracking-tighter ml-8 text-xl">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-12 rounded-2xl">
          <div className="flex justify-center">
            <img
              className="rounded-2xl w-[300px] lg:w-[400px]"
              src={profilePic}
              alt="Jagruthi Pulumati"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
