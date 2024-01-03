import React from "react";
import Header from "./header";
import Footer from "./footer";
import { QueryClient, QueryClientProvider } from "react-query";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const queryClient = new QueryClient()
  return (
    <React.Fragment>
      
      <Header />
      {children}
      <QueryClientProvider client={queryClient}>
      <Footer />
      </QueryClientProvider>
    </React.Fragment>
  );
};
export default Layout;
