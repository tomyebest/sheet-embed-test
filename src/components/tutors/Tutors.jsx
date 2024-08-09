// src/components/Tutors.jsx

import React from 'react';

function Tutors() {
  const benefits = [
    "Tutors keep a lot more of the money they earn for tutoring lessons.",
    "Tutors can effortlessly gain and oversee students.",
    "Use Your Tutoring Co's secure online classrooms for their lessons.",
    "Have access to a supportive community of tutors and administration staff.",
    "Learn how to plan and deliver lessons for optimal results.",
    "Have access to Your Tutoring Co's extensive library of teaching resources.",
    "Tutors can focus on their lessons, instead of finding students and chasing lesson payments."
  ];

  const operationalCostNote = (
    <p className="mt-6 text-md leading-7 text-zinc-800">
      To cover their operational costs, Your Tutoring Co charges tutors a fee of 25% for each lesson they tutor.{' '}
      <span className="font-semibold underline underline-offset-2 decoration-lime-200 decoration-2">
        This arrangement results in significantly higher earning potential for tutors
      </span>{' '}
      with Your Tutoring Co, as they receive 75% of their tutoring fee, as opposed to an average of 31% with other tutoring companies.
      That is approximately 44% more earning potential for tutors, tutoring with Your Tutoring Co!
    </p>
  );

  const calculationNote = (
    <p className="mt-6 text-md leading-7 text-zinc-800">
      <span className="font-semibold underline underline-offset-2 decoration-lime-200 decoration-2">
        How did we calculate this?
      </span>{' '}
      Many Australian tutoring companies charge students $80 plus GST for a 60-minute individual lesson. However, the tutors who
      provide these lessons for tutoring companies often receive only $25 in compensation for tutoring a 60-minute lesson. This amounts
      to approximately 31% of the student's payment.
    </p>
  );

  const finalNote = (
    <p className="mt-8 mb-6 font-semibold">
      With Your Tutoring Co, tutors contribute 25% of their lesson fee which in the case of an $80 lesson, tutors retain $60, which
      represents 75% of the student's payment.{' '}
      <span className="underline underline-offset-2 decoration-lime-200 decoration-2">
        Why would you tutor with anyone else?
      </span>
    </p>
  );

  return (
    <div id="tutors-why-join" className="bg-white px-6 py-32 lg:px-8 border-b border-lime-800/10">
      <div className="mx-auto max-w-5xl text-base leading-7 text-zinc-800">
        <p className="text-base font-semibold leading-7 text-lime-600/80">For Tutors</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Joining Your Tutoring Co provides tutors with the opportunity to start and build their own tutoring business.
        </h1>
        <p className="mt-6 text-xl leading-8">
          Tutors are able to tutor where they want, when they want and how often they want. At Your Tutoring Co, tutors are also able to
          set their own lesson prices.
        </p>
        <div className="mt-8 max-w-5xl">
          <h3 className="mt-1 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">By joining Your Tutoring Co:</h3>
          <ul role="list" className="mt-6 max-w-4xl space-y-3 text-zinc-800">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-x-3">
                <svg className="mt-1 h-5 w-5 flex-none text-lime-600/80" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          {operationalCostNote}
          {calculationNote}
          <hr className="bg-lime-800 my-6" />
          {finalNote}
          <a href="#" className="rounded-md bg-lime-200 px-3.5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm hover:bg-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tutors;
