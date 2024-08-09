import GradientButton from "../core/GradientButton";
import Button from "../core/GradientButton";

interface SubHeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  insightsHref: string;
}

const SubPageHero: React.FC<SubHeroProps> = ({
  title,
  description,
  buttonText,
  buttonHref,
  insightsHref,
}) => {
  return (
    <div className="relative isolate overflow-hidden bg-pine py-24 sm:py-32">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-limelight to-forestgreen opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-limelight to-forestgreen opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-14 lg:px-8">
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-darkBlue sm:text-5xl lg:col-span-2 xl:col-auto">
          {title}
        </h1>
        <div className="max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <p className="text-md font-lighter leading-6 text-darkBlue/90">
            {description}
          </p>
          <hr className="bg-darkBlue/50 mt-4 mb-4" />
          <div className="flex items-center">
            <Button text={buttonText} link={buttonHref}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPageHero;