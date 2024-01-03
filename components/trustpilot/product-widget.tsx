import React from "react";


type WidgetProps={} & React.ComponentPropsWithoutRef<'div'>

const TrustBoxProductWidget = ({className,...rest}:WidgetProps) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    // @ts-expect-error
    if (window.Trustpilot) {
      // @ts-expect-error
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  React.useEffect(() => {
    console.log(window.location);
  }, []);

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="en-GB"
      data-template-id="5419b637fa0340045cd0c936"
      data-businessunit-id="5e4a8fcd3fe4ff0001101e06"
      data-style-height="20px"
      data-style-width="100%"
      data-theme="light"
      {...rest}
    >
      <a
       
        href="https://uk.trustpilot.com/review/bedsdivans.co.uk"
        target="_blank"
        rel="noreferrer"
      >
        Trustpilot
      </a>
    </div>
  );
};
export default TrustBoxProductWidget;
