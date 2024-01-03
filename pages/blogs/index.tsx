/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import PerPageLayout from "layout/perpage";
import css from "styles/blog.module.scss";
import { BedWithImage, Blogs } from "network-requests/types";
import NextSEO from "layout/nextseo";
import moment from "moment";
import BlogDetail from "./component/blogcomp";
import { useFetchAllBedsWithImage } from "network-requests/queries";
import { useRouter } from "next/router";

type SingleBlogTypes = {
  data: Blogs[];
};

const BlogPage = ({ data }: SingleBlogTypes) => {
    const router = useRouter();
    const { data:topproduct } = useFetchAllBedsWithImage("selling-beds");
  return (
    <>
      <NextSEO
        title="Tips & Guides for everything Bed and Mattress | Beds Divans"
        description="At Beds Divans You will find a lot of topics & articles related to  bedroom furniture designs, divan beds, headboard, mattresses, price disuccsion, deals and more Visit Beds Divans today!"
      />
       <section className={css.mydiv}>
        <div className={` ${css.section_first} container-fluid`}>
          <div className="row">
            <div className="col-12">
              <h1 className={css.headingh1}>Blogs</h1>
            </div>
          </div>
        </div>
        {/* <p className={styles.paragraphp}>
            Relax and unwind in comfort with our high-quality beds. From natural
            materials to luxe velvet, we have a fantastic collection of bespoke
            ottomans and divans handcrafted in Yorkshire with your sleep in
            mind. Our handcrafted ranges are available in a wide selection of
            fabrics, and we also have a build your bed tool offering you the
            opportunity to design the bed of your dreams.{" "}
          </p> */}
      </section>
      <div className={css.blogpage}>
     
        <section className={css.blogsection}>
          <div className={css.blog}>
            <BlogDetail data={data} />
          </div>
        </section>
        <section className={css.ratedproduct}>
          <div className={css.topratedproduct}>
          <div className={css.prodhead}>
              <p>TOP RATED PRODUCTS</p>
              <div className={css.prodline}></div>
            {topproduct?.pages?.["0"]?.data.map((item: BedWithImage, index:any)=>{
                return(
                    <>
                    <div className={css.prodinfo}>
                <div className={css.prodimg}>
                  <img src={item?.image} />
                </div>
                <div className={css.proddetail}>
                  <h5>
                    {" "}
                    <Link href={`/product/${item.slug}`}>
                     {item?.name}
                    </Link>
                  </h5>
                  <p className={css.price}>£{item?.price?.salePrice}</p>
                </div>
              </div>
                    </>
                )
            })}
             </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default BlogPage;

BlogPage.getLayout = PerPageLayout;

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
