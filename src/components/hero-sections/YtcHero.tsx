// Note: Hero section for Your Tutoring Co.
import Button from "../core/GradientButton";
import HeroImg from "../../images/student-on-laptop.webp";

import {
  AdjustmentsHorizontalIcon,
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  PlayCircleIcon,
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
    <div className="relative z-1 overflow-hidden border-b border-pine/10 px-4 md:px-6 lg:px-8">
      <div className="relative pb-16 pt-6 sm:pb-24 lg:pb-32">
        <main className="mx-auto max-w-7xl mt-16 sm:mt-24 lg:mt-32">
          <div className="flex justify-center lg:justify-between flex-col md:flex-col items-center lg:items-start lg:flex-row md:px-4 lg:px-4">
            <div className="md:max-w-2xl text-left md:text-center lg:text-left pr-4 ">
              <h6 className="block text-pine font-bold text-sm underline underline-offset-2 decoration-lightOrange decoration-2">
                {SubHeading}
              </h6>
              <h1 className="mt-4 -mx-1 text-zinc text-3xl">
                <span className="">{HeadingPart1}</span>
                <span
                  className="bg-clip-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]
                   text-transparent bg-gradient-to-r from-lightestOrange via-lightOrange to-altOrange"
                >
                  {HeadingPart2}
                </span>
              </h1>
              <p className="mt-3 font-light text-pine sm:mt-5">{SubTitle}</p>
              <dl className="mt-6 max-w-xl space-y-2 text-base leading-7 text-pine lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-sm text-black underline underline-offset- decoration-lightOrange decoration-2">
                      <feature.icon
                        className="absolute left-1 top-1.5 h-5 w-5 text-lightOrange text-sm"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-darkerBlue text-sm font-light">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <Button text="Start now"/>
                <a href="#" className="text-sm font-semibold text-pine mx-4">
                  <span className="underline underline-offset-2 decoration-limelight decoration-2 hover:text-pine/80">
                    {" "}
                    Why Your Tutoring Co?
                  </span>{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-lg">
                <button
                  type="button"
                  className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:limelight focus:ring-offset-2"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img className="" src={HeroImg.src} alt="" />
                  <span
                    className="absolute inset-0 flex h-full w-full items-center justify-center"
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
