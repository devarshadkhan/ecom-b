import React from "react";

interface GridWrapperProps extends React.ComponentPropsWithoutRef<"div"> {
  grid: string;
  gap?: string;
  gridCount?: {
    mobile: number;
    desktop: number;
  };
}

const GridWrapper = (props: React.PropsWithChildren<GridWrapperProps>) => {
  const { grid, children, gap, gridCount, ...rest } = props;
  return (
    <React.Fragment>
      <div
        className={`wraper grid-${gridCount?.mobile} grid-${grid}`}
        {...rest}
      >
        {children}
      </div>
      <style jsx>
        {`
          .wraper {
            gap: ${gap || "1rem"};
            display: grid;
          }
          .grid-${grid} {
            grid-template-columns: repeat(${grid}, 1fr);
          }
          @media screen and (max-width: 768px) {
            .grid-${grid} {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media screen and (max-width: 1200px) {
            .grid-${grid} {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media screen and (max-width: 480px) {
            .grid-${gridCount?.mobile} {
              grid-template-columns: repeat(${gridCount?.mobile}, 1fr);
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};
export default GridWrapper;
