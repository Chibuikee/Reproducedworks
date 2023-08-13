function Button() {
  return (
    <div className="text-base font-mulish">
      <span className="background bg-backgroundbtn grid place-items-center h-screen">
        <a
          href="https://learning.atheros.ai"
          className="button border-0 border-solid outline outline-[2px]
           text-[white] outline-[white] outline-offset-0
        text-base drop-shadow-none cursor-pointer max-w-[160px] leading-[2.5rem] 
        w-full tracking-[0.3rem] font-semibold
        relative uppercase flex justify-center transition-all duration-[550ms] ease-[cubic-bezier(.36,.63,.5,.73]
        hover:border-[2px] hover:border-solid hover:border-accent hover:outline-[rgba(255,255,255,0)]
         hover:outline-offset-[15px] hover:text-accent"
          title="Learn"
        >
          Learn
        </a>
      </span>
    </div>
  );
}

export default Button;

// The X account, @sopsy_c only recreated the orignal code using react and tailwindcss, the original
//  code was written by David Marez, published on:
// https://twitter.com/davidm_ml/status/1689542072678662144
// https://github.com/atherosai/ui/tree/main/buttons-02
// Font used: family=mulish
