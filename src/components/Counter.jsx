import Client from "../assets/images/icons/happy-clients.svg";
import Project from "../assets/images/icons/complete-projects.svg";
import Suuport from "../assets/images/icons/hours-support.svg";

export const Counter = () => {
  return (
    <section className="">
      <div className="bg-[url(../../src/assets/images/hero-bg.png)] bg-top bg-fixed bg-cover relative">
        <div className="bg-black absolute bottom-0 top-0 left-0 right-0 z-10 opacity-60"></div>

        <div
          className="flex items-center justify-between px-16 py-36 max-w-screen-xl mx-80 z-20 relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <img
              className="mx-11 cursor-pointer transition ease-in-out hover:scale-110 duration-1000"
              src={Client}
              alt=""
            />
            <p className="text-blue-500 text-center text-3xl font-normal mb-2">
              232
            </p>
            <p className="text-blue-500 text-center text-3xl font-normal mb-2">
              Happy Clients
            </p>
            <p className="text-white">consequuntur quae diredo</p>
          </div>
          <div>
            <img
              className="mx-14 px-5 cursor-pointer transition ease-in-out hover:scale-110 duration-1000"
              src={Project}
              alt=""
            />
            <p className="text-blue-500 text-center text-3xl font-normal mb-2">
              521
            </p>
            <p className="text-blue-500 text-center text-3xl font-normal mb-2">
              Completed Projects
            </p>
            <p className="text-white text-center">adipisci atque quia aut</p>
          </div>
          <div>
            <img
              className="mx-11 px-5 cursor-pointer transition ease-in-out hover:scale-110 duration-1000"
              src={Suuport}
              alt=""
            />
            <p className="text-blue-500 text-center text-3xl font-normal mb-2">
              453
            </p>
            <p className="text-blue-500 text-center text-3xl font-normal mb-2">
              Hours Of Support
            </p>
            <p className="text-white text-center">aut commodi quaerat</p>
          </div>
        </div>
      </div>
    </section>
  );
};
