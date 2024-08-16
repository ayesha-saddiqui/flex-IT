import { PageTitle } from "../components/PageTitle";
import { Team } from "../components/Team";

export const TeamPage = () => {
  const gg = {
    title: "Our Team",
    des: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/Team",
        text: " Team",
      },
    ],
  };

  return (
    <>
      <PageTitle data={gg} />
      <Team />
    </>
  );
};
