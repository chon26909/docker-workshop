import { useMutation, useQuery } from "@tanstack/react-query";

export const getMerchantOpenSell = () => {
  return new Promise<{ code: number; message: string; data: boolean }>(
    (resolve) => {
      const response = { code: 1000, message: "success", data: true };
      setTimeout(() => resolve(response), 2 * 1000);
    }
  );
};

export const useGetMerchantOpenSellWithUseQuery = () => {
  return useQuery({
    queryKey: ["get-merchant-open-sell"],
    queryFn: () => getMerchantOpenSell(),
  });
};

export const useGetMerchantOpenSellWithUseMutation = () => {
  return useMutation({ mutationFn: () => getMerchantOpenSell() });
};
