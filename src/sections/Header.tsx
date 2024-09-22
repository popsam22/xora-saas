import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    //helps browser track scrolling
    window.addEventListener("scroll", handleScroll);
    //to optimize performace
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }: { title: string }) => (
    <LinkScroll
      onClick={() => setOpen(false)}
      to={title}
      spy
      smooth
      offset={-100}
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <header
      className={clsx(
        "fixed w-full left-0 top-0 z-50 py-8 transition-all duration-500 max-lg:py-4",
        scrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className="flex container items-center h-14 max-lg:px-4">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" alt="logo" width={110} height={55} />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            open ? "max-lg:opacity-100" : "pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:my-auto max-lg:z-2">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo ">
                  <LinkScroll
                    to="hero"
                    spy
                    smooth
                    offset={-100}
                    className={clsx(
                      "max-lg:hidden cursor-pointer transition-transform duration-500"
                    )}
                  >
                    <img
                      src={"/images/xora.svg"}
                      alt="logo"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                alt="outline"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="lg:hidden z-2 size-10 rounded-full border-2 border-s4/25 flex justify-center items-center"
        >
          <img
            src={`/images/${open ? "close" : "magic"}.svg`}
            alt="toggle"
            className="object-contain size-1/2"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
