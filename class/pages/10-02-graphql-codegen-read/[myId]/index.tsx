import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function ProductReadPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchProduct">,
    IQueryFetchProductArgs
  >(FETCH_PRODUCT, {
    variables: { productId: String(router.query.myId) },
  });

  return (
    <>
      <div>나의 상품 id : {router.query.myId}</div>
      <div>판매자: {data ? data.fetchProduct?.seller : "qqq"} </div>
      <div>상품명: {data && data.fetchProduct?.name} </div>
      <div>상품상세: {data?.fetchProduct?.detail} </div>
      <div>상품가격: {data?.fetchProduct?.price}</div>
    </>
  );
}
