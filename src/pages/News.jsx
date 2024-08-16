import { PageTitle } from "../components/PageTitle";
import { Blog } from "../components/Blog";

export const NewsPage = () => {
  const gg = {
    title: "Our Blogs",
    des: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/Blog",
        text: " Blog",
      },
    ],
  };

  return (
    <>
      <PageTitle data={gg} />
      <Blog />
    </>
  );
};
