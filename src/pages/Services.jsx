import { PageTitle } from "../components/PageTitle";
import { Services } from "../components/Services";

export const ServicesPage = () => {
  const nn = {
    title: "Our Services",
    des: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/services",
        text: "Services",
      },
    ],
  };

  return (
    <>
      <PageTitle data={nn} />
      <Services />
    </>
  );
};
