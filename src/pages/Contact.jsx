import { PageTitle } from "../components/PageTitle";
import { Contact } from "../components/Contact";

export const ContactPage = () => {
  const gg = {
    title: "Contact Us",
    des: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/Contact",
        text: "Contact",
      },
    ],
  };

  return (
    <>
      <PageTitle data={gg} />
      <Contact />
    </>
  );
};
