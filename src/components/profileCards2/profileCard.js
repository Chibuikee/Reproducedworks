import { dataProfileCard } from "./data";

function ProfileCard() {
  return (
    <section
      className="container bg-backgroundbtn grid place-items-center
     h-screen font-poppins p-6"
    >
      <div
        className="card flex flex-wrap rounded-[20px_20px_16px_16px]
         bg-[white] cursor-pointer overflow-hidden max-w-[clamp(620px,70vw,820px)]
         min-w-[260px] min-h-[280px] hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px]"
      >
        <div className="background flex flex-[1_1_250px]">
          <img
            className="w-full h-full object-cover"
            src={process.env.PUBLIC_URL + "assetsProfileCard/profile.jpg"}
            alt="background"
          />
        </div>
        <div className="content flex flex-[3_1_350px] flex-col justify-start p-4">
          <h2
            className="text-[clamp(1.3rem,_2.5vw,_1.8rem)] font-bold mb-[clamp
            (0.35rem,_2vw,_0.55rem)]"
          >
            Jason Alexander
          </h2>
          <p
            className="text-[clamp(1.1rem,_1.75vw,_1.35rem)] font-normal mb-4
           leading-[22px]"
          >
            I'm JavaScript full-stack engineer, love working with
            <em>React</em> and <em>Node.js</em>.
          </p>
          <ul
            className="social-icons flex w-full justify-end mt-auto gap
          -[clamp(0.4rem,_2vw,_0.8rem)]"
          >
            {dataProfileCard.map((item) => (
              <li key={item.name} className="list-none">
                <a
                  href={"#" + item.name}
                  className="relative grid place-items-center font-bold duration
                  -[0.2s]"
                  title={item.name}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather stroke-backgroundbtn w-[clamp(1.6rem,_
                      2.3vw,_2rem)] h-[clamp(1.6rem,_2.3vw,_2rem)] stroke-[2px] 
                      hover:duration-[1.2s] hover:rotate-[(360deg)]"
                  >
                    {item.path}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
// The X account, @sopsy_c only rewrote the orignal code using react and tailwindcss, the original
//  code was written by David Marez, published on:
// twitter https://twitter.com/davidm_ml/status/1690297016138510336
// github: https://github.com/atherosai/ui/tree/main/profile-cards-02
