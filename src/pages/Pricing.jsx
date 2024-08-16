import { PageTitle } from "../components/PageTitle";
import { Pricing } from "../components/Pricing";

export const PricingPage = () => {
  const gg = {
    title: "Our Packages",
    des: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/Pricing",
        text: " Pricing",
      },
    ],
  };

  return (
    <>
      <PageTitle data={gg} />
      <Pricing />
    </>
  );
};
