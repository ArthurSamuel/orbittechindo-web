import React from "react";
import { RouterProvider } from "react-router";
import router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContext } from "./context/Toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <ToastContext>
          <RouterProvider router={router} />
        </ToastContext>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
