import * as React from "react";

export const SIZE = {
  default: "default",
  compact: "compact",
  large: "large",
};

type TButtonProps = {
  children: React.ReactNode;
  onClick: (e: any) => void;
  size: keyof typeof SIZE;
  disabled: boolean;
};

export const Button: React.FC<TButtonProps> = ({
  children,
  onClick,
  size,
  disabled,
}) => {
  const getSizeStyle = (size: keyof typeof SIZE) => {
    switch (size) {
      case SIZE.compact:
        return {
          padding: "8px",
          fontSize: "14px",
        };
      case SIZE.large:
        return {
          padding: "18px",
          fontSize: "20px",
        };
      default:
        return {
          padding: "12px",
          fontSize: "16px",
        };
    }
  };
  const btnStyle = {
    ...getSizeStyle(size),
    background: disabled ? "#CCC" : "#276EF1",
    margin: "0px",
    color: disabled ? "#000" : "#FFF",
    borderRadius: "5px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: disabled ? "#CCC" : "#276EF1",
  };
  return (
    <button
      id="example-btn"
      onClick={onClick}
      style={btnStyle}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
