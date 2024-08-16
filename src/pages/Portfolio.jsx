import { PageTitle } from "../components/PageTitle";
import { Portfolio } from "../components/Portfolio";

export const PortfolioPage = () => {
  const gg = {
    title: "Our Portfolio",
    des: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/Portfolio",
        text: "Portfolio",
      },
    ],
  };

  return (
    <>
      <PageTitle data={gg} />
      <Portfolio />
    </>
  );
};
