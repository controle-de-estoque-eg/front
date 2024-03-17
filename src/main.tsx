import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/global.css";

import { ThemeProvider } from "@/components/theme-provider";

import { queryClient } from "./lib/react-query/queryClient.tsx";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
// import { routeTree } from "./routeTree.gen";
import { routeTree } from "./routes/routeTree";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Create a new router instance
// const router = createRouter({ routeTree });

// Register the router instance for type safety
// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider storageKey="pdv-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
