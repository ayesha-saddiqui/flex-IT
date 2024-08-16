import logo from "../assets/images/logo-1.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between px-16 pt-3 pb-3">
        <div className="cursor-pointer transition ease-in-out hover:scale-110 duration-1000">
          <img className="max-w-48" src={logo} />
        </div>
        <nav>
          <ul className="flex gap-6 my-2">
            <li id="nav_link" className="hover:text-blue-500">
              <Link to="/">Home</Link>
            </li>
            <li id="nav_link" className="hover:text-blue-500">
              <Link to="/services">Services</Link>
            </li>
            <li id="nav_link" className="hover:text-blue-500">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li id="nav_link" className="hover:text-blue-500">
              <Link to="/testimonial">Testimonial</Link>
            </li>
            <li id="nav_link" className="hover:text-blue-500">
              <Link to="/team">Team</Link>
            </li>
            <li
              id="nav_link"
              className="relative group/dropdown cursor-pointer"
            >
              <div className="flex gap-1 items-center hover:text-blue-500">
                <div>Menu</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"
                    />
                  </svg>
                </div>
              </div>
              <ul className="hidden absolute left-0 top-6 bg-white w-48 rounded group-hover/dropdown:block shadow-lg z-50">
                <li className="text-gray-950 hover:text-white hover:bg-blue-500 p-2">
                  <Link to="/about">About</Link>
                </li>
                <li className="text-gray-950 hover:text-white hover:bg-blue-500 p-2">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="text-gray-950 hover:text-white hover:bg-blue-500 p-2">
                  <Link to="/faq">FAQs</Link>
                </li>
                <li className="text-gray-950 hover:text-white hover:bg-blue-500 p-2">
                  <Link to="/privacy">Terms &amp; Conditions</Link>
                </li>
                <li className="text-gray-950 hover:text-white hover:bg-blue-500 p-2">
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li className="text-gray-950 hover:text-white hover:bg-blue-500 p-2">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="text-gray-950 hover:text-white hover:bg-blue-500 p-2">
                  <Link to="/blogDetail">Blog Detail</Link>
                </li>
              </ul>
            </li>
            <li id="nav_link" className="hover:text-blue-500 ">
              <Link to="/blog">News</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-14">
          <Link to="/contact">
            <button className="rounded-[40px] bg-[#025add] text-white py-3 px-5 cursor-pointer">
              Get Quotes
            </button>
          </Link>

          <div className="flex items-center">
            <svg
              className="size-10"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 56 56"
            >
              <path
                fill="currentColor"
                d="M28 51.906c13.055 0 23.906-10.851 23.906-23.906c0-13.078-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.922 4.095 28c0 13.055 10.828 23.906 23.906 23.906m6.937-18.96c1.618 0 3.258-.352 4.243-.704c.257-.07.421-.094.562-.094c.375 0 .774.329.774.82c0 .094-.024.4-.141.704c-1.688 4.266-6.54 7.71-12.164 7.71c-7.711 0-13.594-5.507-13.594-13.218c0-5.508 3.258-10.758 8.11-12.68c.304-.117.585-.14.75-.14a.76.76 0 0 1 .773.75c0 .117-.023.304-.14.61c-.423 1.1-.821 3.187-.821 4.663c0 7.102 4.547 11.578 11.648 11.578"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};
