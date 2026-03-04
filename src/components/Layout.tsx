import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-16 min-h-0 w-full overflow-x-hidden">{children}</main>
    <footer className="flex-shrink-0 w-full mt-auto">
      <Footer />
    </footer>
  </div>
);

export default Layout;
