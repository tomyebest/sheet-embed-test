/* Component frontmatter */
import OnlineClassroom from '../../images/tempClassroom.jpeg'
import OptimiseHeroImg from '../../images/optimise-hero-img.webp'
import OurClients from '../social-proof/OurClients'
import HeroImg from "../../images/optimise-hero-img.webp";
import Button from "../core/GradientButton";

import FreeTrial from '../call-to-action/BookFreeTrial'
import Tooltips from "../Tooltips";

const orangePill = "Watch Example Lesson"
const aboveh1 = "Mapped to Australian Curriculum"
const h1 = "Personalised student tutoring that teachers recommend"
const description = "Our expert tutors help students to improve their achievements at school, whether they are behind, keeping up or needing extension."
const buttonText = "Book a Free Trial Lesson"
const actionText = "Our Tutors"

import { AdjustmentsHorizontalIcon, ClipboardDocumentCheckIcon, ComputerDesktopIcon, CursorArrowRaysIcon, GlobeAltIcon, PlayCircleIcon} from '@heroicons/react/24/outline'

const features = [

{
  name: 'Brain-researched Strategies',
 // description: 'Our secure online classrooms provide an interactive, personalised learning experience for students.',
  icon: AdjustmentsHorizontalIcon,
},
{
  name: 'Qualified, Experienced & Successful Educators',
 // description: 'Our secure online classrooms provide an interactive, personalised learning experience for students.',
  icon: ComputerDesktopIcon,
},
{
  name: 'Lessons Are Individualised For Every Student',
 // description: 'Our secure online classrooms provide an interactive, personalised learning experience for students.',
  icon: GlobeAltIcon,
},
];




// const features = [
//     {
//       name: 'Advanced Learning Environment.',
//       description: 'Our secure online classrooms provide an interactive, personalised learning experience for students.',
//       icon: AdjustmentsHorizontalIcon,
//     },
//     {
//       name: 'Interactive Tools.',
//       description:
//         'Classrooms come with various tools, including an online whiteboard, drawing and text tools, a PDF creator, and voice and video conferencing.',
//       icon: ComputerDesktopIcon,
//     },
//     {
//       name: 'Easy Access.',
//       description: 'Students can access their online classroom by logging into our website and clicking a personalised link, no extra plugins or downloads needed.',
//       icon: CursorArrowRaysIcon,
//     },
//     // {
//     //   name: 'Minimal Technical Requirements.',
//     //   description: 'All students need for online lessons is a stable internet connection and a computer with audio and camera.',
//     //   icon: GlobeAltIcon,
//     // },
//   ];
  
/* -------------------- */


export default function Hero1() {
  return (
    <div className="bg-lightestBlue border-b border-darkBlue/80">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-6 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-10">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="flex align-center justify-start">
                  {/* <span className="inline-flex items-center justify-center space-x-2 text-sm font-semibold text-darkBlue underline underline-offset-2 decoration-lightOrange mr-6">
                    <ClipboardDocumentCheckIcon className="text-lightOrange h-5 w-5 mr-1" />{" "}
                    {aboveh1}
                  </span> */}
                  {/* <a
                    href="https://www.youtube.com/watch?v=3DXXMYh5B1M"
                    target="_blank"
                    rel="nofollow"
                    className=""
                  >
                    <span className="rounded-lg bg-lightOrange/10 hover:bg-lightOrange/20 px-3 py-1 text-xs font-normal leading-6 text-lightOrange ring-1 ring-inset ring-lightOrange/50 flex justify-center items-center">
                      <PlayCircleIcon className="text-lightOrange h-4 w-4 mr-1" />{" "}
                      {orangePill}
                    </span>
                  </a> */}

                  <Tooltips />
                </div>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-darkBlue sm:text-5xl">
                  {h1}
                </h1>
                <p className="mt-4 text-md leading-6 text-darkBlue">
                  {description}
                </p>
                {/*  <div className="mt-6 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-lightOrange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-darkOrange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkBlue"
                  >
                    {buttonText}
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-darkBlue hover:underline hover:underline-offset-2 hover:decoration-lightOrange">
                    {actionText} <span aria-hidden="true">→</span>
                  </a>
                </div> */}
                {/* <dl className="mt-6 max-w-xl space-y-2 text-base leading-7 text-darkBlue lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-sm text-darkBlue ">
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
                </dl> */}
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
                      {/* <dd className="inline text-darkerBlue text-sm font-light">
                        {feature.description}
                      </dd> */}
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <Button text="Start now" />
                <a href="#" className="text-sm font-semibold text-pine mx-4">
                  <span className="underline underline-offset-2 decoration-lightOrange decoration-2 hover:text-pine/80">
                  
                 Online Tutoring
                  </span>{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-28 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] shadow-xl shadow-darkBlue/10 ring-1 ring-darkBlue/10 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-lightestBlue opacity-10 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
              aria-hidden="true"
            />
            <div className="-m-2 rounded-xl bg-lightBlue/10 p-1 ring-1 ring-inset ring-darkBlue/50 lg:m-0 lg:rounded-xl lg:p-3">
              <img
                src={HeroImg.src}
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[70rem] brightness-150 rounded-md shadow-2xl ring-1 ring-darkBlue/10"
              />
            </div>
            <hr className="my-6" />
            <OurClients />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-lightestBlue sm:h-32" />
      {/* <FreeTrial /> */}
    </div>
  );
}
