export const Discuss = () => {
  return (
    <section className="">
      <div className="bg-[url(../../src/assets/images/hero-bg.png)] bg-top bg-fixed bg-cover relative">
        <div className="bg-black absolute bottom-0 top-0 left-0 right-0 z-10 opacity-60"></div>
        <div className="max-w-screen-xl mx-auto relative z-20">
          <div className="mt-6 px-3 py-32">
            <h3 className="text-center text-white text-3xl mb-5 mt-5">
              Lets Discuss your Projects
            </h3>
            <p className="text-center text-white text-xl">
              We pride ourselves with our ability to perform and deliver
              results. Use the form below to discuss your project needs with our
              team, we will get back asap
            </p>
            <div className="text-center my-5">
              <button className="rounded-[40px] bg-[#025add] text-white py-3 px-12 cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
