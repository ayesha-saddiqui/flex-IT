// import product1 from "../assets/images/product-1.jpg";
// import product2 from "../assets/images/product-2.jpg";
// import product3 from "../assets/images/product-3.jpg";
// import product4 from "../assets/images/product-4.jpg";
// import product5 from "../assets/images/product-5.jpg";
// import product6 from "../assets/images/product-6.jpg";

import { ImagesProducts } from "../data/portfolio";

export const Portfolio = () => {
  return (
    <section className="bg-white pt-14 pb-14">
      <div className="max-w-screen-xl mx-auto">
        <h4
          className="mb-4 text-3xl text-blue-500 text-center font-serif"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our Portfolio
        </h4>
        <p
          className="text-[#b8651d] text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Lorem ipsum dolor sit amet
        </p>
        <div className="py-11 px-11">
          <div
            className="flex gap-10 justify-center cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <button className="rounded-[40px] bg-[#025add] text-white py-3 px-5 cursor-pointer">
                All
              </button>
            </div>
            <div>
              <button className="rounded-[40px] bg-[#025add] text-white py-3 px-5 cursor-pointer">
                App Design
              </button>
            </div>
            <div>
              <button className="rounded-[40px] bg-[#025add] text-white py-3 px-5 cursor-pointer">
                App Development
              </button>
            </div>
            <div>
              <button className="rounded-[40px] bg-[#025add] text-white py-3 px-5 cursor-pointer">
                Branding
              </button>
            </div>
            <div>
              <button className="rounded-[40px] bg-[#025add] text-white py-3 px-5 cursor-pointer">
                it Solution
              </button>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-3 gap-5 mt-5"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {ImagesProducts.map((item, index) => {
            return (
              <img
                key={index}
                className="cursor-pointer transition ease-in-out hover:scale-105 duration-1000 rounded-xl w-96"
                src={item.img}
                alt=""
              />
            );
          })}
        </div>
        {/* <div
          className="grid grid-cols-3 gap-5 mt-5"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <img
            className="cursor-pointer transition ease-in-out hover:scale-105 duration-1000 rounded-xl w-96"
            src={product1}
            alt=""
          />
          <img
            className="cursor-pointer transition ease-in-out hover:scale-105 duration-1000 rounded-xl w-96"
            src={product2}
            alt=""
          />
          <img
            className="cursor-pointer transition ease-in-out hover:scale-105 duration-1000 rounded-xl w-96"
            src={product3}
            alt=""
          />
        </div>
        <div
          className="grid grid-cols-3 gap-5 mt-5"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <img
            className="cursor-pointer transition ease-in-out hover:scale-105 duration-1000 rounded-xl w-96"
            src={product4}
            alt=""
          />
          <img
            className="cursor-pointer transition ease-in-out hover:scale-105 duration-1000 rounded-xl w-96"
            src={product5}
            alt=""
          />
          <img
            className="cursor-pointer transition ease-in-out hover:scale-105 duration-1000 rounded-xl w-96"
            src={product6}
            alt=""
          />
        </div> */}
      </div>
    </section>
  );
};
