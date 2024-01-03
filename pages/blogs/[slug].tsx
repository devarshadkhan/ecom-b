/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "styles/blog.module.scss";
import PerPageLayout from "layout/perpage";
import { GetServerSidePropsContext } from "next";
import { BedWithImage, Blogs } from "network-requests/types";
import NextSEO from "layout/nextseo";
import { useRouter } from "next/router";
import { useFetchAllBedsWithImage } from "network-requests/queries";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";

type SingleBlogTypes = {
  data: Blogs;
  Meta:Blogs
};

const SingleBlogPage = ({ data,Meta }: SingleBlogTypes) => {
  const router = useRouter();
  const { data: topproduct } = useFetchAllBedsWithImage("selling-beds");
  return (
    <>
      <NextSEO
        title={data?.metaTitle as string}
        description={data?.metaDescription}
        canonicalUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      >
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        /> */}
      </NextSEO>
      <div className={css.mainsec}>
        <section className={css["section"]}>
          <div className={css.upparhead}>
            <h6>{data?.keyWord?.[0]}</h6>
            <h1 style={{ textAlign: "center" }}>{data?.name}</h1>
            <div className={css.line}></div>
            <span className={css.postedon}>
              POSTED ON {moment(data?.createdAt).format("DD-MM-YYYY")}
            </span>
          </div>
          <div className={css.contentsec}>
            <div className={css["sectol"]}>
              {data?.images && (
                <div
                  className={css["blogheadimg"]}
                  style={{ marginBottom: "30px" }}
                >
                  <Image priority width={650} height={400} src={data?.images[0]} /> <br />
                </div>
              )}
              {/* RENDER CONTENT */}
              {data && data?.content && (
                <div
                  className={css["blog-content"]}
                  dangerouslySetInnerHTML={{
                    __html: data?.content as string,
                  }}
                />
              )}
            </div>
          </div>
        </section>
        <section className={css.ratedproduct}>
          <div className={css.topratedproduct}>
            <div className={css.prodhead}>
              <p>TOP RATED PRODUCTS</p>
              <div className={css.prodline}></div>
              {topproduct?.pages?.["0"]?.data
                ?.reverse()
                .map((item: BedWithImage, index: any) => {
                  return (
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
                  );
                })}
            </div>
            <div className={css["prodhead"]} style={{marginTop:30}}>
              <p> Top Latest Blogs</p>
              <div className={css.prodline}></div>
              {Meta?.slice(0,20).map((item:any) => {
                  return (
                    <>
                      <div className={css.prodinfo} style={{marginBottom:10}}>
                        <div className={css.prodimg}>
                          <img src={item?.images?.[0]} />
                        </div>
                        <div className={css.proddetail}>
                          <h5>
                            <Link href={`/blogs/${item.slug}`}>
                              {item?.name}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default SingleBlogPage;

SingleBlogPage.getLayout = PerPageLayout;

export const getServerSideProps = async (

  
  context: GetServerSidePropsContext
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`);
  const Meta = await response.json();
 
  const slug = context.query?.slug;

  if (slug) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${slug}/slug`
    );
    const data = await response.json();
    return {
      props: {
        data,
        Meta,
      },
    };
  } else {
    return {
      props: {
        data: {},
        Meta,
      },
    };
  }
};


