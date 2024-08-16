import Team1 from "../assets/images/team-1.jpg";
import Team2 from "../assets/images/team-2.jpg";
import Team3 from "../assets/images/team-3.jpg";
import Team4 from "../assets/images/team-4.jpg";
import { Link } from "react-router-dom";

export const Team = () => {
  return (
    <section className="bg-[#f8f8f8] py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="pb-14">
          <h4
            className="mb-4 text-3xl text-blue-500 text-center font-serif"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Team
          </h4>
          <p
            className="text-[#b8651d] text-center mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex gap-5 mx-28">
          <div
            className="mt-6 px-4"
            data-aos="fade-up-right"
            data-aos-delay="800"
          >
            <img
              className="transition ease-in-out hover:scale-110 duration-1000 rounded-2xl h-72"
              src={Team1}
              alt="image"
            />
            <h4 className="mt-4 mb-1 text-xl text-blue-500 text-center font-sans">
              Jhone Bi
            </h4>
            <p className="text-[#3a3a3a] italic text-center">
              Application Manager
            </p>
            <div className="flex gap-4 justify-center my-3">
              <div className="text-blue-500 text-2xl">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="-2 -2 24 24"
                  >
                    <g fill="currentColor">
                      <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
                      <path d="M15 6.947c-.368.16-.763.27-1.178.318c.424-.25.748-.646.902-1.117a4.16 4.16 0 0 1-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02c0 .158.018.312.053.46a5.854 5.854 0 0 1-4.228-2.11a1.982 1.982 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.076 2.076 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98a2.108 2.108 0 0 1-.927.034a2.049 2.049 0 0 0 1.916 1.403a4.156 4.156 0 0 1-2.548.864c-.165 0-.328-.01-.489-.028A5.863 5.863 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.063 4.063 0 0 0 15 6.947" />
                    </g>
                  </svg>
                </Link>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V156h20a12 12 0 0 0 0-24h-20v-20a12 12 0 0 1 12-12h16a12 12 0 0 0 0-24h-16a36 36 0 0 0-36 36v20H96a12 12 0 0 0 0 24h20v55.13a84 84 0 1 1 24 0"
                  />
                </svg>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="-2 -2 24 24"
                >
                  <g fill="currentColor">
                    <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z" />
                    <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
                  </g>
                </svg>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="mt-6 px-4"
            data-aos="fade-up-right"
            data-aos-delay="500"
          >
            <img
              className="transition ease-in-out hover:scale-110 duration-1000 rounded-2xl h-72"
              src={Team2}
              alt="image"
            />
            <h4 className="mt-4 mb-1 text-xl text-blue-500 text-center font-sans">
              Sani Awesome
            </h4>
            <p className="text-[#3a3a3a] italic text-center">Social Media</p>
            <div className="flex gap-4 justify-center my-3">
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="-2 -2 24 24"
                >
                  <g fill="currentColor">
                    <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
                    <path d="M15 6.947c-.368.16-.763.27-1.178.318c.424-.25.748-.646.902-1.117a4.16 4.16 0 0 1-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02c0 .158.018.312.053.46a5.854 5.854 0 0 1-4.228-2.11a1.982 1.982 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.076 2.076 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98a2.108 2.108 0 0 1-.927.034a2.049 2.049 0 0 0 1.916 1.403a4.156 4.156 0 0 1-2.548.864c-.165 0-.328-.01-.489-.028A5.863 5.863 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.063 4.063 0 0 0 15 6.947" />
                  </g>
                </svg>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V156h20a12 12 0 0 0 0-24h-20v-20a12 12 0 0 1 12-12h16a12 12 0 0 0 0-24h-16a36 36 0 0 0-36 36v20H96a12 12 0 0 0 0 24h20v55.13a84 84 0 1 1 24 0"
                  />
                </svg>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="-2 -2 24 24"
                >
                  <g fill="currentColor">
                    <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z" />
                    <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
                  </g>
                </svg>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="mt-6 px-4"
            data-aos="fade-up-left"
            data-aos-delay="500"
          >
            <img
              className="transition ease-in-out hover:scale-110 duration-1000 rounded-2xl h-72"
              src={Team3}
              alt="image"
            />
            <h4 className="mt-4 mb-1 text-xl text-blue-500 text-center font-sans">
              Andrio Willi
            </h4>
            <p className="text-[#3a3a3a] italic text-center">Content Writer</p>
            <div className="flex gap-4 justify-center my-3">
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="-2 -2 24 24"
                >
                  <g fill="currentColor">
                    <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
                    <path d="M15 6.947c-.368.16-.763.27-1.178.318c.424-.25.748-.646.902-1.117a4.16 4.16 0 0 1-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02c0 .158.018.312.053.46a5.854 5.854 0 0 1-4.228-2.11a1.982 1.982 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.076 2.076 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98a2.108 2.108 0 0 1-.927.034a2.049 2.049 0 0 0 1.916 1.403a4.156 4.156 0 0 1-2.548.864c-.165 0-.328-.01-.489-.028A5.863 5.863 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.063 4.063 0 0 0 15 6.947" />
                  </g>
                </svg>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V156h20a12 12 0 0 0 0-24h-20v-20a12 12 0 0 1 12-12h16a12 12 0 0 0 0-24h-16a36 36 0 0 0-36 36v20H96a12 12 0 0 0 0 24h20v55.13a84 84 0 1 1 24 0"
                  />
                </svg>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="-2 -2 24 24"
                >
                  <g fill="currentColor">
                    <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z" />
                    <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
                  </g>
                </svg>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="mt-6 px-4"
            data-aos="fade-up-left"
            data-aos-delay="800"
          >
            <img
              className="transition ease-in-out hover:scale-110 duration-1000 rounded-2xl h-72"
              src={Team4}
              alt=""
            />
            <h4 className="mt-4 mb-1 text-xl text-blue-500 text-center font-sans">
              Afa Jonson
            </h4>
            <p className="text-[#3a3a3a] italic text-center">
              Business Manager
            </p>
            <div className="flex gap-4 justify-center my-3">
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="-2 -2 24 24"
                >
                  <g fill="currentColor">
                    <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
                    <path d="M15 6.947c-.368.16-.763.27-1.178.318c.424-.25.748-.646.902-1.117a4.16 4.16 0 0 1-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02c0 .158.018.312.053.46a5.854 5.854 0 0 1-4.228-2.11a1.982 1.982 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.076 2.076 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98a2.108 2.108 0 0 1-.927.034a2.049 2.049 0 0 0 1.916 1.403a4.156 4.156 0 0 1-2.548.864c-.165 0-.328-.01-.489-.028A5.863 5.863 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.063 4.063 0 0 0 15 6.947" />
                  </g>
                </svg>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V156h20a12 12 0 0 0 0-24h-20v-20a12 12 0 0 1 12-12h16a12 12 0 0 0 0-24h-16a36 36 0 0 0-36 36v20H96a12 12 0 0 0 0 24h20v55.13a84 84 0 1 1 24 0"
                  />
                </svg>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="-2 -2 24 24"
                >
                  <g fill="currentColor">
                    <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z" />
                    <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
                  </g>
                </svg>
              </div>
              <div className="text-blue-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
