import { PageTitle } from "../components/PageTitle";
import { Testimonial } from "../components/Testimonial";

export const TestimonialPage = () => {
  const gg = {
    title: "Our Testimonials",
    des: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/Testimonial",
        text: " Testimonial",
      },
    ],
  };

  return (
    <>
      <PageTitle data={gg} />
      <Testimonial />
    </>
  );
};
