"use client";
import { useEffect, useRef } from "react";

import Footer from "../../components/Footer";
import Marq2 from "../landing-page/marq/marq2";
import Header from "./Header";
import Portfolio from "../../../components/p-grid/Portfolio";
import ProgressScroll from "../../../common/ProgressScroll";
import Lines from "../../../common/Lines";
import Cursor from "../../../common/cusor";
// import LoadingScreen from "../../../common/loader";

export default function PortfolioGrid() {
  const main = useRef();

  return (
    <>
      <body>
        {/* <LoadingScreen /> */}
        <Cursor />
        <ProgressScroll />
        <Lines />

        <div id="smooth-wrapper" ref={main}>
          <div id="smooth-content">
            <main className="main-bg o-hidden">
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
