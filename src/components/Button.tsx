import clsx from "clsx";
import Marker from "./Marker";
const Button = ({ icon, children, href, onClick, heroFill }: ButtonProps) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center px-4 min-h-[60px] g4 rounded-2xl inner-before overflow-hidden group-hover:before:opacity-100">
        <span className="absolute left-0">
          <Marker fill={heroFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="object-contain z-10 size-10 mr-5"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>
      <span className="glow-before glow-after" />
    </>
  );
  return href ? (
    <a
      href={href}
      className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group ")}
    >
      <Inner />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group ")}
    >
      <Inner />
    </button>
  );
};

export default Button;
