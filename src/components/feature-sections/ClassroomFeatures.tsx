
import { AdjustmentsHorizontalIcon, ClipboardDocumentCheckIcon, ComputerDesktopIcon, CursorArrowRaysIcon, GlobeAltIcon, PlayCircleIcon} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Advanced Learning Environment.',
    description: 'Our secure online classrooms provide an interactive, personalised learning experience for students.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Interactive Tools.',
    description:
      'Classrooms come with various tools, including an online whiteboard, drawing and text tools, a PDF creator, and voice and video conferencing.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Easy Access.',
    description: 'Students can access their online classroom by logging into our website and clicking a personalised link, no extra plugins or downloads needed.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Minimal Technical Requirements.',
    description: 'All students need for online lessons is a stable internet connection and a computer with audio and camera.',
    icon: GlobeAltIcon,
  },
];

export default function ClassroomFeatures() {

  return (
              <dl className="mt-6 max-w-xl space-y-2 text-base leading-7 text-darkBlue lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-sm text-darkBlue ">
                      <feature.icon className="absolute left-1 top-1.5 h-5 w-5 text-lightOrange text-sm" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-darkerBlue text-sm font-light">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            
  )
}
