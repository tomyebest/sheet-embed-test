import Button from "../core/GradientButton";
import HeroImg from "../../images/student-on-laptop.webp";

import {
  AdjustmentsHorizontalIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const SubHeading = "Find your perfect tutor!";
const HeadingPart1 = "Discover academic ";
const HeadingPart2 = "excellence.";
const SubTitle =
  "Your Tutoring Co’s mission is to provide students with the opportunity to access the expert and specialised tuition they need to achieve their learning goals, at prices they can afford.";

const features = [
  {
    name: "Advanced Learning Environment.",
    description:
      "Our secure online classrooms provide an interactive, personalised learning experience for students.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Interactive Tools.",
    description:
      "Classrooms come with various tools, including an online whiteboard, drawing and text tools, a PDF creator, and voice and video conferencing.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Minimal Technical Requirements.",
    description:
      "All you need for online lessons is a stable internet connection and a computer with audio and camera.",
    icon: GlobeAltIcon,
  },
];

export default function Hero() {
  return (
    <div className="relative z-1 overflow-hidden px-4 md:px-6 lg:px-8">
      <div className="relative pb-16 pt-6 sm:pb-24 lg:pb-32">
        <main className="mx-auto max-w-7xl mt-16 sm:mt-24 lg:mt-32">
          <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
            <div className="text-center lg:text-left md:max-w-2xl lg:pr-4">
              <h6 className="text-sm font-bold text-pine underline">
                {SubHeading}
              </h6>
              <h1 className="mt-4 text-3xl text-zinc">
                {HeadingPart1}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-lightestOrange via-lightOrange to-altOrange">
                  {HeadingPart2}
                </span>
              </h1>
              <p className="mt-3 text-pine">{SubTitle}</p>
              <dl className="mt-6 space-y-2 text-pine">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-sm text-black underline">
                      <feature.icon
                        className="absolute left-1 top-1.5 h-5 w-5 text-lightOrange"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="inline text-darkerBlue text-sm">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <Button text="Start now" />
                <a href="#" className="text-sm font-semibold text-pine mx-4">
                  <span className="underline hover:text-pine/80">
                    Why Your Tutoring Co?
                  </span>{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="relative mt-12 w-full max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0">
              <div className="relative w-full shadow-lg rounded-lg">
                <button
                  type="button"
                  className="relative w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-limelight focus:ring-offset-2"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img src={HeroImg.src} alt="" />
                  <span
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-20 w-20 text-lightOrange"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx={42}
                        cy={42}
                        r={42}
                        fill="white"
                      />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
