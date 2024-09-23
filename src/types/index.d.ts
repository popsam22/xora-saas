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

declare type FaqProps = {
  item: {
    id: string;
    question: string;
    answer: string;
  };
  index: number;
};
