import img1 from "../assets/images/icons/icon-1.svg";
import img2 from "../assets/images/icons/icon-2.svg";
import img3 from "../assets/images/icons/icon-3.svg";
import img4 from "../assets/images/icons/icon-4.svg";
import img5 from "../assets/images/icons/icon-5.svg";
import img6 from "../assets/images/icons/icon-6.svg";
import midimg from "../assets/images/features.jpg";

export const WhyChooseUs = () => {
  return (
    <section className="bg-white pt-14 pb-14">
      <div className="max-w-screen-xl mx-auto">
        <h4 className="mb-4 text-3xl text-blue-500 text-center font-serif">
          Why Choose Us
        </h4>
        <p className="text-[#b8651d] text-center">Lorem ipsum dolor sit amet</p>
        <div className="grid grid-cols-3 gap-5 py-14">
          <div className="scroll-px-3 text-right">
            <div
              className="flex gap-5 my-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <h4 className="mb-2 text-2xl">Experience</h4>
                <p className="mb-4">
                  Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <img
                  className="size-28 cursor-pointer transition ease-in-out hover:scale-110 duration-1000"
                  src={img1}
                  alt=""
                />
              </div>
            </div>
            <div
              className="flex gap-5 my-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <h4 className="mb-2 text-2xl">Products</h4>
                <p className="mb-4">
                  Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <img
                  className="size-28 cursor-pointer transition ease-in-out hover:scale-110 duration-1000"
                  src={img2}
                  alt=""
                />
              </div>
            </div>
            <div
              className="flex gap-5 my-5"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div>
                <h4 className="mb-2 text-2xl">Approach</h4>
                <p className="mb-4">
                  Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <img
                  className="size-28 cursor-pointer transition ease-in-out hover:scale-110 duration-1000"
                  src={img3}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="my-1">
            <img
              className="cursor-pointer transition ease-in-out hover:scale-105 duration-100"
              src={midimg}
              alt=""
            />
          </div>

          <div className="scroll-px-3 text-left">
            <div
              className="flex gap-5 my-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <img
                  className="size-28 cursor-pointer transition ease-in-out hover:scale-110 duration-1000"
                  src={img4}
                  alt=""
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <h4 className="mb-2 text-2xl">Experience</h4>
                <p className="mb-4">
                  Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div
              className="flex gap-5 my-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <img
                  className="size-28 cursor-pointer transition ease-in-out hover:scale-110 duration-1000"
                  src={img5}
                  alt=""
                />
              </div>
              <div>
                <h4 className="mb-2 text-2xl">Products</h4>
                <p className="mb-4">
                  Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div
              className="flex gap-5 my-5"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div>
                <img
                  className="size-28 cursor-pointer transition ease-in-out hover:scale-110 duration-1000"
                  src={img6}
                  alt=""
                />
              </div>
              <div>
                <h4 className="mb-2 text-2xl">Approach</h4>
                <p className="mb-4">
                  Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
