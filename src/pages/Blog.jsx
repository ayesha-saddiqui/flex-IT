import { PageTitle } from "../components/PageTitle";
import { Blog } from "../components/Blog";

export const BlogPage = () => {
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
// {
//   blogData.map((item, index) => {
//     return (
//       <img
//         key={index}
//         className="rounded-2xl transition ease-in-out hover:scale-105 duration-600"
//         src={item.image}
//         alt="Image"
//       />
//     );
//   });
// }
