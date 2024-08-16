import { PageTitle } from "../components/PageTitle";
import { Faq } from "../components/Faq";

export const FaqPage = () => {
  const gg = {
    title: "Our FAQ'",
    des: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/Faq",
        text: " Faq",
      },
    ],
  };

  return (
    <>
      <PageTitle data={gg} />
      <Faq />
    </>
  );
};
