import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics } from "../data";

const Hero = () => {
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
          <span className="">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span>
          <> Shoes</>
        </h1>
        <p className="text-slate-gray text-lg leading-8 font-montserrat mt-6 mb-14 sm:max-w-sm ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" icon={arrowRight}></Button>
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
    </section>
  );
};

export default Hero;
