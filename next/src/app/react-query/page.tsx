"use client";
import React, { useEffect } from "react";
import {
  useGetMerchantOpenSellWithUseMutation,
  useGetMerchantOpenSellWithUseQuery,
} from "./hooks/useMerchant";

const DemoReactQuery = () => {
  // ******************************** useQuery ********************************
  const { data, refetch, isFetched, isError, error } =
    useGetMerchantOpenSellWithUseQuery();
  const handleClickWithUseQuery = () => {
    refetch();
  };

  useEffect(() => {
    if (isError) {
      console.log("error", error);
    } else {
      if (data?.code === 1000) {
        // navigate next page
      }
    }
  }, [isFetched]);

  // ******************************** useMutation *****************************

  const { mutate, mutateAsync } = useGetMerchantOpenSellWithUseMutation();
  const handleClickWithUseMutation = () => {
    mutate(undefined, {
      onSuccess: (data) => {
        console.log("Success with data", data);
        if (data.code === 1000) {
          // navigate next page
        }
      },
      onError: (err) => {
        console.log("err", err);
      },
    });
  };

  const handleClickWithUseMutationAsync = async () => {
    try {
      const res = await mutateAsync();
      console.log("res", res);
      if (data?.code === 1000) {
        // navigate next page
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  <div>
    <div>
      <button type="button" onClick={handleClickWithUseQuery}>
        get Status with useQuery
      </button>
    </div>
    <div>
      <button type="button" onClick={handleClickWithUseMutation}>
        get Status with useMutation
      </button>
    </div>
    <div>
      <button type="button" onClick={handleClickWithUseMutationAsync}>
        get Status with useMutationAsync
      </button>
    </div>
  </div>;
};

export default DemoReactQuery;
