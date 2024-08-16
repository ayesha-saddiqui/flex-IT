import { blogData } from "../data/blog.data";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <section className="bg-[#f8f8f8] pb-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="pb-14">
          <h4
            className="mb-5 text-3xl text-blue-500 text-center font-serif pt-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Blogs
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
          className="grid grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {blogData.map((item, index) => {
            return (
              <div className="mt-6 px-3" key={index}>
                <div className="pb-3 shadow-xl rounded-2xl">
                  <img
                    className="rounded-2xl transition ease-in-out hover:scale-105 duration-600"
                    src={item.img}
                    alt="Image"
                  />
                  <p className="text-[#3a3a3a] text-base my-4 px-8">
                    {item.subTitle}
                  </p>
                  <h2 className="px-8 mb-5 text-blue-500 text-2xl hover:text-black">
                    <Link to="blogDetail">{item.title} </Link>
                  </h2>
                  <p className="text-[#3a3a3a] text-base mb-3 px-8">
                    {item.author}
                  </p>
                  <p className="text-[#3a3a3a] text-base mb-3 px-8">
                    {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div
          className="grid grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="mt-6 px-3">
            <div className="pb-3 shadow-xl rounded-2xl">
              <img
                className="rounded-2xl transition ease-in-out hover:scale-105 duration-600"
                src={Blog1}
                alt="Image"
              />
              <p className="text-[#3a3a3a] text-base my-4 px-8">
                Domain & Hosting
              </p>
              <h2 className="px-8 mb-5 text-blue-500 text-2xl hover:text-black">
                <a href="#">How to host website on any hosting provider?</a>
              </h2>
              <p className="text-[#3a3a3a] text-base mb-3 px-8">William Bla</p>
              <p className="text-[#3a3a3a] text-base mb-3 px-8">Feb 1, 2022</p>
            </div>
          </div>
          <div className="mt-6 px-3 rounded-2xl">
            <div className="pb-3 shadow-xl">
              <img
                className="rounded-2xl transition ease-in-out hover:scale-105 duration-600"
                src={Blog2}
                alt="Image"
              />
              <p className="text-[#3a3a3a] text-base my-4 px-8">
                Advertisement
              </p>
              <h2 className="px-8 mb-5 text-blue-500 text-2xl hover:text-black">
                <a href="#">How to create add on google adwords?</a>
              </h2>
              <p className="text-[#3a3a3a] text-base mb-3 px-8">Jobi Ret</p>
              <p className="text-[#3a3a3a] text-base mb-3 px-8">Oct 5, 2022</p>
            </div>
          </div>
          <div className="mt-6 px-3 rounded-2xl">
            <div className="pb-3 shadow-xl">
              <img
                className="rounded-2xl transition ease-in-out hover:scale-105 duration-600"
                src={Blog3}
                alt=""
              />
              <p className="text-[#3a3a3a] text-base my-4 px-8">Marketing</p>
              <h2 className="px-8 mb-5 text-blue-500 text-2xl hover:text-black">
                <a href="#">What is digital marketing and why is important?</a>
              </h2>
              <p className="text-[#3a3a3a] text-base mb-3 px-8">Main Dow</p>
              <p className="text-[#3a3a3a] text-base mb-3 px-8">Dec 22, 2022</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
