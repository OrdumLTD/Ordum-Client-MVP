import * as React from "react";

type Button = {
  children: React.ReactNode;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  className?: string;
  buttonBasic?: boolean;
  borderWhite?: boolean;
  borderBlack?: boolean;
  primeColor?: boolean;
  secondaryColor?: boolean;
};

// export default function Button(props:Button) {
const Button: React.FC<Button> = ({
  children,
  onClick,
  className,
  buttonBasic,
  borderWhite,
  borderBlack,
  primeColor,
  secondaryColor,
}) => {
  let btnClass = " p-2 px-6 rounded-full drop-shadow-lg ";

  const defineStyle = (style: string) => {
    if (primeColor && secondaryColor) {
      throw new Error(
        "Button element can have either primeColor and/or a secondaryColor, but not both",
      );
    }

    if (primeColor) style += " bg-ordum-blue hover:bg-blue-900 ";
    if (secondaryColor) style += " bg-ordum-purple hover:bg-blue-900 ";
    if (borderWhite) style += "   border border-white rounded-full border-2  ";
    if (borderBlack) style += "  border border-black rounded-full border-2 ";
    if (className) style = style + " " + className + " ";

    return style;
  };

  return (
    <button className={defineStyle(btnClass)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
