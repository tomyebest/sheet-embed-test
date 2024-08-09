import { CheckCircleIcon } from '@heroicons/react/20/solid';

// Accept `text` and `link` as props
export default function OrangeButton({ text = 'Button text', link = '#' }) {
  return (
    <>
      <a href={link}>
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-lightOrange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-darkOrange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {text}
          <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
      </a>
    </>
  );
}
