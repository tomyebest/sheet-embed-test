import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Tooltips from "../Tooltips";
import Benefits from "../Benefits";
import FreeTrial from "../call-to-action/FreeTrialAlt";

/* Image imports */
import OnlineClassroom from "../../images/tempClassroom.jpeg";
import OptimiseHeroImg from "../../images/optimise-hero-img-removebg2.png";
import OptimiseClassroom from "../../images/online-classroom.webp";

/* ~~~~~~~~~~~~~ */
const frontmatter = {
  h1: "Personalised tutoring that teachers recommend",
  description:
    "Our expert tutors help students to improve their achievements at school, whether they are behind, keeping up or needing extension.",
  img: OptimiseHeroImg,
};

export default function Herov2() {
  return (
    <div className="bg-lightestBlue">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-lightestBlue sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-14 lg:px-8">
          <Tooltips />
          <div className="mt-4 flex flex-col xl:flex-row sm:mt-4 mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-4 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-darkBlue sm:text-5xl lg:col-span-2 xl:col-auto">
              {frontmatter.h1}
            </h1>
            <div className="max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-md font-lighter leading-6 text-darkBlue/90">
                {frontmatter.description}
              </p>
              <hr className="bg-darkBlue/50 mt-4 mb-4" />
              <div className="flex items-center">
                <Benefits />
              </div>
            </div>
            <img
              src={frontmatter.img.src}
              alt=""
              className="-mt-20 brightness-150 sm:max-h-10/12 aspect-w-6 aspect-h-5 w-12/12 max-w-lg rounded-2xl object-cover lg:max-w-none xl:row-span-2 xl:row-end-2 mx-auto"
            />
          </div>
        </div>
      </div>
      {/* <FreeTrial /> */}
    </div>
  );
}
