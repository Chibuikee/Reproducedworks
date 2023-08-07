import { useState } from "react";
function Narbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navData = [
    { name: "Services" },
    { name: "Blog" },
    { name: "About" },
    { name: "Contact Us" },
  ];
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="logo w-8 h-8 cursor-pointer ml-4"
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
    >
      <path
        d="M82.646 37.0917C85.7401 35.3054 89.552 
        35.3054 92.646 37.0917L133.614 60.7445L105.286
         77.3318C100.901 72.9296 94.8325 70.2051 88.128 
         70.2051C81.1554 70.2051 74.871 73.1519 70.4523 
         77.8681L41.4416 60.8811L82.646 37.0917Z"
        fill="white"
      />
      <path
        d="M64.9303 87.4484L35.9141 70.4582V117.952L64.8222
         101.025C64.2287 98.9258 63.9111 96.7109 63.9111 
         94.4219C63.9111 91.9977 64.2673 89.6567 64.9303 
         87.4484Z"
        fill="white"
      />
      <path
        d="M70.1924 110.694L41.8975 127.262L82.646 150.788C85.74
         152.574 89.552 152.574 92.646 150.788L133.158 
         127.398L105.556 111.236C101.152 115.8 94.9714 
         118.639 88.128 118.639C81.0175 118.639 74.6227 
         115.574 70.1924 110.694Z"
        fill="white"
      />
      <path
        d="M111.22 101.739L139.376 118.226C139.377 
        118.162 139.378 118.098 139.378 118.034V70.1831L111.101
         86.7403C111.908 89.154 112.345 91.7369 112.345 
         94.4219C112.345 96.9723 111.951 99.4305 111.22 
         101.739Z"
        fill="white"
      />
    </svg>
  );

  const toggler = !toggleMenu
    ? "assetsForMenu/burger-menu.svg"
    : "assetsForMenu/close.svg";
  return (
    <div>
      <div
        style={{ backgroundImage: "url(/assetsForMenu/background.jpg)" }}
        className="background block w-screen h-screen opacity-100 z-[1] 
        bg-cover bg-no-repeat "
      >
        <div className="menu__wrapper flex relative flex-row z-[2]">
          <div
            className="menu__bar fixed flex w-full items-center 
          opacity-90 h-[60px] bg-background1 justify-between 
          pr-[24px] gap-[32px] flex-row"
          >
            <a href="#" title="Logo">
              {svg}
            </a>
            <img
              className="menu-icon hidden cursor-pointer w-8 h-8 nM:flex"
              src={process.env.PUBLIC_URL + toggler}
              title="Burger Menu"
              alt="Burger Menu"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            <ul
              className={`navigation ${
                toggleMenu ? "nM:animate-fadein" : "nM:animate-fadeout"
              }
               nM:absolute top-[60px] right-0  nM:p-[80px_60px] nM:min-h-full
                nM:bg-background1 nM:gap-2 nM:flex-col nM:items-start
                 nM:opacity-[0.95]
              flex flex-row items-center gap-[24px] list-none
              p-0 bg-background1`}
            >
              {navData.map((item) => (
                <li
                  key={item.name}
                  className="flex relative cursor-pointer text-[1.25rem]"
                >
                  <a
                    href={"#" + item.name}
                    title={item.name}
                    before=""
                    // -webkit-text-fill-color: transparent; could be achieved
                    // with text-opacity-0
                    className="text-[white] border-solid border-b-[2px] 
                    border-b-[transparent]
                     no-underline font-medium py-[3px] px-0 relative 
                     inline-block transition-[all] bg-[-100%] bg-[length:200%_100%]
                      ease-in-out duration-[0.2s] bg-gradient-to-r from-primaryhover
                       via-primaryhover via-50% to-[white] to-50% bg-clip-text 
                       text-opacity-0  hover:bg-[0] before:content-[attr(before)]
                        before:bg-primaryhover before:block before:absolute
                        before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px]
                         before:transition-all
                         before:duration-[0.2s] before:ease-in-out hover:before:w-full"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Narbar;

// The X account, @sopsy_c only recreated the orignal code using react and tailwindcss,
//  the original code was written by David Marez and thanks to him.
//  Published originally on:
// twitter https://twitter.com/davidm_ml/status/1686664642272096256
// github:https://github.com/atherosai/ui/tree/main/menu-02
// hover effect inspired by
// https://codepen.io/team/css-tricks/pen/OJOXWPp
// Font used: family=Poppins
