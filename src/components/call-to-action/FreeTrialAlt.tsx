import React from 'react';
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

/* Frontmatter */

const content = {
  heading: "Request a free trial lesson",
  description: "Our free trial lessons provide students and their family with the opportunity to meet us, see our online classroom and experience how our online lessons work.",
  button: "Book Now"
}

/* ----------- */

export default function FreeTrialAlt() {
  return (
    <div className="bg-midBlue relative isolate overflow-hidden py-10 sm:py-10 border-b border-lightOrange">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-16">
          <div className="space-y-2 lg:pr-16">
            <h2 className="text-2xl font-bold tracking-tight sm:text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-orange-300">
              {content.heading}
            </h2>
            <p className="text-sm font-light leading-6 text-lightestBlue">
              {content.description}
            </p>
          </div>
          <form className="mt-2 sm:mt-2">
          <p className="text-sm mb-4 font-semibold leading-6 text-lightestBlue underline underline-offset-2 decoration-lightOrange">
            Fill in your details below
            </p>
            <div className="flex gap-3">
             <input
                type="text"
                name="name"
                id="full-name"
                autoComplete="name"
                required
                className="flex-1 px-4 py-2 border border-lightOrange/90 text-sm rounded-md bg-darkerBlue/30 text-white placeholder-lightestBlue focus:ring-2 focus:ring-offset-4 focus:ring-lightOrange"
                placeholder="Your name"
  /> 
              <input
                type="email"
                name="email"
                id="email-address"
                autoComplete="email"
                required
                className="flex-1 px-4 py-2 border border-lightOrange/90 text-sm rounded-md bg-darkerBlue/30 text-white placeholder-lightestBlue focus:ring-2 focus:ring-offset-2 focus:ring-lightOrange"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="text-darkBlue bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {content.button}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
