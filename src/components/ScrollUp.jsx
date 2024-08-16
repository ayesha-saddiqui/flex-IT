export const ScrollUp = () => {
  return (
    <a
      href="#"
      className="scroll-top fixed right-6 bottom-6 rounded-full z-50 invisible opacity-0 transition-all ease-in-out duration-1000"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 24 24"
      >
        <path
          fill="#025add"
          d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m1 10h3l-4-4l-4 4h3v4h2z"
        />
      </svg>
    </a>
  );
};
