import { Element } from "react-scroll";
import { logos } from "../constants";

const Downloads = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  alt="xora"
                  width={160}
                  height={55}
                />
              </div>
              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC and Web - we've got you
                covered.
              </p>
              <ul className="flex flex-wrap items-center gap-6"></ul>
            </div>
            <div>
              <ul className="flex justify-center max-lg:hidden">
                {logos.map(({ id, url, width, height, title }) => (
                  <li key={id} className="mx-5">
                    <img src={url} alt={title} width={width} height={height} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Downloads;
