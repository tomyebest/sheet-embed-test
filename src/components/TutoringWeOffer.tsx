import PrimarySchool from '../images/primary.webp'

const innerContent = [
  {
    heading2: "Learning plans to fit all needs",
    description: "Our unique approach of planning individual lessons for every student, allowing students to learn at their own pace, teaching curriculum content explicitly and using <brain researched teaching strategies effectively accelerates student learning."

  },
]

const tutoringCategories = [
  {
    yearLevel: "Primary School Students",
    subjects: 'English, Mathematics, NAPLAN',
    image: PrimarySchool,
    link: ""
  },
  {
    yearLevel: "Secondary School Students",
    subjects: 'English, Mathematics, Sciences, Humanities',
    image:PrimarySchool,
    link:"/bbc"

  },
  {
    yearLevel: "Gifted & Talented Students",
    subjects: 'Bespoke course plans available',
    image: PrimarySchool,
    link:""

  },
  {
    yearLevel: "Student Athletes",
    subjects: 'Bespoke course plans available',
    image: PrimarySchool,
    link:""

  },
  {
    yearLevel: "Home-Schooled Students",
    subjects: 'Bespoke course plans available',
    image: PrimarySchool,
    link:""

  },
  {
    yearLevel: "Learning Difficulties",
    subjects: 'Bespoke course plans available',
    image: PrimarySchool,
    link:""

  },
]

export default function TutoringWeOffer() {
  return (
    <div className="bg-lightestOrange py-16 sm:py-16 border-b border-darkBlue/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Mapping innerContent */}
      {innerContent.map((content) => (
          <div className="mx-auto max-w-full lg:mx-0">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-darkBlue sm:text-4xl">Learning plans to <span className="underline decoration-amber-300 underline-offset-4 decoration-wavy"> fit all needs.</span></h2>
            <p className="mt-6 mb-10 text-lg font-light leading-6 text-darkerBlue">
            Our unique approach of planning individual lessons for every student, allowing students to learn at their own pace, teaching curriculum content explicitly and using <a className="font-semibold underline underline-offset-2 decoration-lightOrange" href="/">brain researched teaching strategies</a> effectively accelerates student learning.
            </p>
          </div>
        ))}
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {/* Mapping tutoringCategories */}
          {tutoringCategories.map((tutoring) => (
          <a className="hover:cursor-crosshair hover:opacity-80" href={tutoring.link}><li key={tutoring.yearLevel}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover border-2 border-darkBlue shadow-md" src={tutoring.image.src} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Tutoring for <span className="underline underline-offset-2 decoration-lightOrange">{tutoring.yearLevel}</span></h3>
              <p className="text-base leading-7 text-gray-600">{tutoring.subjects}</p>
            {/*  <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={tutoring.twitterUrl} className="text-gray-400 hover:text-gray-500">
                  </a>
                </li>
                <li>
                  <a href={tutoring.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    
                  </a>
                </li>
          </ul> */}
            </li></a>   
          ))}
        </ul>
      </div>
    </div>
  );
}
