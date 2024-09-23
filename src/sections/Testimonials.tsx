import TestimonialItem from "../components/TestimonialItem";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="relative z-2 py-24 md:y-28 lg:py-40">
      <div className="container block lg:flex">
        <div className="relative z-2 mr-20 flex-300 testimonials_head-res">
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          <h3 className="h3 max-md:h5 text-p4">Word from our fans</h3>
        </div>
        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {testimonials
              .slice(0, Math.floor(testimonials.length / 2))
              .map((testimonial) => (
                <TestimonialItem
                  key={testimonial.id}
                  item={testimonial}
                  containerClassName="last:after:hidden last:after:max-md:block"
                />
              ))}
          </div>
          <div className="flex-50">
            {testimonials
              .slice(Math.floor(testimonials.length / 2))
              .map((testimonial) => (
                <TestimonialItem
                  key={testimonial.id}
                  item={testimonial}
                  containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
