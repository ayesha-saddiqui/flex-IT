/* eslint-disable react/prop-types */
import image01 from "../assets/images/icons/service-design.svg";
import image02 from "../assets/images/icons/service-hosting.svg";
import image03 from "../assets/images/icons/service-social.svg";
import image04 from "../assets/images/icons/service-seo.svg";
import image05 from "../assets/images/icons/service-cloud.svg";
import image06 from "../assets/images/icons/service-secure.svg";

export const Services = ({ serviceRef }) => {
  return (
    <section className="bg-white pt-14 pb-14" ref={serviceRef}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <div
            className="mt-6 pt-3 pb-3 shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="py-5 px-7 flex flex-col items-center transition ease-in-out hover:scale-105 duration-1000 cursor-pointer">
              <div className="pt-2 mb-5">
                <img className="size-20" src={image01} alt="" />
              </div>
              <h4 className="mb-4 text-3xl text-blue-500 text-center font-serif">
                Application Design
              </h4>
              <p className="mb-4 text-lg opacity-45 text-center">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div
            className="mt-6 pt-3 pb-3 shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="py-5 px-7 flex flex-col items-center transition ease-in-out hover:scale-105 duration-1000 cursor-pointer">
              <div className="pt-2 mb-5">
                <img className="size-20" src={image02} alt="" />
              </div>
              <h4 className="mb-4 text-3xl text-blue-500 text-center font-serif">
                Web Hosting
              </h4>
              <p className="mb-4 text-lg opacity-45 text-center">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div
            className="mt-6 pt-3 pb-3 shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="py-5 px-7 flex flex-col items-center transition ease-in-out hover:scale-105 duration-1000 cursor-pointer">
              <div className="pt-2 mb-5">
                <img className="size-20" src={image03} alt="" />
              </div>
              <h4 className="mb-4 text-3xl text-blue-500 text-center font-serif">
                Social Media
              </h4>
              <p className="mb-4 text-lg opacity-45 text-center">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div
            className="mt-6 pt-3 pb-3 shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="py-5 px-7 flex flex-col items-center transition ease-in-out hover:scale-105 duration-1000 cursor-pointer">
              <div className="pt-2 mb-5">
                <img className="size-20" src={image04} alt="" />
              </div>
              <h4 className="mb-4 text-3xl text-blue-500 text-center font-serif">
                SEO Optimization
              </h4>
              <p className="mb-4 text-lg opacity-45 text-center">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div
            className="mt-6 pt-3 pb-3 shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="py-5 px-7 flex flex-col items-center transition ease-in-out hover:scale-105 duration-1000 cursor-pointer">
              <div className="pt-2 mb-5">
                <img className="size-20" src={image05} alt="" />
              </div>
              <h4 className="mb-4 text-3xl text-blue-500 text-center font-serif">
                Cloud Server
              </h4>
              <p className="mb-4 text-lg opacity-45 text-center">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div
            className="mt-6 pt-3 pb-3 shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="py-5 px-7 flex flex-col items-center transition ease-in-out hover:scale-105 duration-1000 cursor-pointer">
              <div className="pt-2 mb-5">
                <img className="size-20" src={image06} alt="" />
              </div>
              <h4 className="mb-4 text-3xl text-blue-500 text-center font-serif">
                Data Security
              </h4>
              <p className="mb-4 text-lg opacity-50 text-center">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
