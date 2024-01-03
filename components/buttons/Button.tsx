import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

function Button({ loading, children, ...props }: ButtonProps) {
  return (
    <button className="btn btn-primary" {...props}>
      {loading ? (
        <ClipLoader size={20} color={"#fff"} loading={loading} />
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
