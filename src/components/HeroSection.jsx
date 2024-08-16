/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export const HeroSection = ({ contactRef, serviceRef }) => {
  return (
    <section className="relative bg-slate-500">
      <div className="bg-[url(../../src/assets/images/hero-bg.png)] h-screen bg-center bg-fixed">
        <div className="h-full container flex flex-col items-center lg:items-start justify-center p-0 lg:pl-[48%] pt-[5%] lg:pt-[8%] relative z-10">
          <h2
            className="text-lg lg:text-5xl font-semibold mb-5 text-white"
            data-aos="fade-up"
          >
            Delivering Superior Services
            <span
              className="text-[#025add]"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              IT Solutions.
            </span>
          </h2>
          <p
            className="text-white mb-12 font-normal pr-5 pl-5 lg:pl-0 lg:pr-32"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            You can easily change any design to your own. It is also highly
            customizable SEO friendly template.
          </p>
          <div
            className="flex gap-5 my-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a href="https://x.com/?lang=en">
              <svg
                className="text-[#025add]"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 5.8a8.49 8.49 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.21 8.21 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a3.93 3.93 0 0 1-1.1.17a4.9 4.9 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12"
                />
              </svg>
            </a>
            <div>
              <Link to="https://www.facebook.com/">
                <svg
                  className="text-[#025add]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
                  />
                </svg>
              </Link>
            </div>
            <div>
              <Link to="https://www.linkedin.com/feed/">
                <svg
                  className="text-[#025add]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM8 10a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m3-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.66c.305-.344.82-.748 1.393-.993c.333-.142.834-.2 1.182-.09a.55.55 0 0 1 .293.188c.052.07.132.226.132.555v4a1 1 0 0 0 2 0v-4c0-.67-.17-1.266-.524-1.744a2.54 2.54 0 0 0-1.301-.907c-.902-.283-1.901-.126-2.568.16a6 6 0 0 0-.623.312A1 1 0 0 0 11 9M8 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            <div>
              <Link to="https://www.instagram.com/">
                <svg
                  className="text-[#025add]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 7.9a4.1 4.1 0 1 0 4.1 4.1A4.09 4.09 0 0 0 12 7.9m0 6.77A2.67 2.67 0 1 1 14.67 12A2.67 2.67 0 0 1 12 14.67m5.23-6.94a1 1 0 1 1-1-1a1 1 0 0 1 1 1m2.71 1a4.7 4.7 0 0 0-1.29-3.35a4.7 4.7 0 0 0-3.35-1.32C14 4 10 4 8.7 4.06a4.73 4.73 0 0 0-3.35 1.29A4.7 4.7 0 0 0 4.06 8.7C4 10 4 14 4.06 15.3a4.7 4.7 0 0 0 1.29 3.35a4.73 4.73 0 0 0 3.35 1.29c1.32.08 5.28.08 6.6 0a4.7 4.7 0 0 0 3.35-1.29a4.7 4.7 0 0 0 1.29-3.35c.06-1.3.06-5.3 0-6.6Zm-1.7 8a2.7 2.7 0 0 1-1.52 1.52a18 18 0 0 1-4.72.32a18 18 0 0 1-4.71-.32a2.7 2.7 0 0 1-1.52-1.52c-.42-1.06-.33-3.56-.33-4.72s-.09-3.67.33-4.72a2.65 2.65 0 0 1 1.52-1.53A18 18 0 0 1 12 5.44a18 18 0 0 1 4.72.32a2.7 2.7 0 0 1 1.52 1.52c.42 1.06.32 3.56.32 4.72s.1 3.67-.32 4.72Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              className="rounded-[40px] bg-[#025add] text-white py-3 px-5 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="800"
              onClick={() => {
                contactRef?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get Quotes
            </button>

            <button
              className="rounded-[40px] bg-[#025add] text-white py-3 px-5 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="1000"
              onClick={() => {
                serviceRef?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
