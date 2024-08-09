import { CheckCircleIcon } from '@heroicons/react/24/outline';

const benefits = [
  'Mathematics',
  'Science',
  'English',
  'Gifted & Talented',
  'Student Athletes',
  'Bespoke Programs',
];

export default function Benefits() {
  return (
    <ul
      role="list"
      className="grid grid-cols-3 gap-2 text-sm leading-6 text-darkBlue w-full"
    >
      {benefits.map((benefit) => (
        <li key={benefit} className="flex items-center gap-x-2">
          <CheckCircleIcon className="h-5 w-5 text-lightOrange" aria-hidden="true" /> 
          {benefit}
        </li>
      ))}
    </ul>
  );
}
