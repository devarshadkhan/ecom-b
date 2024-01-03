import { NextRouter } from "next/router";

export const ProductRedirectByCategory = (
  router: NextRouter,
  category: string[],
  slug: string
) => {
  if (category.includes("headboard")) {
    router.push({
      pathname: `/headboard/products/${slug}`,
    });
  } else if (category.includes("mattress")) {
    router.push({
      pathname: `/mattressess/products/${slug}`,
    });
  } else if (category.includes("divanbed")) {
    router.push({
      pathname: `/divanbed/products/${slug}`,
    });
  } else {
  
  }
};
