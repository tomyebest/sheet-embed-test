// "use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
// import Logo from "@/images/yes.png";
// import Image from "next/image";

import OptimiseLogo from "../../images/optimiselearning.png";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const tutoring = [
  // {
  //   name: "Hero sections",
  //   description:
  //     "Hey there! Click through to see the collection of hero sections we've been building.",
  //   href: "/hero-sections",
  //   icon: SquaresPlusIcon,
  // },
  // {
  //   name: "Features",
  //   description:
  //     "Click through to view sections that showcase the features of Optimise Learning.",
  //   href: "/features",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Social proof",
  //   description:
  //     "Here we have UI components showcasing the positive feedback we've received, as well as proof of our sizeable client base.",
  //   href: "/social-proof",
  //   icon: FingerPrintIcon,
  // },
  // {
  //   name: "Blog UI",
  //   description: "Here we have sections that showcase potential components to use within our blog pages.",
  //   href: "/blog-ui",
  //   icon: SquaresPlusIcon,
  // },
  {
    name: "item",
    description: "Lorem ipsum tutoring description",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "item", href: "#", icon: PlayCircleIcon },
  { name: "item", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "Ipsum", href: "#" },
  { name: "Ipsum", href: "#" },
  { name: "Ipsum", href: "#" },
  { name: "Ipsum", href: "#" },
  { name: "Ipsum", href: "#" },
];

function classNames(...classes: (false | null | undefined | string)[]): string {
  return classes.filter(Boolean).join(" ");
}
export default function AltNav() {
  const [loremPopoverOpen, setLoremPopoverOpen] = useState(false);
  const [tutoringPopoverOpen, setTutoringPopoverOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-darkBlue sticky top-0 z-50 border-b border-lightOrange">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              className="drop-shadow-md"
              width={220}
              height={100}
              src={OptimiseLogo.src}
              alt=""
            />
            {/* logo */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-lightBlue"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-lightestBlue hover:text-lightestOrange"
              onMouseEnter={() => setTutoringPopoverOpen(true)}
              onMouseLeave={() => setTutoringPopoverOpen(false)}
            >
              heading
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-lightOrange"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              show={tutoringPopoverOpen}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                onMouseEnter={() => setTutoringPopoverOpen(true)}
                onMouseLeave={() => setTutoringPopoverOpen(false)}
              >
                <div className="p-4">
                  {tutoring.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-darkBlue group-hover:text-darkOrange"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-darkBlue"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-darkBlue">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-darkBlue bg-lightestOrange hover:text-lightestOrange">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-lightOrange"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="/tutoring"
            className="text-sm font-semibold leading-6 text-lightestBlue hover:text-lightestOrange"
          >
            heading
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-lightestBlue hover:text-lightestOrange"
          >
            heading
          </a>
          <a
            href="/info-page/"
            className="text-sm font-semibold leading-6 text-lightestBlue hover:text-lightestOrange"
          >
            heading
          </a>

          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-lightestBlue hover:text-lightestOrange"
              onMouseEnter={() => setLoremPopoverOpen(true)}
              onMouseLeave={() => setLoremPopoverOpen(false)}
            >
              heading
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-lightOrange"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              show={loremPopoverOpen}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute -left-8 top-full z-50 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5"
                onMouseEnter={() => setLoremPopoverOpen(true)}
                onMouseLeave={() => setLoremPopoverOpen(false)}
              >
                {company.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img
                className="drop-shadow-md"
                width={250}
                height={100}
                src={OptimiseLogo.src}
                alt=""
              /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }:any) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Tutoring
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...tutoring, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Why YTC?
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Insights
                </a>

                <Disclosure as="div" className="-mx-3">
                  {({ open }:any) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        heading
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {company.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
