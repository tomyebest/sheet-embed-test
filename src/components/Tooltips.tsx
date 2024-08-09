import {ClipboardDocumentCheckIcon, PlayCircleIcon} from '@heroicons/react/24/outline'


const orangePill = "Watch Example Lesson"
const aboveh1 = "Mapped to Australian Curriculum"

export default function Tooltips() {

    return (
        <div className="max-w-lg">
            <div className='flex align-center justify-start'>
              <span className="inline-flex items-center justify-center space-x-2 text-sm font-semibold text-darkBlue underline underline-offset-2 decoration-lightOrange mr-6">
                <ClipboardDocumentCheckIcon className="text-lightOrange h-5 w-5 mr-1" /> {aboveh1}
                </span>
                <a href="https://www.youtube.com/watch?v=3DXXMYh5B1M" target="_blank" rel='nofollow' className="">
                <span className="rounded-lg bg-lightOrange/30 hover:bg-lightOrange/20 px-3 py-1 text-xs font-normal leading-6 text-darkBlue ring-1 ring-inset ring-lightOrange flex justify-center items-center">
                <PlayCircleIcon className="text-darkBlue h-4 w-4 mr-1" /> {orangePill}
                </span>
                </a>
                </div>
                </div>
            )
            }