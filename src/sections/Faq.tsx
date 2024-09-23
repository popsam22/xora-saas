import { Element } from "react-scroll";
import { faq } from "../constants";
import FaqAccordion from "../components/FaqAccordion";
const Faq = () => {
  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-w-640 max-md:h5 max-lg:max-w-md text-p4 mb-7">
              Curiosty didnt kill the cat, it gave it answers.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You've got questions, we've got answers.
            </p>
          </div>
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="flex items-center justify-center border-2 border-s2 bg-s1 rounded-half absolute -top-10 z-4 size-20 left-[calc(50%-40px)]">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>
            <div className="flex-1 relative pt-24">
              {faq.slice(0, Math.floor(faq.length / 2)).map((item, index) => (
                <FaqAccordion key={item.id} item={item} index={index} />
              ))}
            </div>
            <div className="flex-1 relative lg:pt-24">
              {faq.slice(Math.floor(faq.length / 2)).map((item, index) => (
                <FaqAccordion
                  key={item.id}
                  item={item}
                  index={Math.floor(faq.length / 2) + index}
                />
              ))}
            </div>
          </div>
          <div className="absolute faq-lin_after left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
