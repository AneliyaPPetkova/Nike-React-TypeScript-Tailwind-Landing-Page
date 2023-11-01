import { useEffect, useState } from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../data";
import { GalleryImage } from "../data/types";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState<GalleryImage>(shoes[0]);

  return (
    <section
      id="Home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="text-8xl font-palanquin font-bold mt-10 max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative xl:bg-white xl:whitespace-nowrap z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span>
          <> Shoes</>
        </h1>
        <p className="text-slate-gray text-lg leading-8 font-montserrat mt-6 mb-14 sm:max-w-sm ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" icon={arrowRight}></Button>
        {/* Statistics */}
        <div className="w-full flex flex-wrap justify-start items-start gap-16 mt-20">
          {statistics.map((statistic) => {
            return (
              <div key={statistic.label}>
                <p className="font-palanquin font-bold text-4xl">
                  {statistic.value}
                </p>
                <p className="font-montserrat text-slate-gray leading-7">
                  {statistic.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Gallery */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="relative"
        />
        <div className="absolute flex sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div
              key={`Gallery image ${index}`}
              className="border-2 border-coral-red rounded-xl cursor-pointer max-sm:flex-1 p-2 bg-card bg-center bg-cover"
            >
              <img src={shoe.thumbnailSrc} alt={shoe.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
