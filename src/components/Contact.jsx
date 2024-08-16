/* eslint-disable react/prop-types */
export const Contact = ({ contactRef }) => {
  return (
    <section className="bg-white py-14" ref={contactRef}>
      <div className="max-w-screen-xl mx-auto">
        <div className="pb-14">
          <h4 className="mb-5 text-3xl text-blue-500 text-center font-serif">
            Contact Us
          </h4>
          <p className="text-[#b8651d] text-center mb-3">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex gap-48">
          <div className="px-3" data-aos="fade-right">
            <div className="mb-12 py-6 px-5">
              <div className="px-3 mb-6">
                <div className="mb-2 py-2 px-2">
                  <h6 className="mb-2 text-[#3a3a3a] font-serif font-medium text-lg">
                    Address:
                  </h6>
                  <p className="font-serif text-[#3a3a3a]">11 West Town</p>
                  <p className="font-serif text-[#3a3a3a]">
                    PBo 12345, United States
                  </p>
                </div>
              </div>
              <div className="px-3 mb-6">
                <div className="mb-2 py-2 px-2">
                  <h6 className="mb-2 text-[#3a3a3a] font-serif font-medium text-lg">
                    Phone:
                  </h6>
                  <p className="font-serif text-[#3a3a3a]">+1 1234 56 789</p>
                  <p className="font-serif text-[#3a3a3a]">+1 1234 56 780</p>
                </div>
              </div>
              <div className="px-3">
                <div className="mb-2 py-2 px-2">
                  <h6 className="mb-2 text-[#3a3a3a] font-serif font-medium text-lg">
                    Email:
                  </h6>
                  <p className="font-serif text-[#3a3a3a]">info@example.com</p>
                  <p className="font-serif text-[#3a3a3a]">email@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3" data-aos="fade-left">
            <div className="flex gap-3 mb-8">
              <div className="px-3">
                <input
                  className="text-base bg-[#f8f8f8] px-5 py-3 w-full rounded-lg border-none"
                  type="text"
                  placeholder="Name*"
                />
              </div>
              <div className="px-3">
                <input
                  className="text-base bg-[#f8f8f8] px-5 py-3 w-full rounded-lg"
                  type="text"
                  placeholder="Email*"
                />
              </div>
            </div>
            <div className="px-3">
              <div className="mb-7">
                <input
                  className="text-base bg-[#f8f8f8] px-5 py-3 w-full rounded-lg"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="px-3">
              <div className="mb-7">
                <textarea
                  className="text-base bg-[#f8f8f8] px-5 py-3 w-full rounded-lg name="
                  id="message"
                  rows="7"
                  placeholder="Write your Message*"
                ></textarea>
              </div>
            </div>
            <button className="rounded-[40px] bg-[#025add] text-white py-3 px-12 cursor-pointer">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
