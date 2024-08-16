import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[url(../../src/assets/images/hero-bg.png)] bg-top bg-fixed bg-cover relative">
        <div className="bg-black absolute bottom-0 top-0 left-0 right-0 z-10 opacity-60"></div>
        <div className="max-w-screen-xl mx-auto relative z-20">
          <div className="py-28">
            <div className="flex gap-5">
              <div className="px-3 w-1/3">
                <img
                  className="max-w-52 px-3 mb-8 cursor-pointer transition ease-in-out hover:scale-110 duration-1000"
                  src={logo}
                  alt="Image"
                />
                <div className="font-normal text-base text-white mb-4 leading-7">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="text-blue-600 text-xl mb-5">Follow us</div>
                <div className="flex gap-3 text-xl">
                  <div className="text-white">
                    <Link to="https://x.com/?lang=en">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="text-white">
                    <Link to="https://www.facebook.com/">
                      <svg
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
                  <div className="text-white">
                    <Link to="https://www.instagram.com/">
                      <svg
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
                  <div className="text-white">
                    <Link to="https://www.linkedin.com/feed/">
                      <svg
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
                </div>
              </div>

              <div className="px-3 w-1/6">
                <h3 className="text-blue-600 mb-8 font-normal text-xl">
                  Services
                </h3>
                <ul className="text-white font-serif cursor-pointer">
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/services"> App Development</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/services"> Cloud Services</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/services"> Domain Adn Hosting</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/services"> Seo Optimization</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/services"> Degital Marketing</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/services"> Search Engine</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/services"> Domain & Hosting</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/services"> Email Marketing</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/services"> Degital Marketing</Link>
                  </li>
                </ul>
              </div>

              <div className="px-3 w-1/6">
                <h3 className="text-blue-600 mb-8 font-normal text-xl">
                  Information
                </h3>
                <ul className="text-white font-serif cursor-pointer">
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/team">Team</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/faq">FAQs</Link>
                  </li>

                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/blogDetail">Blog Detail</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">Coming Soon</li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/privacy">Terms & Conditions</Link>
                  </li>
                  <li className="mb-3 hover:text-blue-500">
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>

              <div className="px-3 w-1/3">
                <h3 className="text-blue-600 mb-8 font-normal text-xl">
                  Contact
                </h3>
                <div className="flex justify-start mb-3">
                  <div className="text-white text-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M12 17s-4-3-4-6c0-2.5 2-4 4-4s4 1.5 4 4c0 3-4 6-4 6Zm0-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                      />
                    </svg>
                  </div>
                  <div className="text-white">
                    101 West Town , PBO 12345, United States
                  </div>
                </div>
                <div className="flex mb-3">
                  <div className="text-white text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14.566 19.152A18.466 18.466 0 0 1 5 9.86v-.002l-.519-1.14a3.5 3.5 0 0 1 1.237-4.355l1.333-.894a1 1 0 0 1 1.335.203l2.43 3.012a1 1 0 0 1-.183 1.431l-1.257.932a12.14 12.14 0 0 0 5.511 5.51l.932-1.256a1 1 0 0 1 1.431-.183l3.012 2.43a1 1 0 0 1 .203 1.335l-.888 1.324a3.5 3.5 0 0 1-4.331 1.247z"
                      />
                      <path
                        fill="currentColor"
                        d="M13.75 9a.75.75 0 0 0 .75.75h3.828a.75.75 0 0 0 0-1.5h-2.017l3.159-3.159a.75.75 0 1 0-1.061-1.06L15.25 7.188V5.172a.75.75 0 0 0-1.5 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-white">+1 1234 56 789</div>
                </div>
                <div className="flex mb-3">
                  <div className="text-white text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                      />
                    </svg>
                  </div>
                  <div className="text-white">contact@example.com</div>
                </div>
                <h3 className="text-blue-600 mb-4 font-normal text-xl">
                  Newsletter
                </h3>
                <p className="text-white mb-3 text-base">
                  Dont miss to subscribe to our new feeds, kindly fill the form
                  below.
                </p>
                <div className="relative overflow-hidden rounded-[50px]">
                  <input
                    className="w-full py-4 px-7 bg-[#e4e4e4]"
                    type="text"
                    placeholder="Email Address"
                  />
                  <button className="text-blue-500 absolute right-[1px] top-[4px] cursor-pointer">
                    <svg
                      className="text-5xl"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8M7 14V9H2l10-5z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-white text-center pt-5">
              Technoit © 2024 - Designed by
              <span
                className="text-blue-700 text-2xl cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Ayesha Saddique
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
