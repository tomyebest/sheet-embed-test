export default function OurClients() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-4 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-4 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <p className="text-sm text-darkBlue font-semibold underline underline-offset-2 decoration-lightOrange">
            Trusted by:{" "}
          </p>
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://optimiselearning.com/wp-content/uploads/2020/12/optimise-logo-icon-10.png"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://optimiselearning.com/wp-content/uploads/2020/12/optimise-logo-icon-10.png"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://optimiselearning.com/wp-content/uploads/2020/12/optimise-logo-icon-10.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://optimiselearning.com/wp-content/uploads/2020/12/optimise-logo-icon-10.png"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
