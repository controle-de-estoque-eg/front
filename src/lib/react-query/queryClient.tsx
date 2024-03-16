import { QueryClient } from "@tanstack/react-query";
// import api from "@/lib/axios/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const defaultQueryFn = async ({ queryKey }: any) => {
//   const { data } = await api.get(`${queryKey[0]}`);
//   return data;
// };

const milliseconds = 120000; // 1 min = 60000ms
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: milliseconds,
      // , queryFn: defaultQueryFn
    },
  },
});
