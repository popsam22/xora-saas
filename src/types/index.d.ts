declare type ButtonProps = {
  icon: string;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  heroFill?: string;
};

declare type MarkerProps = {
  fill?: string;
};

declare type Button = {
  icon: string;
  title: string;
};

declare type Features = {
  id: number;
  icon: string;
  caption: string;
  title: string;
  text: string;
  button: Button;
};
