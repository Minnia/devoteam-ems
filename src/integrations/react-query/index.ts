import { QueryClient } from "@tanstack/react-query";

const hours = (amount: number) => {
  return 1000 * 60 * 60 * amount;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: hours(1),
    },
  },
});
