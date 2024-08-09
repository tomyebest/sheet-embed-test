import Facebook from '../../images/facebook-logo.png'


const featuredTestimonial = {
    body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
    author: {
      name: 'Brenna Goyette',
      title: 'brennagoyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
      logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
    },
  }
  const testimonials = [
    [
      [
        {
          body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
          source: Facebook,
          ref: {
            name: 'Leslie Alexander',
            title: 'lesliealexander',
            
          },
        },
      ],
      [
        {
          body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
          source: Facebook,
          ref: {
            name: 'Lindsay Walton',
            title: 'lindsaywalton',
          },
        },
      ],
    ],
    
    [
      [
        {
          body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
          source: Facebook,
          ref: {
            name: 'Tom Cook',
            title: 'Parent, Hogwarts',
                     },
        },
      ],
      
      [
        {
          body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
          source: Facebook,
          ref: {
            name: 'Leonard Krasner',
            title: 'leonardkrasner',
                  },
        },
      ],
    ],
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Testimonials() {
    return (
      <div className="relative border-b-2 border-darkBlue isolate pt-16 pb-8 sm:pt-16 sm:pb-8 bg-sky-50/40">
       
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
         
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-lightOrange">Student/Parent Reviews</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-darkBlue sm:text-4xl">
              Optimised student achievements, <span className="line-through">Australia-wide</span> worldwide.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-darkerBlue sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="border border-darkBluerounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-darkBlue/10 px-6 py-4 sm:flex-nowrap">
               
                <div className="flex-auto">
                  <div className="font-semibold">{featuredTestimonial.author.name}</div>
                  <div className="text-darkBlue">{`${featuredTestimonial.author.title}`}</div>
                </div>
                <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8'
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.ref.title}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-darkBlue/5 border border-darkBlue "
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4 border-t border-darkBlue/10">
                          <div className="flex justify-between items-center w-full mt-2">
                            <div className="mt-2">
                            <div className="font-semibold">{testimonial.ref.name}</div>
                            <div className="text-gray-600">{`${testimonial.ref.title}`}</div>
                            </div>
                           <div><img className="h-10 w-auto flex-none " src={testimonial.source.src} alt="" /></div> 
                          </div>

                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  