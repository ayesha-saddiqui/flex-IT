import { PageTitle } from "../components/PageTitle";
import { WhyChooseUs } from "../components/WhyChooseUs";

export const About = () => {
  const gg = {
    title: "About Us",
    des: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/about",
        text: "About",
      },
    ],
  };

  return (
    <>
      <PageTitle data={gg} />
      <WhyChooseUs />
    </>
  );
};
