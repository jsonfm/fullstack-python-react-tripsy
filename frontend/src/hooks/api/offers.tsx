import { offersService } from "@/services/api/offers";
import useSWR from "swr";

export const useGetMainOffers = () => {
  const response = useSWR(`/api/main-offers`, () =>
    offersService.getMainOffers()
  );
  return response;
};
