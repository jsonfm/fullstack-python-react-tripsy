import { hotelsService } from "@/services/api/hotels";
import useSWR from "swr";

export const useGetHotels = () => {
  const response = useSWR(`/api/main-hotels`, () =>
    hotelsService.getMainHotels()
  );
  return response;
};
