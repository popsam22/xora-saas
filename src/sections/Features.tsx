import { Element } from "react-scroll";
import { details, features } from "../constants";
import Button from "../components/Button";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, icon, title, caption, text, button }) => (
              <div
                key={id}
                className="relative z-2 px-5 pb-5 md:pb-10 md:px-10 flex-50 max-md:g7 max-md:border-2 max-md:rounded-3xl max-md:border-s3 max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="mb-12 flex flex-col items-center justify-center -ml-3">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={icon}
                      alt={title}
                      className="size-28 object-contain"
                    />
                  </div>
                </div>
                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-400 text-p4 h3 mb-7 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}
            <ul className="max-md:hidden relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-16">
                  <div className="absolute top-0 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
                  <div className="flex items-center justify-center mx-auto border-2 mb-3 rounded-full border-s2 hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>
                  <h3 className="max-w-36 mx-auto my-0 base-small text-center uppercase ">
                    {" "}
                    {/**relative z-2 */}
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
