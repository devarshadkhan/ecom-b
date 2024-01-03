import React from "react";
import next from "next";
import Header from "layout/header";
import Footer from "layout/footer";
import styles from "styles/shop.module.scss";
import { useRouter } from "next/router";
import { useSearchBeds } from "network-requests/queries";
import ProductListing from "components/home/products";
import { useInView } from "react-intersection-observer";

const Shop = () => {
  const router = useRouter();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSearchBeds(router.query?.q as string);

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      <Header />
      <section className={styles.mainshop}>
        <div className="container-full">
          <div className="row-full">
            <div className="col-12">
              <h1>Shop</h1>
            </div>
            <div className="itemslist">
              {data?.pages?.map((page: any, index) => {
                return (
                  <ProductListing key={index} productList={page.data || []} />
                );
              })}
            </div>
            {hasNextPage && (
              <button ref={ref} onClick={() => hasNextPage && fetchNextPage()}>
                {isFetchingNextPage ? "Loading..." : "Load More"}
              </button>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Shop;
