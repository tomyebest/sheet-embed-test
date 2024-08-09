import { useState, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Logo from '../images/ytc-transparent-logo.png';

const studentsDropdown = [
  { name: 'Student Info', href: '#student-info' },
  { name: 'Courses', href: '#courses' },
];

const tutorsDropdown = [
  { name: 'Tutor Info', href: '#tutor-info' },
  { name: 'Subjects', href: '#subjects' },
];

export default function AltNav() {
  return (
    <header className="bg-green-50/90 sticky top-0 z-50 sm:bg-green-50/90 sm:backdrop-blur justify-center border-b border-lime-800/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
        <div className="hidden sm:flex items-center">
          <a href="/">
            <span className="sr-only">Your Company</span>
            <img className="h-20 w-auto" src={Logo.src} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-x-4 sm:gap-x-6 lg:gap-x-12">
          <Popover className="relative">
          <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-zinc-950 hover:ring-2 hover:ring-lime-200 rounded-lg px-3 py-1.5 focus:outline-none">
             Students
            <ChevronDownIcon className="h-5 w-5 ml-2 text-gray-400" aria-hidden="true" />
        </Popover.Button>

            <Transition as={Fragment}>
              <Popover.Panel className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {studentsDropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 block px-4 py-2 text-sm"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
          <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-zinc-950 hover:ring-2 hover:ring-lime-200 rounded-lg px-3 py-1.5 focus:outline-none">
  Tutors
  <ChevronDownIcon className="h-5 w-5 ml-2 text-gray-400" aria-hidden="true" />
</Popover.Button>
            <Transition as={Fragment}>
              <Popover.Panel className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {tutorsDropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 block px-4 py-2 text-sm"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="/posts" className="text-sm font-semibold leading-6 text-zinc-950 hover:ring-2 hover:ring-lime-200 rounded-lg px-3 py-1.5 focus:outline-none">
            Info Hub
          </a>
        </div>
        <div className="flex items-center">
          <a href="#" className="rounded-md bg-lime-200 px-3 py-2 text-sm font-semibold text-zinc-950 shadow-sm hover:bg-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
