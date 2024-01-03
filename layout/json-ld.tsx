import React from "react";

interface JsonLDProps {
  schemaData: any;
}

const JsonLD = ({ schemaData }: JsonLDProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default JsonLD;
