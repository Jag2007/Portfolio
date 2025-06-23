import { HERO_CONTENT } from "./constants";
import profilePic from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4 lg:mb-35 mt-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 mt-20 ml-8 text-5xl lg:text-8xl font-thin tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
              Jagruthi Pulumati
            </h1>
            <span className="bg-gradient-to-r from-pink-200 via-slate-400 to-purple-100 bg-clip-text text-4xl tracking-tight text-transparent ml-15">
              Web Developer | Aspiring Coder | CS & AI Student
            </span>
            <p className="my-2 max-w-10xl py-6 font-light tracking-tighter ml-15 text-xl">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-15 rounded-2xl">
          <div className="flex justify-center">
            <motion.img
              className="rounded-2xl"
              src={profilePic}
              alt="Jagruthi Pulumati"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
