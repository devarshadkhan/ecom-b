/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import PerPageLayout from "layout/perpage";
import css from "styles/blog.module.scss";
import { Blogs } from "network-requests/types";
import moment from "moment";

type SingleBlogTypes = {
  data: Blogs[];
};

const BlogDetail = ({ data }: SingleBlogTypes) => {
  return (
    <React.Fragment>
      {data?.map((item, index) => {
        return (
          <>
            <div className={css.catname}>
              <h6>{item?.keyWord?.[0] || "UNCATEGORIZED"}</h6>
            </div>
            <div className={css.heading}>
              <h2>
                <Link href={`/blogs/${item.slug}`}>{item?.name}</Link>
              </h2>
              <div className={css.border}></div>
            </div>
            <div className={css.posted}>
              <span>
                <p>POSTED ON {moment(item?.createdAt).format("DD-MM-YYYY")}</p>
              </span>
            </div>
            
            <div className={css.contents}>
              <div className={css.sectionconent}>
                <div className={css.imgsec}>
                  <Link href={`/blogs/${item.slug}`}>
                    <img src={item?.images?.[0]} />
                  </Link>
                </div>
                <div className={css.textbutton}>
                  <div
                    className={css.text}
                    dangerouslySetInnerHTML={{
                      __html: item?.content.slice(0, 500) as string,
                    }}
                  ></div>
                  <div className={css.blogbtn}>
                    <Link href={`/blogs/${item.slug}`}>Continue Reading</Link>
                  </div>
                </div>
              </div>
              <p>Posted in {item?.keyWord?.[0]}</p>
            </div>
          </>
        );
      })}
    </React.Fragment>
  );
};
export default BlogDetail;

BlogDetail.getLayout = PerPageLayout;
