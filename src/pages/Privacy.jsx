import { PageTitle } from "../components/PageTitle";
import { Privacy } from "../components/Privacy";

export const PrivacyPage = () => {
  const gg = {
    title: "Privacy Policy",
    des: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/Privacy",
        text: " Privacy",
      },
    ],
  };

  return (
    <>
      <PageTitle data={gg} />
      <Privacy />
    </>
  );
};
