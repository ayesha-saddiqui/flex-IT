import { PageTitle } from "../components/PageTitle";
import { BlogDetail } from "../components/BlogDetail";

export const BlogDetailPage = () => {
  const gg = {
    title: "Blog Details Page Title Here",
    des: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/BlogDetail",
        text: "BlogDetail",
      },
    ],
  };

  return (
    <>
      <PageTitle data={gg} />
      <BlogDetail />
    </>
  );
};
