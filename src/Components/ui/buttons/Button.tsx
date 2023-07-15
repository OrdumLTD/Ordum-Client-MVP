import * as React from "react";

type Button = {
  children: React.ReactNode;
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
  className,
  buttonBasic,
  borderWhite,
  borderBlack,
  primeColor,
  secondaryColor,
}) => {

  let btnClass = " border p-2 drop-shadow-lg ";

  const defineStyle = (style:string) =>{

  if (primeColor && secondaryColor) {
    throw new Error(
      "Button element can have either primeColor and/or a secondaryColor, but not both"
    );
  }

  if (className) style = style + " " + className + " ";
  if (primeColor) style += " bg-ordum-purple hover:bg-blue-900 ";
  if (secondaryColor) style += " bg-ordum-blue hover:bg-blue-900 ";
  if (borderWhite) style += "   border border-white rounded-full border-2  ";
  if (borderBlack) style += "  border border-black rounded-full border-2 ";

  return style
}

  return <button className={defineStyle(btnClass)}>{children}</button>;
};

export default Button;
