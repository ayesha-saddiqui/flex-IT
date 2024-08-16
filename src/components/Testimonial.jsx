import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import star from "../assets/images/icons/star.svg";

import testimonial1 from "../assets/images/testimonial-1.jpg";
import testimonial2 from "../assets/images/testimonial-2.jpg";
import testimonial3 from "../assets/images/testimonial-3.jpg";
import testimonial4 from "../assets/images/testimonial-4.jpg";

export const Testimonial = () => {
  return (
    <section className="bg-white pt-14 pb-14">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <h4
            className="mb-4 text-3xl text-blue-500 text-center font-serif"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Testimonials
          </h4>
          <p
            className="text-[#b8651d] text-center mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div
          className="testimonial_slider h-full w-full"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Swiper
            loop={true}
            spaceBetween={40}
            slidesPerView={3}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="px-9 mt-6 pt-3 pb-3 shadow-xl">
                <div className="flex gap-3">
                  <div>
                    <img
                      className="rounded-full max-w-28 transition ease-in-out hover:scale-125 duration-1000"
                      src={testimonial1}
                      alt=""
                    />
                  </div>
                  <div className="my-5">
                    <h3 className="mb-1 mt-2 text-3xl text-blue-500 text-center font-serif font-thin">
                      Jhone Doe
                    </h3>
                    <h4 className="text-sm text-[#999]">CFO</h4>
                    <div className="flex my-3">
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-[#3a3a3a] italic">
                  <svg
                    className="text-lg text-blue-500 inline-block mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3m7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"
                    />
                  </svg>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam.
                  <svg
                    className="text-lg text-blue-500 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M11 9v7h7V9c0-2.2-1.8-5-4-5h-2l1 2s2 0 2 3zM2 9v7h7V9c0-2.2-1.8-5-4-5H3l1 2s2 0 2 3z"
                    />
                  </svg>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-9 mt-6 pt-3 pb-3 shadow-xl">
                <div className="flex gap-3">
                  <div>
                    <img
                      className="rounded-full max-w-28 transition ease-in-out hover:scale-125 duration-1000"
                      src={testimonial2}
                      alt=""
                    />
                  </div>
                  <div className="my-5">
                    <h3 className="mb-1 mt-2 text-3xl text-blue-500 text-center font-serif font-thin">
                      Afa Rose
                    </h3>
                    <h4 className="text-sm text-[#999]">Web Designer</h4>
                    <div className="flex my-3">
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-[#3a3a3a] italic">
                  <svg
                    className="text-lg text-blue-500 inline-block mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3m7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"
                    />
                  </svg>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam.
                  <svg
                    className="text-lg text-blue-500 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M11 9v7h7V9c0-2.2-1.8-5-4-5h-2l1 2s2 0 2 3zM2 9v7h7V9c0-2.2-1.8-5-4-5H3l1 2s2 0 2 3z"
                    />
                  </svg>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-9 mt-6 pt-3 pb-3 shadow-xl">
                <div className="flex gap-3">
                  <div>
                    <img
                      className="rounded-full max-w-28 transition ease-in-out hover:scale-125 duration-1000"
                      src={testimonial3}
                      alt=""
                    />
                  </div>
                  <div className="my-5">
                    <h3 className="mb-1 mt-2 text-3xl text-blue-500 text-center font-serif font-thin">
                      Keena Lara
                    </h3>
                    <h4 className="text-sm text-[#999]">Web Designer</h4>
                    <div className="flex my-3">
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-[#3a3a3a] italic">
                  <svg
                    className="text-lg text-blue-500 inline-block mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3m7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"
                    />
                  </svg>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam.
                  <svg
                    className="text-lg text-blue-500 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M11 9v7h7V9c0-2.2-1.8-5-4-5h-2l1 2s2 0 2 3zM2 9v7h7V9c0-2.2-1.8-5-4-5H3l1 2s2 0 2 3z"
                    />
                  </svg>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-9 mt-6 pt-3 pb-3 shadow-xl">
                <div className="flex gap-3">
                  <div>
                    <img
                      className="rounded-full max-w-28 transition ease-in-out hover:scale-125 duration-1000"
                      src={testimonial4}
                      alt=""
                    />
                  </div>
                  <div className="my-5">
                    <h3 className="mb-1 mt-2 text-3xl text-blue-500 text-center font-serif font-thin">
                      Fizzi Brandon
                    </h3>
                    <h4 className="text-sm text-[#999]">Web Designer</h4>
                    <div className="flex my-3">
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                      <img src={star} alt="image" />
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-[#3a3a3a] italic">
                  <svg
                    className="text-lg text-blue-500 inline-block mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3m7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"
                    />
                  </svg>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam.
                  <svg
                    className="text-lg text-blue-500 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M11 9v7h7V9c0-2.2-1.8-5-4-5h-2l1 2s2 0 2 3zM2 9v7h7V9c0-2.2-1.8-5-4-5H3l1 2s2 0 2 3z"
                    />
                  </svg>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
