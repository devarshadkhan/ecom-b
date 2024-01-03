import { useMutation } from "react-query";
import {
  createBed,
  createBedVariantById,
  createColorIcon,
  createOrder,
  createReview,
  deleteBedById,
  deleteBedVariantById,
  getAmazonPayUpdateSConfirm,
  getAmazonPayUpdateSession,
  getCouponById,
  login,
  logout,
  register,
  updateAccessoriesIcon,
  updateBedById,
  updateBedVariantById,
  verifyToken,
} from "./api";
import {
  AccessoriesTypes,
  Bed,
  BedRequestPayload,
  ColorIcon,
  CreateBedVariantResponse,
  Login,
  OrderRequestPayload,
  Register,
  ReviewRequestPayload,
  UpdateColorIcon,
  UploadBedImage,
  VariantsTypes,
} from "./types";

//CREATE MUTATIONS
export const useCreateNewBed = () =>
  useMutation(
    (payload: BedRequestPayload): Promise<CreateBedVariantResponse> =>
      createBed(payload)
  );

export const useCreateNewBedVariant = (id: string) =>
  useMutation(
    (props: VariantsTypes): Promise<CreateBedVariantResponse> =>
      createBedVariantById(id, props)
  );

export const useCreateBedColor = () =>
  useMutation(
    (payload: ColorIcon): Promise<UploadBedImage> =>
      createColorIcon(payload.image, payload.label, payload.value, payload.type)
  );

//UPDATE MUTATIONS
export const useUpdateBedVariant = (id: string) =>
  useMutation(
    (props: VariantsTypes): Promise<CreateBedVariantResponse> =>
      updateBedVariantById(id, props)
  );

export const useUpdateBed = (id: string) =>
  useMutation(
    (props: BedRequestPayload): Promise<CreateBedVariantResponse> =>
      updateBedById(id, props)
  );

export const useUpdateAccessoriesIcon = () =>
  useMutation(
    (payload: UpdateColorIcon): Promise<UploadBedImage> =>
      updateAccessoriesIcon(
        payload.id,
        payload.label,
        payload.value,
        payload.type,
        payload?.image
      )
  );

//DELETE MUTATION
export const useDeleteBedById = () =>
  useMutation(
    (id: string): Promise<CreateBedVariantResponse> => deleteBedById(id)
  );

export const useDeleteBedVariantById = () =>
  useMutation(
    (id: string): Promise<CreateBedVariantResponse> => deleteBedVariantById(id)
  );

export const useLogin = () =>
  useMutation(({ email, password }: Login) => login(email, password));

export const useLogout = () => useMutation(() => logout());

export const useRegister = () =>
  useMutation(({ email, password, name }: Register) =>
    register({ name, email, password })
  );

export const useVerifyToken = () =>
  useMutation((token: string) => verifyToken(token));

export const useCreateOrder = () =>
  useMutation(
    (payload: OrderRequestPayload): Promise<any> => createOrder(payload)
  );

// FOR CREATE Review
export const useCreateReview = () =>
  useMutation(
    (payload: Partial<ReviewRequestPayload>): Promise<any> =>
      createReview(payload as any)
  );

export const useGetCouponById = () =>
  useMutation((id: string): Promise<any> => getCouponById(id));

export const useGetUpdateAmazonPay = () =>
  useMutation((data): Promise<any> => getAmazonPayUpdateSession(data));

export const useGetConfirmAmazonPay = () =>
  useMutation((data): Promise<any> => getAmazonPayUpdateSConfirm(data));
