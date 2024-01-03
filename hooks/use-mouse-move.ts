import React from "react";

interface MouseMoveProps {
  defaultImage: string;
}

const useMouseMove = ({ defaultImage }: MouseMoveProps) => {
  const [style, setStyle] = React.useState<React.CSSProperties>({
    backgroundImage: `url(${defaultImage})`,
    backgroundPosition: "0% 0%",
    backgroundRepeat: "no-repeat",
  });

  const zoom = 100;
  const handleMouseMove = React.useCallback((e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * zoom;
    const y = ((e.pageY - top) / height) * zoom;
    setStyle({
      ...style,
      backgroundPosition: `${x}% ${y}%`,
    });
  }, []);

  // Return Values
  return { style, handleMouseMove };
};
export default useMouseMove;
