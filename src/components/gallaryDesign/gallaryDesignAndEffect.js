import { gallaryData } from "./data";

function GallaryDesignAndEffect() {
  return (
    <section
      className="font-poppins h-screen grid place-items-center 
    p-8 bg-background "
    >
      <div className="gallery flex bg-background gap-4">
        {gallaryData.map((item) => (
          // peer is used as sibling selector incase youre new to tailwind
          <article
            className={`card group peer peer-hover:translate-x-[22px]
             peer-hover:font-bold relative left-0 w-[140px] h-[160px]
              cursor-pointer bg-background transition-all duration-[1000ms]
               hover:scale-[1.15] rounded-[8px] shadow-[0_5px_12px_rgba(0,0,0,0.5)] 
               overflow-hidden outline outline-[1px]
             outline-background origin-[center_left]`}
            key={item.name}
          >
            <figure>
              <img
                className="h-[160px] object-cover rounded-[4px]"
                src={process.env.PUBLIC_URL + item.img}
                alt={item.name}
              />
              {/* group is used to target the hover state of the parent class "card"  */}
              <figcaption
                className="group-hover:absolute left-0 bottom-0
               h-[80px] w-[160px] flex items-end text-[0.6rem] pl-[12px] pb-[10px]
                text-[white] bg-gradient-to-t from-[rgba(0,0,0,0.9)_0%] 
                to-[rgba(0, 0,0,0)_100%]"
              >
                <h3>{item.name}</h3>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}
// The X account, @sopsy_c only recreated the orignal code using react and tailwindcss, the original
//  code was written by David Marez, published on:
// twitter https://twitter.com/davidm_ml/status/1687112428885315585
// github:https://github.com/atherosai/ui/tree/main/gallery-04
//   <!-- Pictures from Freepik -->
// Font used: family=Poppins

export default GallaryDesignAndEffect;
