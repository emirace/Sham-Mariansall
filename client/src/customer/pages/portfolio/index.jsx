"use client";

import Footer from "../../components/Footer";
import Marq2 from "../landing-page/marq/marq2";
import Header from "./Header";
import Portfolio from "../../../components/p-grid/Portfolio";

export default function PortfolioGrid() {
  return (
    <>
      <body>
        {/* <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines /> */}
        {/* <Navbar /> */}
        <div>
          <div id="smooth-content">
            <main>
              <Header />
              <Portfolio />
              <Marq2 />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
