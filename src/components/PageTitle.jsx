/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const PageTitle = ({ data }) => {
  return (
    <>
      <div className="bg-[url(../../src/assets/images/page-header-bg.png)] pt-36 pb-24 min-h[20vh] origin-bottom bg-cover relative">
        <div className="bg-white opacity-50 absolute left-0 top-0 bottom-0 right-0 z-10"></div>
        <div className="max-w-screen-xl mx-auto text-center z-40 relative">
          <div className="px-3">
            <h2 className="text-blue-600 font-serif text-4xl font-medium mb-5">
              {data?.title}
            </h2>
            <p className="text-white mb-4 font-serifs">{data?.des}</p>
          </div>
        </div>
      </div>

      <nav className="bg-blue-600 py-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex gap-1 px-20 items-center">
            {data?.links?.map(function (item, index) {
              return (
                <div key={index}>
                  <Link className="text-white" to={item.link}>
                    {item.text}
                  </Link>
                  <span className="text-white text-xl px-3">/</span>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
