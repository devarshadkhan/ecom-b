import { useInfiniteQuery, useQuery } from "react-query";
import {
  getAllBeds,
  getAllBedsWithImage,
  getAllBedsWithImageAdmin,
  getAllCoupons,
  getAllHeadboardWithImage,
  getAmazonPaySessionAndSignature,
  getBedById,
  getBedBySlug,
  getBedsBySize,
  getBedVariantById,
  getCheckoutSession,
  getIconById,
  getIconsByType,
  getReviewsByBedId,
  getUser,
  searchBeds,
} from "./api";
import {
  Accessories,
  Bed,
  BedResponse,
  BedWithImage,
  BedWithSize,
  Blogs,
  Coupon,
  ReviewRequestPayload,
  VariantsTypes,
} from "./types";
import { getAllBlogs, getAllBlogsById } from "./blogs";

export const useFetchAllBeds = () =>
  useInfiniteQuery(
    "beds",
    ({ pageParam = 1 }): Promise<BedResponse> => getAllBeds({ pageParam }),
    {
      refetchOnMount: true,
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );
export const useFetchAllBedsWithSizeAndCategory = (size: string) =>
  useInfiniteQuery(
    ["find-beds-image-size", size],
    ({ pageParam = 1 }): Promise<BedResponse> => getBedsBySize(size, pageParam),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );
export const useFetchAllBedsWithImage = (category?: string) =>
  useInfiniteQuery(
    ["beds-image", category],
    ({ pageParam = 1 }): Promise<BedResponse> =>
      getAllBedsWithImage({ pageParam, category }),
    {
      refetchOnMount: true,
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );
export const useFetchAllHeadboardWithImage = (category?: string) =>
  useInfiniteQuery(
    ["headboard-image", category],
    ({ pageParam = 1 }): Promise<BedResponse> =>
      getAllHeadboardWithImage({ pageParam, category }),
    {
      refetchOnMount: true,
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );

export const useFetchAllBedsWithImageAdmin = () =>
  useInfiniteQuery(
    "beds-image-admin",
    ({ pageParam = 1 }): Promise<BedResponse> =>
      getAllBedsWithImageAdmin({ pageParam }),
    {
      refetchOnMount: true,
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );

export const useFetchBedById = (id: string) =>
  useQuery(["bed", id], (): Promise<Bed> => getBedById(id));
export const useFetchBedBySlug = (slug: string) =>
  useQuery(["bed", slug], (): Promise<Bed> => getBedBySlug(slug));

export const useFetchBedVariantsById = (id: string) =>
  useQuery(
    ["bed-variant", id],
    (): Promise<BedWithImage> => getBedVariantById(id)
  );

export const useFetchBedVariantsByIdAndSize = (id: string, size: string) =>
  useQuery(
    ["bed-variant", id, size],
    (): Promise<BedWithSize> => getBedVariantById(id, size),
    {
      enabled: !!id && !!size,
    }
  );

export const useFetchIconsByType = (type: string) =>
  useQuery(
    ["icons", type],
    (): Promise<Accessories[]> => getIconsByType(type),
    {
      refetchOnMount: true,
    }
  );

export const useFetchIconById = (id: string) =>
  useQuery(["icon", id], (): Promise<Accessories> => getIconById(id), {
    refetchOnMount: true,
  });

//GET USER DATA
export const useFetchUser = () =>
  useQuery("user", getUser, {
    refetchOnMount: true,
  });

export const useReviewsByBedId = (id: string) =>
  useInfiniteQuery(
    ["bed-reviews-by-Id", id],
    ({ pageParam = 1 }): Promise<ReviewRequestPayload[]> =>
      getReviewsByBedId(id, pageParam),
    {
      refetchOnMount: true,
      enabled: !!id,
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );

export const useSearchBeds = (query: string) =>
  useInfiniteQuery(
    ["bedSearch", query],
    ({ pageParam = 1 }): Promise<Bed[]> => searchBeds(query, pageParam),
    {
      refetchOnMount: true,

      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );

export const useGetAllCoupons = () =>
  useQuery(["coupons"], (): Promise<Coupon[]> => getAllCoupons());

// FOR BLOGS
export const useGetAllBlogs = () =>
  useQuery(["blogs"], (): Promise<Blogs[]> => getAllBlogs());
  
export const useGetBlogById = (id: string | undefined) =>
  useQuery(["blogs-by-id-or-slug"], (): Promise<Blogs> => getAllBlogsById(id));
export const useGetAmazonPaySessionAndSignature = (payload?: any) =>
  useQuery(
    ["amazon-pay-session", payload],
    (): Promise<any> => getAmazonPaySessionAndSignature(payload)
  );

export const useGetCheckoutSession = (amazonCheckoutSessionId: string) =>
  useQuery(
    ["amazon-checkout-session-id", amazonCheckoutSessionId],
    (): Promise<any> => getCheckoutSession(amazonCheckoutSessionId)
  );

  export const useFetchAllBedsWithSize = (
    size: string,
    category: string
  ) =>
    useInfiniteQuery(
      ["find-beds-image-size", size, category],
      ({ pageParam = 1 }): Promise<BedResponse> =>
        getBedsBySize(size, category, pageParam),
      {
        enabled: !!size && !!category,
        refetchOnMount: false,
        getNextPageParam: (lastPage: any) => {
          if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
          return undefined;
        },
      }
    );