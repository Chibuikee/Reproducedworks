import { useState } from "react";
import { svgs, expandBtn, logo, svgBottom } from "./svgFiles";
function SideBar() {
  const [collapsed, setCollapsed] = useState(true);
  const [active, setActive] = useState("");
  return (
    <main className="flex flex-col flex-[1]">
      <nav
        className={`${
          collapsed ? "w-[18rem]" : "w-[80px]"
        } sticky top-0 left-0 h-screen bg-primarycolor
       overflow-x-hidden p-[1.8rem_0.85rem] text-text flex 
       flex-col transition-[width] ease-in-out duration-[0.5s]`}
      >
        <div
          className={`${
            collapsed
              ? "sidebar-top relative items-center justify-between flex-row mb-[32px]"
              : " flex-col p-0 justify-center"
          } flex`}
        >
          <div className="logo__wrapper pl-[4px] flex justify-start items-center gap-3">
            {logo}
            <h2
              className={`${
                collapsed
                  ? ""
                  : `hide opacity-0 absolute hidden pointer-events-none transition-all
                 duration-[0.1s] ease-in-out`
              } `}
            >
              Astra
            </h2>
          </div>
          <div
            onClick={() => setCollapsed(!collapsed)}
            className={`expand-btn relative grid place-items-center
           rounded-[6px] cursor-pointer duration-[0.3s]`}
          >
            <svg
              className={`${
                collapsed
                  ? "w-[42px] h-[42px] rotate-180"
                  : "mt-[4px] rotate-[360deg] w-[48px] h-[48px]"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {expandBtn}
            </svg>
          </div>
        </div>
        <div className="sidebar-links">
          <ul className="list-none relative">
            {svgs.map((Item) => (
              <li
                key={Item.name}
                onClick={() => setActive(Item.name)}
                className="relative"
              >
                <a
                  href={"#" + Item.name}
                  title={Item.name}
                  className={` m-[8px_0px] p-3 hover:w-full
                 hover:bg-sidebargraybackground hover:transition-all 
                 hover:duration-[100ms] hover:ease-in hover:text-sidebargraylight
                   hover:rounded-[10px] text-sidebargraylight text-[1.25rem] flex
               Items-center h-[56px] transition-all ease-in-out duration-[0.5s] ${
                 active === Item.name &&
                 `bg-sidebargraybackground transition-all duration-[100ms] 
                ease-in text-[white] rounded-[10px] w-full`
               } `}
                >
                  <svg
                    className={`text-sidebargraylight h-[32px] w-[32px]
                   hover:stroke-sidebargraylight ${
                     active === Item.name && "stroke-[white]"
                   } ${active === ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#91959C"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {Item.svg}
                  </svg>

                  <span
                    className={`${
                      collapsed
                        ? ""
                        : ` hide opacity-0 absolute hidden pointer-events-none
                       transition-all duration-[0.1s] ease-in-out`
                    } link ml-[30px] opacity-100`}
                  >
                    {Item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-links sidebar-bottom flex justify-center flex-col mt-auto">
          <div className="divider w-full bg-sidebargraylight h-[1px] block"></div>
          <ul className="m-[6px_0px] relative">
            {svgBottom.map((Item) => (
              <li
                key={Item.name}
                onClick={() => setActive(Item.name)}
                className="relative"
              >
                <a
                  href={"#" + Item.name}
                  title={Item.name}
                  className={`m-[8px_0px] p-3 hover:w-full hover:bg-sidebargraybackground 
                hover:transition-all hover:duration-[100ms] hover:ease-in
                 hover:text-sidebargraylight  hover:rounded-[10px]
                text-sidebargraylight text-[1.25rem] flex items-center
                 h-[56px] transition-all ease-in-out duration-[0.5s] ${
                   active === Item.name &&
                   `bg-sidebargraybackground transition-all duration-[100ms] 
                   ease-in text-[white] rounded-[10px] w-full`
                 } `}
                >
                  <svg
                    className={`text-sidebargraylight h-[32px] w-[32px]
                   hover:stroke-sidebargraylight ${
                     active === Item.name && "stroke-[white]"
                   } ${active === ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#91959C"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {Item.svg}
                  </svg>

                  <span
                    className={`${
                      collapsed
                        ? ""
                        : `hide opacity-0 absolute hidden pointer-events-none 
                      transition-all duration-[0.1s] ease-in-out`
                    }  link ml-[30px] opacity-100`}
                  >
                    {Item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="divider w-full bg-sidebargraylight h-[1px] block"></div>
          <div className="sidebar__profile flex items-center pl-[2px] gap-[20px] mt-4">
            <div className="avatar__wrapper relative flex">
              <img
                className="avatar block h-[50] w-[50px] cursor-pointer
               rounded-[50%] drop-shadow-[-20px_0_10px_rgba(0,0,0,0.1)] 
               hover:scale-[1.05] transition-all duration-[0.2s] ease-in-out"
                src="https://i.ibb.co/JmPXrYZ/joe-doe-profile.png"
                alt="Joe Doe"
              />
              <div
                className="online__status absolute w-3 h-3 rounded-[50%]
             bg-success bottom-[3px] right-[3px]"
              ></div>
            </div>
            <section
              className={`${
                !collapsed &&
                ` hide opacity-0 absolute hidden pointer-events-none
               transition-all duration-[0.1s] ease-in-out`
              }  avatar__name flex flex-col gap-[4px]`}
            >
              <div className="user-name text-[0.95rem] font-bold text-left">
                Joe Doe
              </div>
              <div className="email text-[0.9rem]">joe.doe@atheros.ai</div>
            </section>
          </div>
        </div>
      </nav>
    </main>
  );
}
// The X account, @sopsy_c only rewrote the orignal code using react and tailwindcss, the original
//  code was written by David Marez, published on:
// twitter https://twitter.com/davidm_ml/status/1685975693593563136
// github: https://github.com/atherosai/ui/tree/main/sidebar-02
export default SideBar;
