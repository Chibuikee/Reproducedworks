import React from "react";
import { parallaxData, parallaxMain } from "./data";

function Parallex() {
  return (
    <div className="font-poppins h-screen grid items-center">
      {parallaxMain.map((item) => (
        <React.Fragment key={item.name}>
          <div
            className={`parallax-image ${item.name} block h-[940px] 
            w-full bg-cover bg-fixed bg-center`}
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          ></div>
          <section className="p-16">
            <h2 className="uppercase mb-6">Parallax Example</h2>
            <p>{parallaxData.p1}</p>
            <p>{parallaxData.p2}</p>
            <p>{parallaxData.p3}</p>
          </section>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Parallex;
// The X account, @sopsy_c only recreated the orignal code using
// react and tailwindcss,
//  the original code was written by David Marez and thanks to him.
//  Published originally on:
// https://twitter.com/davidm_ml/status/1687747865660055552
// https://github.com/atherosai/ui/tree/main/parallax-01
// Font used: family=Poppins
