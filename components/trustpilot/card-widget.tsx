import React from 'react';

type WidgetProps = {} & React.ComponentPropsWithoutRef<'div'>;

const TrustBoxCardWidget = ({ className, ...rest }: WidgetProps) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    // @ts-expect-error
    if (window.Trustpilot) {
      // @ts-expect-error
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} trustpilot-widget`}
      data-locale="en-GB"
      data-template-id="5419b757fa0340045cd0c938"
      data-businessunit-id="5e4a8fcd3fe4ff0001101e06"
      data-style-height="25px"
      data-style-width="100%"
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
export default TrustBoxCardWidget;
