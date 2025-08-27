import { ReactNode } from "react";

interface HeroProps {
  children?: ReactNode;
  className?: string;
}

function Hero({ className }: HeroProps) {
  return (
    <div className="max-w-[1440px] lg:mx-8 lg:grid lg:grid-cols-[500px_1fr] lg:grid-rows-[250px_250px] lg:gap-x-8 xl:grid-cols-[550px_1fr] 2xl:mx-auto">
      {/* Headings */}
      <div className="text-center lg:mb-4 lg:self-end lg:text-left">
        <p className="gradient-text text-[40px] leading-12 font-extrabold text-pretty sm:text-5xl lg:text-[68px] lg:leading-18 lg:tracking-tighter xl:text-7xl">
          Roll On Quality
        </p>
        <h2 className="font-zinc-600 font-semibold text-pretty sm:text-xl xl:text-3xl">
          Edmonton's Most Trusted Residential Painting Contractors
        </h2>
      </div>

      {/* Hero Image */}
      <div className="mt-4 mb-8 px-4 sm:mt-6 lg:row-span-3">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,h_600,q_auto/v1756253546/roll-on-painting/Downtown-Edmonton-Condo-Living-Room-Before-And-After"
          />

          <source
            media="(min-width: 640px)"
            srcSet="https://res.cloudinary.com/jimbits/image/upload/v1756171559/roll-on-painting/condo-renovation-room-being-painted-blue-wall-ladder-paint-bucket.avif"
            type="image/avif"
          />

          <img
            src="https://res.cloudinary.com/jimbits/image/upload/v1756171559/roll-on-painting/condo-renovation-room-being-painted-blue-wall-ladder-paint-bucket.avif"
            alt="Painted living room with orange trim and white walls in Edmonton home renovation"
            loading="lazy"
            className="h-auto w-full rounded-md object-cover lg:h-full"
          />
        </picture>
      </div>

      {/* Call To Action */}
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center md:flex-row md:justify-evenly lg:justify-between lg:self-start xl:justify-start">
        <div className=" ">
          <h3 className="mt-2 text-xl font-extrabold text-red-600 lg:text-base lg:leading-4">
            Transform Your Home
            <span className="block"> Call for Free Quote</span>
          </h3>
          <button
            type="button"
            className="my-2 w-full rounded-lg border border-rose-500 px-6 py-3 font-bold text-rose-500 lg:text-sm xl:text-base"
          >
            Call Now (780) 722-5555
          </button>
        </div>

        <div className=" ">
          <h3 className="mt-2 text-xl font-extrabold text-indigo-600 lg:text-base lg:leading-4">
            Schedule Your Free
            <span className="block"> Painting Quote Online</span>
          </h3>
          <button
            type="button"
            className="my-2 w-full rounded-lg border border-indigo-600 px-6 py-3 font-bold text-indigo-600 lg:text-sm xl:text-base"
          >
            Book Online Quick Response
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
